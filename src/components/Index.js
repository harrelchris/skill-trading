import React from "react";
import Header from "./Header";
import Inputs from "./Inputs";
import Outputs from "./Outputs";

function isAuthenticated() {
  const requiredKeys = ["accessToken", "refreshToken", "expiresAt", "name", "id"];

  for (let key of requiredKeys) {
    if (localStorage.getItem(key) === null) {
      return false;
    }
  }
  return true;
}

function Index() {
  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <Inputs />
      <Outputs />
    </>
  );
}

export default Index;
