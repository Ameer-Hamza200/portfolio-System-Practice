/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { useState, useEffect } from "react";
import MenuPopupState from "../Dashboard/Dashboards";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import "./header.css";
import { Link } from "react-router-dom";
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import { makeStyles } from '@mui/styles';
const pages = ["About", "Projects", "Reviews", "Feedback"];
{}

function Header() {
  // const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
//States for Admin Profile,Name and Welcome Line
   const [profile,setProfile]=useState([]);
   const [name ,setName]=useState('');
   const [welcomeLine,setWelcomeLine]=useState('');
//States for All Social Links of Admin in Header
const [socialLinks,setSocialLinks]=useState([]);
const [facebook,setFacebook]=useState('');
const [instagram,setInstagram]=useState('');
const [linkedIn,setLinkedin]=useState('');
const [pintrest,setPintrest]=useState('');

   useEffect(() => {
    getProfile();
    getSocialLinks();
  },[]);
  const getProfile = async () => {
    let result = await fetch(`http://localhost:5000/api/profile`);
    result = await result.json();
    setProfile(result);
    console.log(result[0].userName);
    setName(result[0].userName);
    setWelcomeLine(result[0].welcomeLine);
  };

  const getSocialLinks = async () => {
    let result = await fetch(`http://localhost:5000/api/displayLinks`);
    result = await result.json();
    setSocialLinks(result);
    console.log(socialLinks);
    setFacebook(result[1].facebook);
    setInstagram(result[0].instagram);
    setLinkedin(result[0].linkedIn);
    setPintrest(result[0].pintrest);


  };

  

console.log('data of profile', profile)
  return (

    <div className='head'>
    <AppBar position="static" sx={{ height: 600, pt: 2}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar alt="logo" src="IMG_1654.jpg" sx={{ m: 2 }}></Avatar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {name}
          </Typography>

          <Box sx={{ ml: 35 }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  color: "white",
                  fontSize: 16,
                  letterSpacing: "3px",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ m: 2 }}>
            <Button
              variant="primary"
              target="_blank"
              href={facebook}
            >
              <FacebookRoundedIcon />
            </Button>
            <Button
              variant="primary"
              target="_blank"
              href={linkedIn}
            >
              <LinkedInIcon />
            </Button>
            <Button
              variant="primary"
              target="_blank"
              href={instagram}
            >
              <InstagramIcon />
            </Button>
            <Button
              variant="primary"
              target="_blank"
              href={pintrest}
            >
              <PinterestIcon />
            </Button>
            <Link to="/login">
              <Button variant="primary">Admin</Button>
            </Link>
            <MenuPopupState/>
          </Box>
        </Toolbar>

        <div className="top-sec">
          <div className="container">
            <div className="left">
              <h2>
                This is <span> {name} </span>
              </h2>
              <p>{welcomeLine}</p>
            </div>
            <div className="right">
              <img
                alt="profile"
                src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png"
              ></img>
            </div>
          </div>
        </div>
      </Container>
    </AppBar>
    </div>
  );
}

export default Header;
