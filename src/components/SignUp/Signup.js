import React from "react";
import {Grid,Paper,Avatar,Typography,TextField, Button} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';


const Signup = () => {
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const [welcomeLine, setWelcomeLine] = useState("");
  const [about, setAbout] = useState("");
  const [jobStatus, setJobStatus] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    console.log('signup');
    event.preventDefault();
    console.warn(userName,email,contact,password,jobStatus,photo,welcomeLine,about);
        let result = await fetch("http://localhost:5000/api/registerProfile", {
            method: 'post',
            body: JSON.stringify({ userName,email,contact,password,jobStatus,photo,welcomeLine,about }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        if(result.errors)
        {
            console.log(result);
        // console.log(result.errors[0].msg);
        alert(result.errors[0].msg)
        }
        else
        {
          console.log(result);
      // console.log(result.errors[0].msg);
      alert('User is created Successfully',result)
      localStorage.setItem("user", JSON.stringify(result));
      navigate('/')

        }
        // console.log(result);
        // console.log(result.errors[0].msg);
        // alert(result.errors[0].msg)
        // alert(result)
  };


  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="userName"
            type={"text"}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            label="User Name"
          />
          <TextField
            fullWidth
            id="email"
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            placeholder="Enter your email"
          />
          <TextField
            fullWidth
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            label="Contact"
            placeholder="Enter your phone number"
          />
          <TextField
            fullWidth
            id="password"
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            placeholder="Enter your password"
          />
          <TextField
            fullWidth
            id="jobStatus"
            type={"text"}
            value={jobStatus}
            onChange={(e) => setJobStatus(e.target.value)}
            label="Job Status"
          />
          <TextField
            fullWidth
            id="photo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            type="file"
            name='image'
            label="Photo"
          />
          <TextField
            fullWidth
            id="welcomeLine"
            type={"text"}
            value={welcomeLine}
            onChange={(e) => setWelcomeLine(e.target.value)}
            label="Welcome Line"
            placeholder="Enter your Welcome line"
          />
          <TextField
            fullWidth
            id="about"
            type={"text"}
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            label="About"
            placeholder="Enter About Yourself"
          />

          <Button  type="submit" variant="contained" color="primary">
            Sign up
          </Button>
          <Link to="/login">
            <Button variant="contained" color="primary" sx={{ m: 2 }}>
              Back to Login
            </Button>
          </Link>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
