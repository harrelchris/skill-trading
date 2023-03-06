import React, {useEffect} from "react";
import Client from "../../oauth2/Client";
import Provider from "../../oauth2/Provider";

function Authorize() {
  const client = new Client();
  const provider = new Provider();
  const [authorizationURL, state] = provider.authorize();

  useEffect(() => {
    client.storage.setItem("state", state);
    window.location.href = authorizationURL;
  }, []);

  return (
    <>
      <h1>Authorize</h1>
      <p>Redirecting to authorization endpoint.</p>
    </>
  );
}

export default Authorize;
