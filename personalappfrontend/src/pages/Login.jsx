import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { authenticateUser } from "../service/AuthService";
import { useAuth } from "../reducer/AuthReducer";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch } = useAuth();

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    const response = await authenticateUser({
      email,
      password,
    });
    const token = response.access_token;
    const userrole = response.role;
    dispatch({ type: "LOGIN", payload: { token, userrole } });
  };

  return (
    <Box
      component="form"
      sx={{
        width: {
          xs: "80%",
          md: "50%",
          lg: "40%",
        },
        display: "flex",
        flexDirection: "column",
        mx: "auto",
        padding: "20px",
        mb: "200px",
        height: "70vh",
        justifyContent: "center",
        my: "auto",
      }}
      onSubmit={handleSubmitLogin}
    >
      <Typography
        textAlign={"center"}
        component="h1"
        sx={{ fontFamily: "Open Sans", fontSize: "20px" }}
      >
        Login
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        margin="normal"
        required
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        margin="normal"
        required
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
      <Link
        style={{
          color: "green",
          fontFamily: "Open Sans",
          textAlign: "center",
          marginTop: "20px",
        }}
        to="/register"
      >
        Don't Have An Account, Please Register
      </Link>
    </Box>
  );
}
