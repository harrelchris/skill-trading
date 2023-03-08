import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import LoginImg from "./eve-sso-login-black-small.png";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import UserMenu from "./UserMenu";


function index({ isAuthenticated }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Skill Trading
          </Typography>
          {isAuthenticated()
          ? <UserMenu />
          : <Link to="/auth/authorize"><img src={LoginImg} alt="Authenticate"/></Link>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default index
