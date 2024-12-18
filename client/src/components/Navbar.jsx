import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const buttonStyle = { marginLeft: "20px" };
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Mern-Auth
        </Typography>
        <Button variant="contained" color="error" component={Link} to="/login">
          Login
        </Button>
        <Button
          style={buttonStyle}
          variant="contained"
          color="success"
          component={Link}
          to="/signup"
        >
          Signup
        </Button>
        <Button
          style={buttonStyle}
          variant="contained"
          color="error"
          component={Link}
          to="/logout"
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
