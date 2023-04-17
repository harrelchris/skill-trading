import React from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { useSelector, useDispatch } from "react-redux";
import { set } from "./reducer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function BuySell() {
  const BuySellValue = useSelector((state) => state.BuySell.value);
  const dispatch = useDispatch();

  function handleChange(event, value) {
    if (value != null) {
      dispatch(set(value));
    }
  }

  return (
    <Box>
      <Typography pt={1}>Jita buy or sell values</Typography>
      <ToggleButtonGroup
        color="primary"
        value={BuySellValue}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value={true}>Sell</ToggleButton>
        <ToggleButton value={false}>Buy</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

export default BuySell;
