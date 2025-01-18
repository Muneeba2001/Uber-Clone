import React, { useContext } from "react";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import UserLogin from "./pages/userLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignin from "./pages/CaptainSignin";
import { UserDataContext } from "./context/userContext";
import Start from "./pages/Start";

const App = () => {
  const ans = useContext(UserDataContext);
  console.log(ans);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignin />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
