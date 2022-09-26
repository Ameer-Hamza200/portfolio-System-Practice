import React from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import '../SocialLinks/socialLinks.css'

function SocialLinks() {
    const paperStyle = {
        padding: 20,
        // height: "73vh",
        width: 300,
    
      };
  // const avatarStyle={backgroundColor:'#1bbd7e'}

  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [pintrest, setPintrest] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    console.log("Social Links");
    event.preventDefault();
    console.warn(facebook, instagram, linkedin, pintrest);
    let result = await fetch('http://localhost:5000/api/addSocialLinks', {
      method: "post",
      body: JSON.stringify({ facebook, instagram, linkedin, pintrest }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json(); 
    if (result.errors) {
      console.log(result);
      // console.log(result.errors[0].msg);
      alert(result.errors[0].msg);
    } else {
      console.log(result);
      // console.log(result.errors[0].msg);
      alert("Social Links Recorded", result);
      localStorage.setItem("user", JSON.stringify(result));
      navigate('/')
    }
    // console.log(result);
    // console.log(result.errors[0].msg);
    // alert(result.errors[0].msg)
    // alert(result)
  };



  return (
    <div>
        <div className="socialLinks">
        <div className="socialData">
        <Grid>
          <Paper style={paperStyle} >
            <Grid align="center">
              <Avatar src="/broken-image.jpg" />
              <h2>Enter Social Links</h2>
            </Grid>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Faceebook"
                value={facebook}
                type={"text"}
                onChange={(e) => setFacebook(e.target.value)}
                placeholder={"Enter URL"}
                fullWidth
                required
              />
              <TextField
                label={"Instagram:"}
                value={instagram}
                type={"text"}
                placeholder={"Enter URL"}
                onChange={(e) => setInstagram(e.target.value)}
                fullWidth
                required
              />

              <TextField
                label="LinkedIn:"
                type={"text"}
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                placeholder={"Enter URL"}
                fullWidth
                required
              />
              <TextField
                label="Pintrest:"
                type={"text"}
                onChange={(e) => setPintrest(e.target.value)}
                value={pintrest}
                placeholder={"Enter URL"}
                fullWidth
                required
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
              >
                Record Links
              </Button>
            </form>
          </Paper>
        </Grid>
        </div>
        </div>
    </div>
  );
}

export default SocialLinks;
