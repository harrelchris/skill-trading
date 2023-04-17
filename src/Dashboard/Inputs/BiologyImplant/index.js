import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Typography from "@mui/material/Typography";

import { useSelector, useDispatch } from 'react-redux'
import { set } from './reducer'
import Box from "@mui/material/Box";

function BiologyImplant() {
  const biologyImplantModifier = useSelector((state) => state.BiologyImplant.modifier);
  const dispatch = useDispatch();

  return (
    <Box pt={2}>
      <Typography component="legend">Biology Implant</Typography>
      <RadioGroup
        row
        defaultValue={0}
        name="biology-implant-buttons-group"
        value={biologyImplantModifier}
        onChange={e => dispatch(set(e.target.value))}
      >
        <FormControlLabel value={0.00} control={<Radio />} label="None" />
        <FormControlLabel value={0.05} control={<Radio />} label="BY-805" />
        <FormControlLabel value={0.10} control={<Radio />} label="BY-810" />
      </RadioGroup>
    </Box>
  );
}

export default BiologyImplant
