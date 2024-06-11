
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

import './Navbar.css';
import { Link } from 'react-scroll';

// Navbar component with 3 buttons
const Navbar = () => {


    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) { // Change '50' to the scroll position where the navbar should change
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  

    const getOffset = () => {
      // If you have a fixed navbar, get its height dynamically
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
      return -navbarHeight - 150; // Return a negative offset based on the navbar height
    };



  return (
    <AppBar position="fixed" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar className={isActive ? 'navbar-toolbar active' : 'navbar-toolbar'}>



        <Box sx={{ flexGrow: 1, minWidth: '70%' }} />

        <Link to="Featured" spy={true} smooth={true} offset={-500} duration={600}>
        <Button sx={{ fontSize: 20 }} color="inherit" >Featured</Button> 
        </Link>

        <Box sx={{ flexGrow: 1, minWidth: '.1%' }} />

        <Link to="Skills" spy={true} smooth={true} offset={getOffset()} duration={600} >
        <Button sx={{ fontSize: 20 }} color="inherit" >Skills</Button>
        </Link>

        <Box sx={{ flexGrow: 1, minWidth: '.1%' }} />

        <Link to="Contact" spy={true} smooth={true} offset={getOffset()} duration={600} >
        <Button sx={{ fontSize: 20 }} color="inherit">Contact</Button>
        </Link>

        <Box sx={{ flexGrow: 1, minWidth: '5%' }} />




      </Toolbar>
    </AppBar>
  );
};

export default Navbar;