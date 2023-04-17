import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const keys = [
      "accessToken",
      "refreshToken",
      "expiresAt",
      "name",
      "id",
      "fetched",
      "_bip",
      "_bsp",
      "_spr"
    ];

    for (let key of keys) {
      localStorage.removeItem(key);
    }
    navigate("/");
  }, []);

  return <h1>Logging out...</h1>;
}

export default Logout;
