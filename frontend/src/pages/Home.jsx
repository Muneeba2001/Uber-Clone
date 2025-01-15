import React from "react";
import { Link } from "react-router-dom";
import Heading from "../components/Heading";

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://img.freepik.com/premium-vector/traffic-light-with-red-light-it_909058-19345.jpg)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400">
        <div>
        <img
          className="w-16 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        </div>
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="font-bold text-3xl">Get Started with Uber</h2>
          <Link
            to="/login"
            className="flex justify-center items-center w-full bg-black text-white py-3 rounded mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
