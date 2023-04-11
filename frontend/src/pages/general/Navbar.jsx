import React, { useState } from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Box,
  Drawer,
  Modal,
  Button,

} from '@mui/material';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/nivritti_logo-removebg-preview.png'
import {Link} from 'react-router-dom';
import Studentfinalform from '../StudentRegister/Studentfinalform';

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <nav>
      <div className='nav-logo-container'>
        <img src={Logo} alt="" style={{width:"20%", height:"auto"}}/>
      </div>
      <div className='navbar-links-container' style={{ display: 'flex' }}>
        <button className='primary-button' style={{ display: 'inline-block',marginRight: '10px' }} onClick={handleModalOpen}>
          Student Registration
        </button>
        <Link to="/login">
          <button className='secondary-button' style={{ display: 'inline-block',marginRight: '10px' }}>
            Log in
          </button>
        </Link>
      </div>
      <Modal open={modalOpen} onClose={handleModalClose} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Box sx={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '50%',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}>
          <h2 style={{marginBottom:"10px"}}>Read these guidelines carefully</h2>
          <ol>
            <li>Kindly go through Nivritti Gurukul FAQ brochure, Sample application form and demo video to fill in the
   application form in the Home page</li>
            <li>Keep your school code ready. Enter your school code and click next.</li>
            <li>Please watch Nivritti Introduction videos before going to students' registration page.</li>
            <li>It may take about 30 minutes to fill this form. You cannot save a partly filled form. So plan to fill the whole
   form in a single sitting. Fill in the form and click submit..</li>
            <li>You will need Family annual income details to be filled in. The amount has to be matched with your income certificate which will be checked later.If you have a BPL card that will also be checked later.</li>
            <li>All the students must have a personal email id. If not, we suggest you create one before starting the registration process.</li>
            <li>If you make it to the final shortlist, Nivritti Gurukul representatives will visit your home before making the final selection.</li>
          </ol>
          <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '24px'}}>
            <button className='primary-button' onClick={handleModalClose}>close</button>
            <Link to='/student-register' style={{textDecoration:'none'}}>
            <button className='secondary-button' style={{marginLeft:"12px"}}>proceed with registration</button>
            </Link>
          </div>
        </Box>
      </Modal>
    </nav>
  );
};

export default Navbar;
