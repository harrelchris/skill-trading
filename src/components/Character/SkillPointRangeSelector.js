import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Typography from "@mui/material/Typography";

function SkillPointRangeSelector({value, setter}) {
  return (
    <div>
      <FormControl>
        <Typography component="legend">Skill Point Range</Typography>
        <RadioGroup
          row
          defaultValue={0}
          name="skill-point-buttons-group"
          value={value}
          onChange={e => setter(e.target.value)}
        >
          <FormControlLabel value={0} control={<Radio />} label="0-5m" />
          <FormControlLabel value={1} control={<Radio />} label="5-50m" />
          <FormControlLabel value={2} control={<Radio />} label="50-80m" />
          <FormControlLabel value={3} control={<Radio />} label="80m+" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default SkillPointRangeSelector;
