import React from "react";
import { Link } from "react-router-dom";

function Navbar({ isAuthenticated }) {
  if (isAuthenticated()) {
    return (
      <>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/auth/logout">Logout</Link>
      </>
    );
  } else {
    return (
      <>
        <Link to="/">Home</Link>
        <Link to="/auth/authorize">Authorize</Link>
      </>
    );
  }
}

export default Navbar;
