import React, {useEffect, useState} from "react";
import Header from "./Header";
import Injectors from "./Injectors";
import Accelerators from "./Accelerators";
import Evepraisal from "../api/evepraisal";
import Character from "./Character";

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

  const [useSellValue, setUseSellValue] = useState(true);
  const [biologySkillLevel, setBiologySkillLevel] = useState(0);
  const [skillPointRange, setSkillPointRange] = useState(0);
  const [biologyImplant, setBiologyImplant] = useState(0);

  useEffect(() => {
    ep.getPrices().then(priceData => setPrices(priceData));
  }, []);

  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <Character
        useSellValue={useSellValue}
        setUseSellValue={setUseSellValue}
        biologySkillLevel={biologySkillLevel}
        setBiologySkillLevel={setBiologySkillLevel}
        skillPointRange={skillPointRange}
        setSkillPointRange={setSkillPointRange}
        biologyImplant={biologyImplant}
        setBiologyImplant={setBiologyImplant}
      />
      <Injectors
        prices={prices}
        useSellValue={useSellValue}
        skillPointRange={skillPointRange}
      />
      <Accelerators
        prices={prices}
        useSellValue={useSellValue}
        biologySkillLevel={biologySkillLevel}
        biologyImplant={biologyImplant}
      />
    </>
  );
}

export default Index;
