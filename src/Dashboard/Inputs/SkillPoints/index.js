import * as React from "react";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";

import { useSelector, useDispatch } from "react-redux";
import { set } from "./reducer";

function SkillPoints() {
  const skillPointsRange = useSelector((state) => state.SkillPoints.range);
  const dispatch = useDispatch();

  return (
    <Box pt={2}>
      <Typography component="legend">Skill Point Range</Typography>
      <RadioGroup
        row
        defaultValue={0}
        name="skill-point-buttons-group"
        value={skillPointsRange}
        onChange={e => dispatch(set(e.target.value))}
      >
        <FormControlLabel value={0} control={<Radio />} label="0-5m" />
        <FormControlLabel value={1} control={<Radio />} label="5-50m" />
        <FormControlLabel value={2} control={<Radio />} label="50-80m" />
        <FormControlLabel value={3} control={<Radio />} label="80m+" />
      </RadioGroup>
    </Box>
  );
}

export default SkillPoints;
