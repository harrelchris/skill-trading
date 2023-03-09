import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("expiresAt");
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    navigate("/");
  }, []);

  return <h1>Logging out...</h1>;
}

export default Logout;
