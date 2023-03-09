function index({prices, useSellValue, biologySkillLevel, biologyImplant}) {
  const buySellLower = useSellValue ? "sell" : "buy"
  const base_sp_per_hour = 1530;

  const eca_isk = prices["Expert Cerebral Accelerator"][buySellLower];
  const eca_hours = (300 * (1 + (0.2 * biologySkillLevel))) * (1 + Number.parseFloat(biologyImplant));
  const eca_bonus = 8;
  const eca_sp_per_hour = ((17+eca_bonus)+((17*0.5)+eca_bonus))*60;
  const eca_sp = ((eca_hours * eca_sp_per_hour) - (eca_hours * base_sp_per_hour)).toFixed(0);
  const eca_isk_sp = (eca_isk / eca_sp).toFixed(2);

  const mca_isk = prices["Master-at-Arms Cerebral Accelerator"][buySellLower];
  const mca_hours = (24 * (1 + (0.2 * biologySkillLevel))) * (1 + Number.parseFloat(biologyImplant));
  const mca_bonus = 10;
  const mca_sp_per_hour = ((17+mca_bonus)+((17*0.5)+mca_bonus))*60;
  const mca_sp = ((mca_hours * mca_sp_per_hour) - (mca_hours * base_sp_per_hour)).toFixed(0);
  const mca_isk_sp = (mca_isk / mca_sp).toFixed(2);

  return (
    <div>
      <h1>Accelerators</h1>
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
