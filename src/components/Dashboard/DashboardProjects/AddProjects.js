import React from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import { useState } from "react";
import './projectStyle.css';
function ProjectsDetails() {
  const paperStyle = {
    padding: 20,
    // height: "73vh",
    width: 300,
  };

  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    console.log("Social Links");
    event.preventDefault();
    console.warn(category, title, description);
    let result = await fetch("http://localhost:5000/api/addProjects", {
      method: "post",
      body: JSON.stringify({ category, title, description }),
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
      alert("Feedback Recorded", result);
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
      <div className="project">
        <div className="projectDetails">
        <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar src="/broken-image.jpg" />
            <h2>Enter Project Details</h2>
          </Grid>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Category:"
              value={category}
              type={"text"}
              onChange={(e) => setCategory(e.target.value)}
              fullWidth
              required
            />
            <TextField
              label={"Project Title:"}
              value={title}
              type={"text"}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              required
            />
            <TextField
              label={"Description"}
              value={description}
              type={"text"}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              required
            />
            <Button type="submit" color="primary" variant="contained" fullWidth>
              Record Details
            </Button>
          </form>
        </Paper>
      </Grid>
        </div>
      </div>
    </div>
  );
}

export default ProjectsDetails;
