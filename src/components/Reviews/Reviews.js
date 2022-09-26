/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { useState, useEffect } from "react";
import moment from 'moment';
import './reviews.css'

import Avatar from "@mui/material/Avatar";
function Reviews() {
  const [reviews, setReviews] = useState([]);
  // const [email, setEmail] = useState("");
  // const [userName, setUserName] = useState("");
  // const [feedback, setFeedback] = useState("");

  useEffect(() => {
    getReviews();
  }, []);
  const getReviews = async () => {
    let result = await fetch("http://localhost:5000/api/reviews");
    result = await result.json();
    console.log("reviews-data", result);
    setReviews(result);
    // setUserName(result[1].userName);
    // setFeedback(result[1].feedback);
    // setEmail(result[1].email);
  };
  console.log(reviews);
  // console.log("email=", email);
  // console.log("userName=", userName);
  // console.log("feedback=", feedback);


  
  return (
    <div style={{ padding: 14, background: "#1976d2" }} className="App">
      <h1>Comments</h1>
      <div className="comments">
    
                <div className="comments">
                    <Paper style={{ padding: "40px 20px" }}>
                      {
                        reviews.map((data)=>{
                          return(
                            <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                              <Avatar src="/broken-image.jpg" />
                            </Grid>
                            <Grid justifyContent="left" item xs zeroMinWidth>
                              <h4 style={{ margin: 0, textAlign: "left" }}>{data.userName}</h4>
                              <p style={{ textAlign: "left" }}> {data.feedback}.</p>
                              <p style={{ textAlign: "left", color: "gray" }}>
                                {data.email}   {moment(data.createdAt).fromNow()}
                              </p>
                            </Grid>
                          </Grid>
                          )
                        })
                             
                      }
                
                </Paper>
                </div>
           
          
  
      </div>

      
    </div>
  );
}
export default Reviews;
