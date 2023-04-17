export const injectorSPLevels = {
  "Large Skill Injector": {
    0: 500000,
    1: 400000,
    2: 300000,
    3: 150000
  },
  "Small Skill Injector": {
    0: 100000,
    1: 80000,
    2: 60000,
    3: 30000
  }
};

export function acceleratorHours(baseHours, biologySkillLevel, implantBonus) {
  return ((baseHours * (1 + (0.2 * biologySkillLevel))) * (1 + implantBonus)).toFixed(2);
}

export function acceleratorSPPerHour(attributeModifier) {
  return (((17 + attributeModifier) + ((17 * 0.5) + attributeModifier)) * 60).toFixed(0);
}

export function acceleratorSP(hours, sp_per_hour) {
  return Number.parseInt(((hours * sp_per_hour) - (hours * 1530)).toFixed(0));
}
