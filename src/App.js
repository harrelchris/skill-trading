import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Dashboard from "./Dashboard";
import Authorize from "./Auth/Authorize";
import Callback from "./Auth/Callback";
import Logout from "./Auth/Logout";

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const darkTheme = createTheme({
    palette: {
      mode: prefersDarkMode ? "dark" : "light"
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/auth/authorize" element={<Authorize />} />
        <Route path="/auth/callback" element={<Callback  />} />
        <Route path="/auth/logout" element={<Logout />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
