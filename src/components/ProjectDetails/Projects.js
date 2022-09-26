import React from "react";
import { useState, useEffect } from "react";
import "./Project.css";
import AspectRatio from "@mui/joy/AspectRatio";
// import Avatar from '@mui/joy/Avatar';
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { Container } from "@mui/material";


function Projects() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "transparent",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
  }));

  const [projectData,setProjectData]=useState([]);
  //  const [category ,setCategory]=useState('');
  //  const [title,setTitle]=useState('');
  //  const [description,setDescription]=useState('');

   useEffect(() => {
    getProjects();
  },[]);
  const getProjects = async () => {
    let result = await fetch(`http://localhost:5000/api/displayProjects`);
    result = await result.json();
    console.log('check data',result)
    setProjectData(result);
    // setTitle(result[0].title);
    // setCategory(result[0].category);
    // setDescription(result[0].description);
    console.log(result[0].title);
  };
  console.log('projects data ', projectData);
  // console.log("title =", title);
  // console.log("Category =", category);
  // console.log("Description =",description);
  return (
    <div>
      <div className="project-detail">
        <Container>
          <div className="cards">
            <h2>Projects </h2>
            <div className="flex_wrap" style={{ display: "flex"}}>
                  <Grid container spacing={1}>
                    {
                      projectData.map((data)=>{
                        return (
                          <Grid item xs={4}>
                      <Item>
                        {/* <Box sx={{ minHeight: 350 }}> */}
                        
                          <Card
                            variant="outlined"
                            sx={(theme) => ({
                              width: 300,
                              backgroundColor:'#ffff',
                              gridColumn: "span 2",
                              flexDirection: "row",
                              flexWrap: "wrap",
                              // resize: "horizontal",
                              // overflow: "hidden",
                              gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
                              transition: "transform 0.3s, border 0.3s",
                              display: "flex",
                              "&:hover": {
                                borderColor:
                                  theme.vars.palette.primary.outlinedHoverBorder,
                                transform: "translateY(-2px)",
                              },
                              "& > *": {
                                minWidth: "clamp(0px, (360px - 100%) * 999,100%)",
                              },
                            })}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 2,
                                maxWidth: "200px",
                              }}
                            >
                              <Box sx={{ display: "flex" }}>
                                <div>
                                  <Typography
                                    level="h2"
                                    sx={{ fontSize: "md" }}
                                    mb={0.5}
                                  >
                                    <Link
                                      href="#container-responsive"
                                      overlay
                                      underline="none"
                                      sx={{
                                        color: "text.primary",
                                        "&.Mui-focusVisible:after": {
                                          outlineOffset: "-4px",
                                        },
                                      }}
                                    >
                                      Category:{data.category}
                                    </Link>
                                  </Typography>
                                  <Typography level="body2">
                                    Project Title:{data.title}
                                  </Typography>
                                </div>
                                <IconButton
                                  size="sm"
                                  variant="plain"
                                  color="neutral"
                                  sx={{ ml: "auto", alignSelf: "flex-start" }}
                                >
                                  <FavoriteBorderRoundedIcon color="danger" />
                                </IconButton>
                              </Box>
                              <AspectRatio
                                variant="soft"
                                sx={{
                                  "--AspectRatio-paddingBottom":
                                    "clamp(0px, (100% - 200px) * 999, 200px)",
                                  pointerEvents: "none",
                                }}
                              >
                                <img
                                  alt=""
                                  src="https://images.unsplash.com/photo-1492305175278-3b3afaa2f31f?auto=format&fit=crop&w=2262"
                                />
                              </AspectRatio>
                              <Box sx={{ display: "flex", gap: 1.5, mt: "auto" }}>
                                <div>
                                  <Typography level="body2">Description:{data.description}</Typography>
                                </div>
                              </Box>
                            </Box>
                          </Card>
                        {/* </Box> */}
                      </Item>
                    </Grid>
                        )
                      })
                    }
                  </Grid>  
               
             
            </div>
           
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Projects;
