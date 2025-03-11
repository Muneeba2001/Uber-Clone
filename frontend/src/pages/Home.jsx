import React, { useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import 'remixicon/fonts/remixicon.css'

const position = [37.7749, -122.4194];

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panel, setPanel] = useState(false);
  const panelOpenRef = useRef(null);
  const panelCloseRef = useRef(null)

  useGSAP(function () {
   if(panel){
    gsap.to(panelOpenRef.current,{
      height: '70%'
    })
    gsap.to(panelCloseRef.current, {
      opacity: 1,
    })
   }else{
    gsap.to(panelOpenRef.current,{
      height: '0%'
    })
    gsap.to(panelCloseRef.current, {
      opacity: 0,
    })
   }
  }, [setPanel]);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-7 h-screen flex flex-col">
      {/* Uber Logo Positioned at the Top Left of the Map */}
      <img
        className="absolute top-3 left-56 z-[1000] w-16 h-16 object-contain"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Uber Logo"
      />

      {/* Map Section */}
      <MapContainer
        center={position}
        zoom={13}
        className="relative z-[0]"
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Custom Uber Logo Marker */}
        <Marker position={position}>
          <Popup>Uber Location</Popup>
        </Marker>
      </MapContainer>
      {/* Find a Trip Section - Now BELOW the Map */}
      <div className="w-full bg-white bottom-0 absolute flex flex-col">
        <div className="h-[30%] bg-white relative">
          <h5 onClick={()=>{
            setPanel(false)
          }} className="absolute right-6 top-2 text-2xl opacity-0" ref={panelCloseRef}>
          <i className="ri-arrow-down-s-line"></i>
          </h5>
          <h4 className="text-3xl font-semibold mb-2">Find a Trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-20 w-1 top-[37%] bg-gray-800 left-5 rounded-full"></div>
            <input
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              onClick={() => {
                setPanel(true);
              }}
              type="text"
              className="w-full p-2 border bg-gray-300 rounded text-center"
              placeholder="Add a pick location"
            />
            <input
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              onClick={() => {
                setPanel(true);
              }}
              type="text"
              className="w-full p-2 border bg-gray-300 rounded mt-2 text-center"
              placeholder="Add a drop location"
            />
          </form>
        </div>
        <div ref={panelOpenRef} className="h-[70%] bg-red-500"></div>
      </div>
    </div>
  );
};

export default Home;
