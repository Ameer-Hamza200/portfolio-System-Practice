/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import './About.css'
import { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
// import Container from '@mui/material/Container';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


// const styles = StyleSheet.create({
//   image: {
//       height:'498px'
//   }
// });

function About() {


 const [profile,setProfile]=useState([]);
 const[email,setEmail]=useState('');
 const [jobStatus,setjobStatus]=useState('');
 const [contact,setContact]=useState('');

 useEffect(() => {
  getProfile();
},[]);
const getProfile = async () => {
  let result = await fetch(`http://localhost:5000/api/profile`);
  result = await result.json();
  setProfile(result);
  setEmail(result[0].email);
  setjobStatus(result[0].jobStatus);
  setContact(result[0].contact);
  console.log(profile)
};

  return (
 <div>



       
            <div className='about-head'>
                    <h1>About Me</h1>
                    <p>Why Choose Me</p>
            </div>

            <Box sx={{ flexGrow: 1, height:577 , my:5 }}>
      <Grid container spacing={2}>
       <Grid item xs={6} md={6}>
          <Item sx={{width:400 , mx:65}}>
                <AspectRatio minHeight={499} maxHeight={507} width={400}>
                <img  alt='imag\e' src='IMG_1654.jpg' width="400px"></img>

                  </AspectRatio>     
          </Item>
        </Grid>
        <Grid item xs={6} md={6}>
         <div className='aboutData'>
         <Item sx={{width:400,height:499}}>
          <ManageAccountsIcon sx={{fontSize:110}}></ManageAccountsIcon>

                <ul>
                    <li>Full Stack web and mobile development</li>
                    <li>Interactive Front End as per the design</li>
                    <li>React and React Native</li>
                    <li>Redux for State Mnanagement</li>
                    <li> <b>Contact:</b> {contact}</li>
                    <li><b>Job Status:</b>{jobStatus}</li>
                    <li><b>Email:</b>{email}</li>
                </ul>
          </Item>
         </div>
        </Grid>
      </Grid>
    </Box>



 </div>


  )
}

export default About