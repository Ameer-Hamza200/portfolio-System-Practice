import React from 'react'
import './Feedbacks.css'
import Box from '@mui/material/Box';
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Container from '@mui/material/Container';
import { useState } from "react";
import { Button } from '@mui/material';


function Feedbacks() {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");


  const handleSubmit = async (event) => {
    console.log('signup');
    event.preventDefault();
    console.warn(userName,email,feedback);
        let result = await fetch("http://localhost:5000/api/review", {
            method: 'post',
            body: JSON.stringify({ userName,email,feedback}),
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
      alert('Feedback Recorded',result)
      localStorage.setItem("user", JSON.stringify(result));
      // navigate('/')

        }
        // console.log(result);
        // console.log(result.errors[0].msg);
        // alert(result.errors[0].msg)
        // alert(result)
  };

  return (
    <div>

          <div className='feedbacks'>
             <Container>
              <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <form onSubmit={handleSubmit}>
        <TextField id="input-with-sx" value={userName} onChange={(e)=>setUserName(e.target.value)} label="User Name:" variant="standard" />
        <TextField id="input-with-sx" value={email} onChange={(e)=>setEmail(e.target.value)} label="Email:" variant="standard" />
        <TextField id="input-with-sx" value={feedback} onChange={(e)=>setFeedback(e.target.value)} label="Feedback:" variant="standard" />
        <Button  variant="contained" type='submit'>Submit</Button>
        </form>
      </Box>
             </Box>
              </Container>

          </div>

    </div>
  )
}

export default Feedbacks