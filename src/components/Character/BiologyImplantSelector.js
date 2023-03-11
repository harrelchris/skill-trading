import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Typography from "@mui/material/Typography";

function BiologyImplantSelector({value, setter}) {
  return (
    <FormControl>
      <Typography component="legend">Biology Implant</Typography>
      <RadioGroup
        row
        defaultValue={0}
        name="biology-implant-buttons-group"
        value={value}
        onChange={e => setter(e.target.value)}
      >
        <FormControlLabel value={0.00} control={<Radio />} label="None" />
        <FormControlLabel value={0.05} control={<Radio />} label="BY-805" />
        <FormControlLabel value={0.10} control={<Radio />} label="BY-810" />
      </RadioGroup>
    </FormControl>
  );
}

export default BiologyImplantSelector;
