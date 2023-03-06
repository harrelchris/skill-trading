import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Client from "../../oauth2/Client";

function Logout() {
  const client = new Client();
  const navigate = useNavigate();

  useEffect(() => {
    const redirectURL = client.logout();
    navigate(redirectURL);
  }, [])
  return (
    <>
      <h1>Logout</h1>
      <p>Logging out. Please wait.</p>
    </>
  );
}

export default Logout;
