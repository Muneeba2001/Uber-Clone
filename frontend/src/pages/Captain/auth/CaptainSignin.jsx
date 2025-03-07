import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../../../context/CaptainContext";
import axios from "axios";

const CaptainSignin = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const captaindata = {
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        vehicleType: vehicleType,
        capacity: vehicleCapacity,  
      }
    };
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, captaindata);
    if(response === 201){
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token',data.token)
        navigate('/captain-home')
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setVehicleColor(""); 
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("")
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 h-16 object-contain"
          src="https://pngimg.com/d/uber_PNG24.png"
          alt=""
        />
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h3 className="text-base font-medium mb-2 mt-5">What's your name</h3>
          <div className="flex gap-3 mb-3">
            <input
              required
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <input
              required
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <h3 className="text-base font-medium mb-2 ">What's your email</h3>
          <input
            required
            className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h3 className="text-base font-medium mb-2">Enter Pasword</h3>

          <input
            required
            className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <h3 className="text-base font-medium mb-2">Vehicle Information</h3>
          <div className="flex gap-4">
            <input
              required
              className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm"
              type="text"
              placeholder="vehicle color"
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value);
              }}
            />
            <input
              required
              className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm"
              type="text"
              placeholder="vehicle plate"
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value);
              }}
            />
          </div>
          <div className="flex gap-4">
            <select
              required
              className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-1/2 text-sm text-gray-500"
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value);
              }}
            >
              <option value="" disabled className="text-sm text-gray-400">
                Select vehicle type
              </option>
              <option value="auto" className="text-sm">
                Auto
              </option>
              <option value="car" className="text-sm">
                Car
              </option>
              <option value="bike" className="text-sm">
                Bike
              </option>
            </select>
            <input
              required
              className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm"
              type="number"
              placeholder="vehicle capacity"
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value);
              }}
            />
          </div>
          <button className="bg-[#111] text-white font-semibold rounded px-4 py-2 border w-full text-base placeholder:text-sm">
            Signin as captain
          </button>
          <p className="text-center mt-2">
            Already have an account?{" "}
            <Link to="/captain-login" className="text-blue-600">
              Login here
            </Link>{" "}
          </p>
        </form>
      </div>
      <div>
        <p className="text-xs text-slate-600">
          This site is protected by reCAPTCHA and{" "}
          <span className="text-black underline cursor-pointer">
            Google Privacy Policy
          </span>{" "}
          and terms of services apply.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignin;
