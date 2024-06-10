
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-scroll';

import './Navbar.css';


// Navbar component with 3 buttons
const Navbar = () => {
    const navigate = useNavigate(); 

    const handleDocumentationClick = () => {
      navigate('/'); // Change to a valid route
    };


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



        <Box sx={{ flexGrow: 1, minWidth: '50%' }} />



<Link to="ProjectOverview" spy={true} smooth={true} offset={-1000} duration={600} >
<Button sx={{ fontSize: 20 }} color="inherit" >Overview</Button>
</Link>

<Box sx={{ flexGrow: 1, minWidth: '.1%' }} />

<Link to="Architecture" spy={true} smooth={true} offset={getOffset()} duration={600} >
<Button sx={{ fontSize: 20 }} color="inherit">Architecture</Button>
</Link>

<Box sx={{ flexGrow: 1, minWidth: '.1%' }} />

<Link to="ProblemSolving" spy={true} smooth={true} offset={getOffset()} duration={600} >
<Button sx={{ fontSize: 20 }} color="inherit">Problems</Button>
</Link>

<Box sx={{ flexGrow: 1, minWidth: '.1%' }} />

<Link to="Conclusion" spy={true} smooth={true} offset={getOffset()} duration={600} >
<Button sx={{ fontSize: 20 }} color="inherit">Conclusion</Button>
</Link>

<Box sx={{ flexGrow: 1, minWidth: '.1%' }} />



        <Button 
        sx={{ fontSize: 20 }} 
        color="inherit"
        onClick={handleDocumentationClick} 
      >
        Home
      </Button>



        <Box sx={{ flexGrow: 1, minWidth: '5%' }} />




      </Toolbar>
    </AppBar>
  );
};

export default Navbar;