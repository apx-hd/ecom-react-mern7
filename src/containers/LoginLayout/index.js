import { Card, TextField, Button, Box, Typography } from "@mui/material";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginLayout() {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {saveToken} = useContext(AuthContext)
    const  [errors, setErrors] = useState({email: "", password: ""})

    const validate = () => {
      let errors = {}
      if(email === "" ){
        errors.email = "Email is required"
      }
      if(password === ""){
        errors.password = "Password is required"
      }

      setErrors(errors);
      if(Object.keys(errors).length !== 0) {
        return false
      } else {
        return true;
      }
    }

  const handleLogin = async () => {
    if(!validate()) return;
    //API Call
    try {
      const { data } = await axios.post(
        `http://localhost:4000/api/auth/login`,
        { email, password }
        );
        saveToken(data.accessToken);
        navigate('/dashboard')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      height="50vh"
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Card sx={{ minWidth: "500px" }}>
        <Box
          p={4}
          display={"flex"}
          flexDirection={"column"}
          alignItems="center"
          gap={5}
        >
          <Typography variant="h3">Login</Typography>
          <TextField
            type="text"
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => {
              setErrors({...errors, email: ""})
              setEmail(e.target.value)
            }}
            error={errors.email}
            helperText={errors.email}
          ></TextField>
          <TextField
            type="password"
            label="Password"
            fullWidth
            value={password}
            onChange={(e) => {
              setErrors({...errors, password: ""})
              setPassword(e.target.value)
            }}
            error={errors.password}
            helperText={errors.password}
          ></TextField>
          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>
        </Box>
      </Card>
    </Box>
  );
}

export default LoginLayout;
