import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const NavBar = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>

      <div>
        <Link to="/login">Login</Link>
        <br />
        <Link to="/signup">Register</Link>
      </div>
    </div>
  );
};

export default NavBar;
