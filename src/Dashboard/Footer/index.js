import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Link} from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        marginTop: 'calc(10% + 60px)',
        position: 'fixed',
        bottom: 0,
        textAlign: "center"
      }}
      component="footer"
    >
      <Typography>All Eve related materials are property of <Link href="http://www.ccpgames.com/" rel="noreferrer">CCP Games</Link>.</Typography>
    </Box>
  );
}

export default Footer;
