import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Project } from './components/Project';
import Button from '@mui/material/Button';
import Skills from './components/Skills';
import Contact from './components/Contact';

import myImage1 from './/ToDoList.png'
import myImage2 from './/NoteTracker.png'
import myImage3 from './/TaskList.png'
import myImage4 from './/Calc.png'
import { motion } from "framer-motion"

import '@fontsource/oswald'





const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  
  const frontendSkills = ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL'];
  const backendSkills = ['React.js', 'Node.js', 'Express', 'PostgreSQL', "AWS", "Git"];

  return (





    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <div style={{ marginTop: '20px', paddingLeft: '50px' }}>


      <div style={{ marginBottom: "140px" }}>
  <motion.div
  initial={{ opacity: 0, x: 0 }} // Start with low opacity and off to the right
  animate={{ opacity: 1, x: 0 }} // Fade in and move to position
  transition={{ duration: 0.7 }} // Adjust as needed
  >
    <h1 style={{  fontFamily: 'Oswald, sans-serif', fontSize: 170, margin: 0, textShadow: "0 0 1.5px white" }}>JARON WENGER</h1>
    <h2 style={{  fontSize: 50, margin: 0, textShadow: "0 0 1px white" }}>JUNIOR WEB DEVELOPER</h2>
  </motion.div>
</div>








        <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
        <Button variant="text"><p style={{ textAlign: 'center', marginLeft: '30vw', marginRight: '30vw', marginTop: '0px', marginBottom: '0px', fontSize: 25, color: "white", textShadow: "0 0 2px white"}}>F E A T U R E D</p></Button>
        </div>

        <div style={{ marginTop: '40px', marginBottom: "200px", display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
          
          <Project imgURL={myImage3} URLText={"Full Stack Task List Project"} URL={"https://main.dmgpi4s3ff7zk.amplifyapp.com/"}/>
          <div style={{ width: '30px' }}></div>
          <Project imgURL={myImage4} URLText={"Calculator Project"} URL={"https://jaronwenger.github.io/CALCULATOR/"}/>
          <div style={{ width: '30px' }}></div>
          <Project imgURL={myImage2} URLText={"Note Tracker Project"} URL={"https://jaronwenger.github.io/Note-Tracker/"}/>
        </div>
        
        <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
        <Button variant="text"><p style={{ textAlign: 'center', marginLeft: '30vw', marginRight: '30vw', marginTop: '0px', marginBottom: '0px', fontSize: 25, color: "white", textShadow: "0 0 2px white"}}>S  K  I  L  L  S</p></Button>
        </div>

        <div style={{ marginTop: '0px', paddingLeft: '50px', display: 'flex', flexDirection: 'row', justifyContent: "center", marginBottom: "200px"  }}>
        <Skills categoryTitle=" LANGUAGES" skillsList={frontendSkills} />
        <div style={{ width: '200px' }}></div>
        <Skills categoryTitle=" TOOLS & LIBRARIES" skillsList={backendSkills} />
        </div>


        <div style={{ marginTop: '40px', marginBottom: '40px', display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
        <Button variant="text"><p style={{ textAlign: 'center', marginLeft: '30vw', marginRight: '30vw', marginTop: '0px', marginBottom: '0px', fontSize: 25, color: "white", textShadow: "0 0 2px white"}}>C O N T A C T</p></Button>
        </div>


        <div style={{ marginTop: '0px', paddingLeft: '50px', display: 'flex', flexDirection: 'row', justifyContent: "center", marginBottom: "240px"  }}>
        <Contact />
        </div>

        {/* <div
          style={{
            marginTop: "0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "200px",
            width: "80%", // The actual width of the div, can be adjusted
            maxWidth: "800px", // Maximum width to prevent excessive spreading
            margin: "auto", // Centers the div horizontally on the page
            padding: "20px", // Optional padding for some space around the text
          }}
        >
          <p style={{ fontSize: 25, margin: 0, textShadow: "0 0 1.5px white", textIndent: "30px"}}>
                Web developer and mathematics graduate looking to contribute to real-world projects.
            Achieved results through project-based programming bootcamps. Eager to find a challenging position
            that will expand my knowledge and progress my programming career.
          </p>
        </div> */}



      </div>
    </ThemeProvider>
  );
}
