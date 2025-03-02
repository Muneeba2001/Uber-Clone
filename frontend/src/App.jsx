import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/User/auth/UserLogin";
import UserSignup from "./pages/User/auth/UserSignup";
import CaptainLogin from "./pages/Captain/auth/CaptainLogin";
import CaptainSignin from "./pages/Captain/auth/CaptainSignin";
import { UserDataContext } from "./context/userContext";
import Start from "./pages/Start";
import UserProtectedWrapper from "./pages/User/UserProtectedWrapper";
import UserLogout from "./pages/User/auth/UserLogout";

const App = () => {
  const ans = useContext(UserDataContext);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignin />} />
        <Route
          path="/home"
          element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/logout"
          element={
            <UserProtectedWrapper>
              <UserLogout />
            </UserProtectedWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
