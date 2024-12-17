import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6">Mern-Auth</Typography>
        <Button sx={{ color: "inherit" }}>Login</Button>
        <Button sx={{ color: "inherit" }}>Signup</Button>
        <Button sx={{ color: "inherit" }}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
