import React, {useEffect, useState} from "react";
import Evepraisal from "../api/evepraisal"

function ISKTable() {
  const ep = new Evepraisal();
  const [useSellValue, setUseSellValue] = useState(true);
  const [prices, setPrices] = useState({});
  const extraSkillPoints = {
    "Large Skill Injector": 500000,
    "Small Skill Injector": 100000,
    "Daily Alpha Injector": 50000,
    "Expert Cerebral Accelerator": 432000, // +8 for 300 hours * 2 (biology 5) = 432,000 extra SP
    "Master-at-Arms Cerebral Accelerator": 43200,  // +10 for 24 hours * 2 (biology 5) = 43,200 extra SP
  }

  function renderRow(name) {
    const cost = useSellValue ? prices[name].sell : prices[name].buy;

    return (
      <tr key={name}>
        <td>{name}</td>
        <td align="right">{cost.toLocaleString()}</td>
        <td align="right">{extraSkillPoints[name].toLocaleString()}</td>
        <td align="right">{Math.round(cost / extraSkillPoints[name]).toLocaleString()}</td>
      </tr>
    );
  }

  useEffect(() => {
    ep.getPrices().then((prices) => setPrices(prices));
  }, []);

  return (
    <>
      <h2>{useSellValue ? "Sell" : "Buy"} Values</h2>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Cost</th>
          <th>SP</th>
          <th>ISK/SP</th>
        </tr>
        </thead>
        <tbody>
        {Object.keys(prices).map((name) => renderRow(name))}
        </tbody>
      </table>
      <button onClick={() => setUseSellValue(!useSellValue)}>{useSellValue ? "Sell" : "Buy"}</button>
    </>
  );
}

export default ISKTable
