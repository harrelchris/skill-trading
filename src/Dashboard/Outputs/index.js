import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from "react-redux";
import {
  injectorSPLevels,
  acceleratorHours,
  acceleratorSPPerHour,
  acceleratorSP
} from "./utils"
import Typography from "@mui/material/Typography";

const CACHE_DURATION = 10800; // 3 hours in seconds

function Outputs() {
  const [prices, setPrices] = useState({
    "Large Skill Injector": {
      buy: 10000000,
      sell: 10000000,
    },
    "Small Skill Injector": {
      buy: 10000000,
      sell: 10000000,
    },
    "Daily Alpha Injector": {
      buy: 10000000,
      sell: 10000000,
    },
    "Expert Cerebral Accelerator": {
      buy: 10000000,
      sell: 10000000,
    },
    "Master-at-Arms Cerebral Accelerator": {
      buy: 10000000,
      sell: 10000000,
    },
  });
  const BiologyImplantModifier = useSelector((state) => state.BiologyImplant.modifier);

  // const [biologyImplant, setBio..] = useState();

  const BiologySkillLevel = useSelector((state) => state.BiologySkill.level);
  const BuySellValue = useSelector((state) => state.BuySell.value);
  const SkillPointsRange = useSelector((state) => state.SkillPoints.range);

  // Injector ISK
  const BuySellString = BuySellValue ? "sell" : "buy";
  const LSI_ISK = prices["Large Skill Injector"][BuySellString];
  const SSI_ISK = prices["Small Skill Injector"][BuySellString];
  const DAI_ISK = prices["Daily Alpha Injector"][BuySellString];

  // Injector SP
  const LSI_SP = injectorSPLevels["Large Skill Injector"][SkillPointsRange];
  const SSI_SP = injectorSPLevels["Small Skill Injector"][SkillPointsRange];

  // Accelerator ISK
  const EA_ISK = prices["Expert Cerebral Accelerator"][BuySellString];
  const MA_ISK = prices["Master-at-Arms Cerebral Accelerator"][BuySellString];

  // Accelerator SP
  const EAHours = acceleratorHours(300, BiologySkillLevel, BiologyImplantModifier);
  const EASPPerHour = acceleratorSPPerHour(8);
  const EA_SP = acceleratorSP(EAHours, EASPPerHour);
  const MAHours = acceleratorHours(24, BiologySkillLevel, BiologyImplantModifier);
  const MASPPerHour = acceleratorSPPerHour(10);
  const MA_SP = acceleratorSP(MAHours, MASPPerHour);

  function getIskSP(params) {
    const float = params.row.isk / params.row.sp;
    return Number.parseInt(float.toString());
  }

  const columns = [
    {field: "item", headerName: "Item", width: 256},
    {field: "isk", headerName: "ISK", width: 200, type: 'number', editable: true},
    {field: "sp", headerName: "SP", width: 100, type: 'number'},
    {field: "isk_sp", headerName: "ISK/SP", width: 125, type: 'number', valueGetter: getIskSP}
  ];

  const rows = [
    {id: 1, item: "Large Skill Injector", isk: LSI_ISK, sp: LSI_SP},
    {id: 2, item: "Small Skill Injector", isk: SSI_ISK, sp: SSI_SP},
    {id: 3, item: "Daily Alpha Injector", isk: DAI_ISK, sp: 50000},
    {id: 5, item: "Expert Cerebral Accelerator", isk: EA_ISK, sp: EA_SP},
    {id: 4, item: "Master-at-Arms Cerebral Accelerator", isk: MA_ISK, sp: MA_SP}
  ];

  useEffect(() => {
    // Update Price Data
    const epxString = localStorage.getItem("epx");
    const epx = Number.parseInt(epxString);
    // Check if cache is present and valid
    if (epx !== null && epx > Math.floor(Date.now() / 1000)) {
      // use cached data
      const priceString = localStorage.getItem("ep");
      const prices = JSON.parse(priceString);
      setPrices(prices);
    } else {
      // Get price data
      fetch("https://evepraisal.com/a/16dqs6.json?live=yes&persist=no", {
        method: "GET",
        headers: {
          "User-Agent": "https://github.com/harrelchris/skill-trading"
        }
      })
        .then(response => response.json())
        .then((data) => {
          const prices = {};
          for (let item of data.items) {
            prices[item.name] = {
              buy: item.prices.buy.max,
              sell: item.prices.sell.min
            }
          }
          setPrices(prices);
          localStorage.setItem("ep", JSON.stringify(prices));
          localStorage.setItem("epx", (Math.floor(Date.now() / 1000) + CACHE_DURATION).toString());
        })
        .catch((error) => {
          console.error(error);
        })
    }

    // TODO
    // Update Character Data
    // Request character values if so
    // Update values using character
  }, []);

  return (
    <Box sx={{pt: 4, width: "60%"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        hideFooter={true}
        autoHeight
        density={"compact"}
        disableColumnMenu={true}
        initialState={{
          sorting: {
            sortModel: [{ field: 'isk_sp', sort: 'asc' }],
          },
        }}
      />
      <Box sx={{p: 1}}>
        <Typography variant="caption">* Double click an ISK column value to set a custom price</Typography>
      </Box>
    </Box>
  );
}

export default Outputs;
