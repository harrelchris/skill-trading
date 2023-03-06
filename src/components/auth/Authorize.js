import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";

function Authorize() {
  useEffect(() => {
    const state = uuid();
    const queryParams = {
      response_type: "code",
      redirect_uri: process.env.REACT_APP_CALLBACK_URL,
      client_id: process.env.REACT_APP_CLIENT_ID,
      scope: process.env.REACT_APP_SCOPE,
      state: state
    };
    const queryString = new URLSearchParams(queryParams).toString();
    localStorage.setItem("state", state);
    window.location.href = "https://login.eveonline.com/v2/oauth/authorize/?" + queryString;
  }, []);

  return <h1>Redirecting...</h1>;
}

export default Authorize;
