import React from "react";
import BiologySkillLevelSelector from "./BiologySkillLevelSelector";
import BuySellToggle from "./BuySellToggle";
import SkillPointRangeSelector from "./SkillPointRangeSelector";
import BiologyImplantSelector from "./BiologyImplantSelector";

function index({
  useSellValue,
  setUseSellValue,
  skillPointRange,
  setSkillPointRange,
  biologySkillLevel,
  setBiologySkillLevel,
  biologyImplant,
  setBiologyImplant,
}) {
  return (
    <div>
      <h1>Character</h1>
      <BuySellToggle value={useSellValue} setter={setUseSellValue} />
      <SkillPointRangeSelector value={skillPointRange} setter={setSkillPointRange} />
      <BiologySkillLevelSelector value={biologySkillLevel} setter={setBiologySkillLevel} />
      <BiologyImplantSelector value={biologyImplant} setter={setBiologyImplant} />
    </div>
  );
}

export default index;
