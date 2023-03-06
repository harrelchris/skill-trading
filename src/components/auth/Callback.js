import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Client from "../../oauth2/Client";

function Callback({code, state}) {
  const client = new Client();
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPath = client.callback(code, state);
    navigate(redirectPath);
  }, []);

  return (
    <>
      <h1>Callback</h1>
      <p>Received callback</p>
    </>
  );
}

export default Callback;
