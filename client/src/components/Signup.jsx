import React, { useState } from "react";
import { Button, Grid2, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const heading = { fontSize: "2.5rem" };
  const paperStyle = {
    padding: "2rem",
    margin: "100px auto",
    borderRadius: "1rem",
    boxShadow: "5px 5px 5px",
  };
  const row = { display: "flex", margin: "2rem" };

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    console.log(e);
    e.preventDefault();

    axios
      .post("http://localhost:3001/signup", { name, email, password })
      .then((result) => {
        if (result.status == 201) {
          navigate("/login");
          window.alert("User created successfully. Please login");
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
  };

  return (
    <Grid2 align="center">
      <Paper
        style={paperStyle}
        sx={{
          width: { xs: "80", sm: "50vw", md: "40vw", lg: "30vw", xl: "20vw" },
          height: "60vh",
        }}
      >
        <Typography style={heading}>Signup</Typography>
        <form onSubmit={handleSignup}>
          <TextField
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="name"
            required
            style={row}
            label="Enter your name"
            type="name"
          ></TextField>

          <TextField
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            required
            style={row}
            label="Enter your email"
            type="email"
          ></TextField>

          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            required
            style={row}
            label="Enter password"
            type="password"
          ></TextField>

          <Button variant="contained" type="submit">
            Signup
          </Button>
        </form>
      </Paper>
    </Grid2>
  );
};

export default Signup;
