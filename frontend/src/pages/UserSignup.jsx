import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const[firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userData, setUserData] = useState({});

  const handleSubmit = (e)=>{
    e.preventDefault();
    setUserData({
      userName:{
      firstName: firstName,
      lastName: lastName,
      },
      email: email,
      password: password,
    });
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 h-16 object-contain"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form onSubmit={(e)=>{
          handleSubmit(e);
        }}>
          <h3 className="text-base font-medium mb-2 mt-5">What's your name</h3>
          <div className="flex gap-3 mb-3">
            <input
              required
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e)=>{
               setFirstName(e.target.value)
              }}
            />
            <input
              required
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e)=>{
               setLastName(e.target.value)
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
              onChange={(e)=>{
               setEmail(e.target.value)
              }}
          />
          <h3 className="text-base font-medium mb-2">Enter Pasword</h3>
          <input
            required
            className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="password"
            placeholder="password"
            value={password}
              onChange={(e)=>{
               setPassword(e.target.value)
              }}
          />
          <button className="bg-[#111] text-white font-semibold rounded px-4 py-2 border w-full text-base placeholder:text-sm">
            Signin
          </button>
          <p className="text-center mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login here
            </Link>{" "}
          </p>
        </form>
      </div>
      <div>
        <p className="text-xs text-slate-600">
          By proceeding, you consent to get calls, whatsapp or SMS message,
          including by automated means, by uber and its affiliates to the number
          provided
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
