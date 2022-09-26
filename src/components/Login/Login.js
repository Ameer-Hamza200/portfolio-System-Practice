import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link } from "react-router-dom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  

  const paperStyle = {
    padding: 20,
    height: "73vh",
    width: 300,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  const handleLogIn = async (event) => {
    event.preventDefault();
    console.warn(email, password);
    let result = await fetch("http://localhost:5000/api/signin", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    if (result.msg) {
      console.log(result.msg);
      // console.log(result.errors[0].msg);
      alert(result.msg);
    } else {
     
      console.log("toast here");
      localStorage.setItem("Token", JSON.stringify(result));
      navigate("/");
    }
    // console.log(result);
    // // console.log(result.errors[0].msg);
    // alert(result.errors[0].msg)
    // // alert(result)
  };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <form onSubmit={handleLogIn}>
          <TextField
            label="email"
            value={email}
            id={"email"}
            type={"email"}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />

          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
           
          >
            Log In
          </Button>
          <ToastContainer />
         
        </form>
        <div>
      
        <ToastContainer />
      </div>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        {/* <Typography > Do you have an account ? */}
        <Link to="/signup">
          <Button variant="primary">signup</Button>
        </Link>
        {/* </Typography> */}
      </Paper>
    </Grid>
  );
};

export default Login;
