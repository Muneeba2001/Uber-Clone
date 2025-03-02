import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const token = localStorage.getItem('token');
  console.log("Token from localStorage:", token);

  const navigate = useNavigate();
  axios.get(`${import.meta.env.VITE_BASE_URL}/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      //   withCredentials: true,
    })
    .then((response) => {
      if (response.status === 200) {
        console.log("Logout Response:", response);
        localStorage.removeItem("token");
        navigate("/login");
      }
    });
  return <>Logout</>
};

export default UserLogout;
