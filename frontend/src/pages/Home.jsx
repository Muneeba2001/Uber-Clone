import React, { useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";

const position = [37.7749, -122.4194];

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panel, setPanel] = useState(false);
  const panelOpenRef = useRef(null);
  const panelCloseRef = useRef(null);
  const logoRef = useRef(null); // Uber logo reference

  useGSAP(() => {
    if (panel) {
      gsap.to(panelOpenRef.current, {
        height: "400px",
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        padding: 20,
        immediateRender: false,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
        duration: 0.3,
        immediateRender: false,
      });
      gsap.to(logoRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.out",
        immediateRender: false,
      });
    } else {
      gsap.to(panelOpenRef.current, {
        height: "0px",
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        padding: 20,
        immediateRender: false,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
        duration: 0.3,
        immediateRender: false,
      });
      gsap.to(logoRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.in",
        immediateRender: false,
      });
    }
  }, [panel]);

  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Uber Logo - Left Aligned & Animated */}
      <img
        ref={logoRef}
        className="absolute top-4 left-6 z-[1000] w-16 h-16 object-contain transition-all"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Uber Logo"
      />

      {/* Map Section */}
      <div className="relative flex justify-center p-6 top-10">
        <MapContainer
          center={position}
          zoom={13}
          className="z-[0]"
          style={{ height: "400px", width: "90%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {/* Custom Uber Logo Marker */}
          <Marker position={position}>
            <Popup>Uber Location</Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Find a Trip Section */}
      <div className="w-full bg-white bottom-0 absolute flex flex-col overflow-x-hidden">
        <div className="h-[30%] bg-white relative max-w-screen-lg mx-auto w-full px-4">
          <h5
            onClick={() => setPanel(false)}
            className="absolute right-6 top-2 text-2xl cursor-pointer"
            ref={panelCloseRef}
            style={{ opacity: 0 }}
          >
            <i className="ri-arrow-down-s-line"></i>
          </h5>
          <h4 className="text-3xl font-semibold mb-2">Find a Trip</h4>
          <form onSubmit={submitHandler} className="flex flex-col gap-2">
            <input
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              onClick={() => setPanel(true)}
              type="text"
              className="w-full p-2 border bg-gray-300 rounded text-center"
              placeholder="Add a pick location"
            />
            <input
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onClick={() => setPanel(true)}
              type="text"
              className="w-full p-2 border bg-gray-300 rounded text-center"
              placeholder="Add a drop location"
            />
          </form>
        </div>
        <div
          ref={panelOpenRef}
          className="bg-white w-full max-w-screen-lg mx-auto"
          style={{ height: "70%"}}
        >
          <LocationSearchPanel/>
        </div>
      </div>
    </div>
  );
};

export default Home;
