import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';

import Authorize from "./components/Auth/Authorize";
import Callback from "./components/Auth/Callback";
import Index from "./components/Index";
import Logout from "./components/Auth/Logout";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function App() {
  const query = useQuery();

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="*" element={<Index />} />
        <Route path="/auth/authorize" element={<Authorize />} />
        <Route path="/auth/callback" element={<Callback code={query.get("code")} state={query.get("state")} />} />
        <Route path="/auth/logout" element={<Logout />} />
      </Routes>
    </>
  );
}

export default App;
