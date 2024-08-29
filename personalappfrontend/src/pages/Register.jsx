import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { registerUser } from "../service/AuthService";
import { useAuth } from "../reducer/AuthReducer";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("USER");

  const navigate = useNavigate();
  const { dispatch } = useAuth();

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await registerUser({
        firstName,
        lastName,
        email,
        password,
        role,
      });
      const token = response.access_token;
      const userrole = response.role;
      dispatch({ type: "LOGIN", payload: { token, userrole } });
      navigate("/");
    } catch (e) {
      throw e;
    }
  };

  return (
    <Box
      onSubmit={handleSubmitLogin}
      component={"form"}
      sx={{
        width: {
          xs: "80%",
          md: "50%",
          lg: "40%",
        },
        display: "flex",
        flexDirection: "column",
        mx: "auto",
        padding: " 30px 20px",
        mb: "200px",
        height: "80vh",
        justifyContent: "center",
        my: "auto",
      }}
    >
      <Typography
        textAlign={"center"}
        component="h1"
        sx={{ fontFamily: "Open Sans", fontSize: "20px" }}
      >
        Register
      </Typography>
      <TextField
        label="First Name"
        variant="outlined"
        margin="normal"
        required
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        variant="outlined"
        margin="normal"
        required
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
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
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        sx={{ mt: "20px" }}
        type="submit"
        variant="contained"
        color="primary"
      >
        Register
      </Button>
    </Box>
  );
}
