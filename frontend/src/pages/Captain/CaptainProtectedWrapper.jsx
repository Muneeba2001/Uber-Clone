import React, { useEffect, useContext, useState } from "react";
import { CaptainDataContext } from "../../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
      return;
    }

    const fetchCaptainData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/captain/profile`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (response.status === 200) {
          setCaptain(response.data.captain);
        }
      } catch (error) {
        console.error("Error fetching captain data:", error);
        localStorage.removeItem("token");
        navigate("/captain-login");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaptainData();
  }, [token, navigate, setCaptain]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectedWrapper;
