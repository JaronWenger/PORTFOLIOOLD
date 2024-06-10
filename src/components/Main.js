import React, { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Project } from './Project';
import Button from '@mui/material/Button';
import Skills from './Skills';
import Contact from './Contact';

import { Link } from 'react-scroll';

import myImage4 from './Calc.png'
import myImage7 from './NewToDo.png'
import myImage8 from './Weather.png'


import { motion } from "framer-motion"



import '@fontsource/oswald'
import Navbar from './NavbarTwo';





const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const getOffset = () => {
  // If you have a fixed navbar, get its height dynamically
  const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
  return -navbarHeight - 150; // Return a negative offset based on the navbar height
};




export default function Main() {
  
  const frontendSkills = ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL'];
  const backendSkills = ['React.js', 'Node.js', 'Express', 'PostgreSQL', "AWS", "Git"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (


    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar/>





      <div style={{ marginTop: '20px', paddingLeft: '50px' }}>


      <div style={{ marginBottom: "50px" }}>
        <motion.div
        initial={{ opacity: 0, x: 0 }} // Start with low opacity and off to the right
        animate={{ opacity: 1, x: 0 }} // Fade in and move to position
        transition={{ duration: 0.7 }} // Adjust as needed
        >
            <h1 style={{  fontFamily: 'Oswald, sans-serif', fontSize: 170, margin: 0, textShadow: "0 0 1.5px white" }}>JARON WENGER</h1>
            <h2 style={{  fontSize: 50, margin: 0, textShadow: "0 0 1px white" }}>SOFTWARE ENGINEER</h2>
        </motion.div>
        </div>






        <section id="Featured">

        <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
        <Link to="Featured" spy={true} smooth={true} offset={-500} duration={600}>
        <Button variant="text"><p style={{ textAlign: 'center', marginLeft: '30vw', marginRight: '30vw', marginTop: '0px', marginBottom: '0px', fontSize: 25, color: "white", textShadow: "0 0 2px white"}}>F E A T U R E D</p></Button>
        </Link>
        </div>

        <div style={{ marginTop: '30px', marginBottom: "200px", display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
          
          <Project projectTitle={"Full-Stack Task List Project"} imgURL={myImage7} URLText={"Live Site"} URL={"https://main.dmgpi4s3ff7zk.amplifyapp.com/"} newRoute={'/tasklist'} newText={"Documentation"}/>
          <div style={{ width: '30px' }}></div>
          <Project projectTitle={"Authentication Project"} imgURL={myImage4} URLText={"Live Site"} URL={"https://jaronwenger.github.io/Authentication/"} newRoute={'/authentication'} newText={"Documentation"}/>
          <div style={{ width: '30px' }}></div>
          <Project projectTitle={"Stock Price API Project"} imgURL={myImage8} URLText={"Live Site"} URL={"https://jaronwenger.github.io/Stock-API/"} newRoute={'/stockapi'} newText={"Documentation"}/>
        </div>

        </section>
        

        <section id="Skills">

        <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
        <Link to="Skills" spy={true} smooth={true} offset={getOffset()} duration={600}>
        <Button variant="text"><p style={{ textAlign: 'center', marginLeft: '30vw', marginRight: '30vw', marginTop: '0px', marginBottom: '0px', fontSize: 25, color: "white", textShadow: "0 0 2px white"}}>S  K  I  L  L  S</p></Button>
        </Link>
        </div>

        <div style={{ marginTop: '0px', paddingLeft: '50px', display: 'flex', flexDirection: 'row', justifyContent: "center", marginBottom: "200px"  }}>
        <Skills categoryTitle=" LANGUAGES" skillsList={frontendSkills} />
        <div style={{ width: '200px' }}></div>
        <Skills categoryTitle=" TOOLS & LIBRARIES" skillsList={backendSkills} />
        </div>

        </section>



        <section id="Contact">

        <div style={{ marginTop: '40px', marginBottom: '40px', display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
        <Link to="Contact" spy={true} smooth={true} offset={getOffset()} duration={600} >
        <Button variant="text"><p style={{ textAlign: 'center', marginLeft: '30vw', marginRight: '30vw', marginTop: '0px', marginBottom: '0px', fontSize: 25, color: "white", textShadow: "0 0 2px white"}}>C O N T A C T</p></Button>
        </Link>
        </div>


        <div style={{ marginTop: '0px', paddingLeft: '50px', display: 'flex', flexDirection: 'row', justifyContent: "center", marginBottom: "80px"  }}>
        <Contact />
        </div>

        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', marginBottom: '260px' }}>
          <Button 
            variant="contained" 
            component="a" 
            href={`${process.env.PUBLIC_URL}/RESUME.pdf`} // This should be the correct path to your resume file
            download
            style={{ fontSize: '1.2em' }}
          >
            Download Resume
          </Button>

        </div>

        
        </section>




      </div>



    </ThemeProvider>





  );
}
