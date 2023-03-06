import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Callback({code, state}) {
  const [message, setMessage] = useState("Validating callback...");
  const navigate = useNavigate();

  function validateCallback() {
    if (code === null) {
      console.error("Authorization failed. Did not receive valid authorization code.");
      localStorage.removeItem("state");
      navigate("/")
    } else if (state === null || state !== localStorage.getItem("state")) {
      console.error("Authorization failed. Did not receive valid state.");
      localStorage.removeItem("state");
      navigate("/");
    } else {
      localStorage.removeItem("state");
      localStorage.setItem("code", code);
    }
  }

  async function getAccessToken() {
    const code = localStorage.getItem("code");
    let jwt = null;

    try {
      jwt = await fetchJWT(code);
    } catch(error) {
      console.error(error);
    }

    return jwt;
  }

  async function fetchJWT(code) {
    const payload = {
      grant_type: "authorization_code",
      code: code
    };
    const authorization = window.btoa(`${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_SECRET_KEY}`);
    const body = new URLSearchParams(payload).toString();
    const response = await fetch("https://login.eveonline.com/v2/oauth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Basic ${authorization}`,
      },
      body: body
    });
    return await response.json();
  }

  function parseJWT(jwt) {
    const [, b64Payload,] = jwt["access_token"].split(".");
    const payloadString = window.atob(b64Payload);
    const payload = JSON.parse(payloadString);
    return {
      accessToken: jwt["access_token"],
      refreshToken: jwt["refresh_token"],
      expiresAt: payload["exp"],
      name: payload["name"],
      id: payload["sub"].split(":")[2]
    };
  }

  useEffect(() => {
    validateCallback();
    setMessage("Requesting access token...");
    getAccessToken()
      .then((jwt) => {
        localStorage.removeItem("code");
        const token = parseJWT(jwt)
        for (let key in token) {
          localStorage.setItem(key, token[key]);
        }
        navigate("/dashboard")
      })
      .catch((error) => {
        console.error(error);
    })
  }, []);

  return <h1>{message}</h1>;
}

export default Callback;
