import React, {useEffect, useState} from "react";
import Header from "./Header";
import Injectors from "./Injectors";
import Accelerators from "./Accelerators";
import Evepraisal from "../api/evepraisal";

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
  const ep = new Evepraisal();
  const [prices, setPrices] = useState({
    "Large Skill Injector": {
      buy: 0,
      sell: 0,
    },
    "Small Skill Injector": {
      buy: 0,
      sell: 0,
    },
    "Daily Alpha Injector": {
      buy: 0,
      sell: 0,
    },
    "Expert Cerebral Accelerator": {
      buy: 0,
      sell: 0,
    },
    "Master-at-Arms Cerebral Accelerator": {
      buy: 0,
      sell: 0,
    },
  });

  useEffect(() => {
    ep.getPrices().then(priceData => setPrices(priceData));
  }, []);

  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <Injectors prices={prices} />
      <Accelerators prices={prices} />
    </>
  );
}

export default Index;
