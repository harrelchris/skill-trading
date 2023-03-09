import React from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

function BuySellToggle({value, setter}) {
  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={value}
        exclusive
        onChange={(e, v) => {setter(v)}}
        aria-label="Platform"
      >
        <ToggleButton value={true}>Sell</ToggleButton>
        <ToggleButton value={false}>Buy</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}

export default BuySellToggle;
