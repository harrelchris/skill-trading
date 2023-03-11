function index({prices, useSellValue, skillPointRange}) {
  const bonus = {
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
  const buySellLower = useSellValue ? "sell" : "buy"

  const lsi_isk = prices["Large Skill Injector"][buySellLower];
  const lsi_sp = bonus["Large Skill Injector"][skillPointRange];
  const lsi_isk_sp = (prices["Large Skill Injector"][buySellLower] / bonus["Large Skill Injector"][skillPointRange]).toFixed(2)

  const ssi_isk = prices["Small Skill Injector"][buySellLower];
  const ssi_sp = bonus["Small Skill Injector"][skillPointRange];
  const ssi_isk_sp = (prices["Small Skill Injector"][buySellLower] / bonus["Small Skill Injector"][skillPointRange]).toFixed(2)

  const dai_isk = prices["Daily Alpha Injector"][buySellLower];
  const dai_sp = 50000;
  const dai_isk_sp = (prices["Daily Alpha Injector"][buySellLower] / 50000).toFixed(2);

  return (
    <div>
      <h1>Injectors</h1>
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
            <td>{lsi_isk}</td>
            <td>{lsi_sp}</td>
            <td>{lsi_isk_sp}</td>
          </tr>
          <tr>
            <td>Small Skill Injector</td>
            <td>{ssi_isk}</td>
            <td>{ssi_sp}</td>
            <td>{ssi_isk_sp}</td>
          </tr>
          <tr>
            <td>Daily Alpha Injector</td>
            <td>{dai_isk}</td>
            <td>{dai_sp}</td>
            <td>{dai_isk_sp}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default index;
