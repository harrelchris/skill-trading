import React, {useEffect, useState} from "react";
import Evepraisal from "../api/evepraisal"

function Index() {
  const evepraisal = new Evepraisal();
  const [prices, setPrices] = useState({});

  function renderItem(name) {
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>{prices[name].buy}</td>
        <td>{prices[name].sell}</td>
      </tr>
    );
  }

  useEffect(() => {
    evepraisal.getPrices().then((prices) => setPrices(prices));
  }, []);

  return (
    <>
      <h1>Index</h1>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Buy</th>
            <th>Sell</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(prices).map((name) => renderItem(name))}
        </tbody>
      </table>
    </>
  );
}

export default Index;
