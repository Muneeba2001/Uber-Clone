import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useNavigate } from "react-router-dom";

const position = [37.7749, -122.4194];

const Home = () => {
  const navigate = useNavigate();

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
      <div className="w-full bg-white bottom-0  absolute">
        <h4 className="text-3xl font-semibold mb-2">Find a Trip</h4>
        <input
          type="text"
          className="w-full p-2 border bg-gray-300 rounded"
          placeholder="Add a pick location"
        />
        <input
          type="text"
          className="w-full p-2 border bg-gray-300 rounded mt-2"
          placeholder="Add a drop location"
        />
      </div>
    </div>
  );
};

export default Home;
