import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined';
import SquareIcon from '@mui/icons-material/Square';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#cccccc',
  },
  '& .MuiRating-iconHover': {
    color: '#ffffff',
  },
});

function BiologySkillLevelSelector({value, setter}) {
  return (
    <Box>
      <Typography component="legend">Biology Skill Level</Typography>
      <StyledRating
        name="customized-color"
        defaultValue={0} max={5}
        icon={<SquareIcon fontSize="inherit" />}
        emptyIcon={<SquareOutlinedIcon fontSize="inherit" />}
        value={value}
        onChange={(event, newValue) => {
          console.log(newValue)
          setter(newValue);
        }}
      />
    </Box>
  );
}

export default BiologySkillLevelSelector;
