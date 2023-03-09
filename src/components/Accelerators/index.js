import {useState} from "react";

function index({prices}) {
  const [useSellValue, setUseSellValue] = useState(true);

  const buySellLower = useSellValue ? "sell" : "buy"
  const buySellUpper = useSellValue ? "Sell" : "Buy"

  const eca_isk = prices["Expert Cerebral Accelerator"][buySellLower];
  const eca_sp = 0;
  const eca_isk_sp = eca_isk / eca_sp;

  const mca_isk = prices["Master-at-Arms Cerebral Accelerator"][buySellLower];
  const mca_sp = 0;
  const mca_isk_sp = mca_isk / mca_sp;

  return (
    <div>
      <h1>Accelerators</h1>

      <h3>Jita {buySellUpper} Value</h3>
      <button onClick={e => setUseSellValue(!useSellValue)}>Toggle buy/sell value</button>

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
            <td>Expert Cerebral Accelerator</td>
            <td>{eca_isk}</td>
            <td>{eca_sp}</td>
            <td>{eca_isk_sp}</td>
          </tr>
          <tr>
            <td>Master-at-Arms Cerebral Accelerator</td>
            <td>{mca_isk}</td>
            <td>{mca_sp}</td>
            <td>{mca_isk_sp}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default index
