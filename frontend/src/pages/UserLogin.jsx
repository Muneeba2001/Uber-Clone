import React from "react";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";

const UserLogin = () => {
  return (
    <div className="p-7">
      <Heading />
      <div>
      <form>
        <h3 className="text-lg font-medium mb-2 mt-8">What's your email</h3>
        <input
          required
          className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          type="email"
          placeholder="email@example.com"
        />
        <h3 className="text-lg font-medium mb-2">Enter Pasword</h3>
        <input
          required
          className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          type="password"
          placeholder="password"
        />
        <button className="bg-[#111] text-white font-semibold rounded px-4 py-2 border w-full text-lg placeholder:text-base">
          Login
        </button>
        <p className="text-center mt-2">New here? <Link to="/signup" className="text-blue-600">Create New Account</Link> </p>
      </form>
      </div>
      <div>
      <button className="bg-[#10b461] text-white mt-5 font-semibold rounded px-4 py-2 border w-full text-lg placeholder:text-base">
          SignIn as Captain
        </button>
      </div>
    </div>
  );
};

export default UserLogin;
