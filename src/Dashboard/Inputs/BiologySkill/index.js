import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined';
import SquareIcon from '@mui/icons-material/Square';

import { useSelector, useDispatch } from 'react-redux'
import { set } from './reducer'

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#1976d2',
  },
  '& .MuiRating-iconHover': {
    color: '#1976d2',
  },
});

function BiologySkill() {
  const biologySkillLevel = useSelector((state) => state.BiologySkill.level)
  const dispatch = useDispatch()

  return (
    <Box pt={2}>
      <Typography component="legend">Biology Skill Level</Typography>
      <StyledRating
        name="customized-color"
        defaultValue={0} max={5}
        icon={<SquareIcon fontSize="inherit" />}
        emptyIcon={<SquareOutlinedIcon fontSize="inherit" />}
        value={biologySkillLevel}
        onChange={(event, newValue) => {
          dispatch(set(newValue));
        }}
      />
    </Box>
  );
}

export default BiologySkill
