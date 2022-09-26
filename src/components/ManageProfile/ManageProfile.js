import { Button } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Avatar from "@mui/material/Avatar";
import { Link } from 'react-router-dom';

import './ManageProfile.css'
import Footer from '../Footer/Footer';

function ManageProfile() {
  return (
    <div>
            <div className='main'>
                    <Container>
                        <div className='menu'>
                   <div className='buttons'>
                  <Link to='/socialLinks'> <Button variant='contained' sx={{mt:3, mr:3}}>Manage Social Links</Button></Link>
                    <Link to='/projects'><Button variant='contained' sx={{mt:3, mr:3}}>Manage Projects</Button></Link>
                   </div>
                   <div className='icon'>
                  <Link to='/'> <Avatar alt="logo" src="IMG_1654.jpg" sx={{  width: 70, height: 70 , my:-6 }}></Avatar></Link>
                   </div>
                        </div>
                    </Container>
            </div>

            <Footer/>

    </div>
  )
}

export default ManageProfile