import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Authorize from "./components/auth/Authorize";
import Callback from "./components/auth/Callback";
import Dashboard from "./components/Dashboard";
import Index from "./components/Index";
import Logout from "./components/auth/Logout";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Protected from "./components/Protected";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function isAuthenticated() {
  const requiredKeys = ["accessToken", "refreshToken", "expiresAt", "name", "id"];

  for (let key of requiredKeys) {
    if (localStorage.getItem(key) === null) {
      return false;
    }
  }
  return true;
}

function App() {
  const query = useQuery();

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated}/>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/auth/logout"
          element={
            <Protected isAuthenticated={isAuthenticated}>
              <Logout />
            </Protected>
          } />
        <Route
          path="/dashboard"
          element={
            <Protected isAuthenticated={isAuthenticated}>
              <Dashboard />
            </Protected>
          } />
        <Route path="/auth/authorize" element={<Authorize />} />
        <Route
          path="/auth/callback"
          element={
            <Callback code={query.get("code")} state={query.get("state")} />
        } />
      </Routes>
    </>
  );
}

export default App;
