import { useState } from "react";

function index({prices}) {
  const bonus = {
    "Large Skill Injector": {
      0: 500000,
      5000000: 400000,
      50000000: 300000,
      80000000: 150000
    },
    "Small Skill Injector": {
      0: 100000,
      5000000: 80000,
      50000000: 60000,
      80000000: 30000
    }
  };
  const [currentSP, setCurrentSP] = useState(0);
  const [useSellValue, setUseSellValue] = useState(true);

  const buySellLower = useSellValue ? "sell" : "buy"
  const buySellUpper = useSellValue ? "Sell" : "Buy"

  return (
    <div>
      <h1>Injectors</h1>

      <h3>Jita {buySellUpper} Value</h3>
      <button onClick={e => setUseSellValue(!useSellValue)}>Toggle buy/sell value</button>

      <h3>Current Skill Points</h3>
      <button onClick={e => setCurrentSP(0)}> Less than 5 million </button>
      <button onClick={e => setCurrentSP(5000000)}> Between 5 and 50 million </button>
      <button onClick={e => setCurrentSP(50000000)}> Between 50 and 80 million </button>
      <button onClick={e => setCurrentSP(80000000)}> More than 80 million </button>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>ISK</th>
            <th>SP</th>
            <th>ISK/SP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Large Skill Injector</td>
            <td>{prices["Large Skill Injector"][buySellLower]}</td>
            <td>{bonus["Large Skill Injector"][currentSP]}</td>
            <td>{prices["Large Skill Injector"][buySellLower] / bonus["Large Skill Injector"][currentSP]}</td>
          </tr>
          <tr>
            <td>Small Skill Injector</td>
            <td>{prices["Small Skill Injector"][buySellLower]}</td>
            <td>{bonus["Small Skill Injector"][currentSP]}</td>
            <td>{prices["Small Skill Injector"][buySellLower] / bonus["Small Skill Injector"][currentSP]}</td>
          </tr>
          <tr>
            <td>Daily Alpha Injector</td>
            <td>{prices["Daily Alpha Injector"][buySellLower]}</td>
            <td>50000</td>
            <td>{prices["Daily Alpha Injector"][buySellLower] / 50000}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default index
