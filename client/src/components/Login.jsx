import React from "react";
import { Button, Grid2, Paper, TextField, Typography } from "@mui/material";

const Login = () => {
  const heading = { fontSize: "2.5rem" };
  const paperStyle = {
    padding: "2rem",
    margin: "100px auto",
    borderRadius: "1rem",
    boxShadow: "5px 5px 5px",
  };
  const row = { display: "flex", margin: "2rem" };

  return (
    <Grid2 align="center">
      <Paper
        style={paperStyle}
        sx={{
          width: { xs: "80", sm: "50vw", md: "40vw", lg: "30vw", xl: "20vw" },
          height: "60vh",
        }}
      >
        <Typography style={heading}>Login</Typography>
        <form>
          <TextField
            style={row}
            label="Enter your email"
            type="email"
          ></TextField>
          <TextField
            style={row}
            label="Enter password"
            type="password"
          ></TextField>
          <Button variant="contained" type="submit">
            Login
          </Button>
        </form>
      </Paper>
    </Grid2>
  );
};

export default Login;
