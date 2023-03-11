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

    if (isAuthenticated()) {
      if (localStorage.getItem("fetched") !== null) {

        let _bip = localStorage.getItem("_bip");
        _bip = Number.parseFloat(_bip)
        setBiologyImplant(_bip);

        let _bsl = localStorage.getItem("_bsl");
        _bsl = Number.parseInt(_bsl);
        setBiologySkillLevel(_bsl);

        let _spr = localStorage.getItem("_spr");
        _spr = Number.parseInt(_spr);
        setSkillPointRange(_spr);

        return;
      } else {
        localStorage.setItem("fetched", "1");
      }

      const characterID = localStorage.getItem("id");
      const accessToken = localStorage.getItem("accessToken");

      const skillsURL = `https://esi.evetech.net/latest/characters/${characterID}/skills/?datasource=tranquility`
      fetch(skillsURL, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${accessToken}`
        }
      })
        .then(response => response.json())
        .then(data => {
          // Set Skill Point Range
          const totalSP = data["total_sp"];
          let _spr;
          if (totalSP >= 80000000) {
            _spr = 3;
          } else if (totalSP >= 50000000) {
            _spr = 2;
          } else if (totalSP >= 5000000) {
            _spr = 1;
          } else {
            _spr = 0;
          }
          localStorage.setItem("_spr", _spr)
          setSkillPointRange(_spr);

          // Set Biology Skill Level
          // 3405 biology
          for (let skill of data["skills"]) {
            if (skill["skill_id"] === 3405) {
              const _bsl = skill["trained_skill_level"];
              localStorage.setItem("_bsl", _bsl);
              setBiologySkillLevel(_bsl);
            }
          }

        })
        .catch(error => console.error(error))

      // Set Biology Implant
      const implantURL = `https://esi.evetech.net/latest/characters/${characterID}/implants/?datasource=tranquility`
      fetch(implantURL, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${accessToken}`
        }
      })
        .then(response => response.json())
        .then(data => {
          let _bip;
          if (data.includes(27148)) {
            _bip = 0.10;
          } else if (data.includes(27147)) {
            _bip = 0.05;
          } else {
            _bip = 0.00;
          }
          localStorage.setItem("_bip", _bip);
          setBiologyImplant(_bip);
        })
        .catch(error => console.error(error))
    }
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
