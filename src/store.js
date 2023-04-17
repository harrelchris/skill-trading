import { configureStore } from '@reduxjs/toolkit'
import BiologyImplant from "./Dashboard/Inputs/BiologyImplant/reducer"
import BiologySkill from "./Dashboard/Inputs/BiologySkill/reducer"
import BuySell from "./Dashboard/Inputs/BuySell/reducer";
import SkillPoints from "./Dashboard/Inputs/SkillPoints/reducer"

export const store = configureStore({
  reducer: {
    BiologyImplant: BiologyImplant,
    BiologySkill: BiologySkill,
    BuySell: BuySell,
    SkillPoints: SkillPoints,
  },
})
