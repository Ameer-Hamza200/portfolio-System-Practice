import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
// import { Link } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MenuPopupState() {
  const navigate=useNavigate();
  const authentication = ()=>{
    const auth = localStorage.getItem("Token");
    console.log('this is my auth',auth);

    // if(!auth){
    //   navigate('/login')
    // }else{
    //   navigate('/adminPannel')
    // }
      auth ? navigate('/adminPannel') : navigate('/login') ;
  }
  const handleLogOut =()=>{
    localStorage.clear();
    // toast("You are Logged Out!");

  }
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Dashboard
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={authentication}>Profile</MenuItem>
            {/* <MenuItem onClick={popupState.close}>My account</MenuItem> */}
            <MenuItem onClick={handleLogOut}>Logout</MenuItem>
            
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}