import BiologyImplant from "./BiologyImplant";
import BiologySkill from "./BiologySkill";
import SkillPoints from "./SkillPoints";
import BuySell from "./BuySell";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { isAuthenticated } from "../common";

function Inputs() {
  return (
    <Box
      mt={4}
      width={"60%"}
    >
      <Typography
        variant={"h5"}
      >
        {isAuthenticated() ? `Configured for ${localStorage.getItem("name")}` : "Select values for your character or login."}
      </Typography>
      <SkillPoints />
      <BiologyImplant />
      <BiologySkill />
      <BuySell />
    </Box>
  );
}

export default Inputs
