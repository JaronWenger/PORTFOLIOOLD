import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Project } from './components/Project';
import Button from '@mui/material/Button';
import Skills from './components/Skills';
import Contact from './components/Contact';




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
        <div style={{ marginBottom: "100px" }}>
          <h1 style={{ fontSize: 200, margin: 0, textShadow: "0 0 1.5px white" }}>Jaron Wenger</h1>
          <h2 style={{ fontSize: 50, margin: 0, textShadow: "0 0 1px white" }}>JUNIOR WEB DEVELOPER</h2>
        </div>

        <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
        <Button variant="text"><p style={{ textAlign: 'center', marginLeft: '300px', marginRight: '300px', marginTop: '0px', marginBottom: '0px', fontSize: 25, color: "white", textShadow: "0 0 2px white"}}>F E A T U R E D</p></Button>
        </div>

        <div style={{ marginTop: '40px', marginBottom: "200px", display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
          
          <Project imgURL={'/TaskList.png'} URLText={"Task List Project"} URL={"https://main.dmgpi4s3ff7zk.amplifyapp.com/"}/>
          <div style={{ width: '30px' }}></div>
          <Project imgURL={'/ToDoList.png'} URLText={"To Do List Project"} URL={"https://jaronwenger.github.io/TO-DO-LIST/"}/>
          <div style={{ width: '30px' }}></div>
          <Project imgURL={'/NoteTracker.png'} URLText={"Note Tracker Project"} URL={"https://jaronwenger.github.io/Note-Tracker/"}/>
        </div>
        
        <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
        <Button variant="text"><p style={{ textAlign: 'center', marginLeft: '300px', marginRight: '300px', marginTop: '0px', marginBottom: '0px', fontSize: 25, color: "white", textShadow: "0 0 2px white"}}>S  K  I  L  L  S</p></Button>
        </div>

        <div style={{ marginTop: '0px', paddingLeft: '50px', display: 'flex', flexDirection: 'row', justifyContent: "center", marginBottom: "200px"  }}>
        <Skills categoryTitle=" LANGUAGES" skillsList={frontendSkills} />
        <div style={{ width: '200px' }}></div>
        <Skills categoryTitle=" TOOLS & LIBRARIES" skillsList={backendSkills} />
        </div>


        <div style={{ marginTop: '40px', marginBottom: '40px', display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
        <Button variant="text"><p style={{ textAlign: 'center', marginLeft: '300px', marginRight: '300px', marginTop: '0px', marginBottom: '0px', fontSize: 25, color: "white", textShadow: "0 0 2px white"}}>C O N T A C T</p></Button>
        </div>


        <div style={{ marginTop: '0px', paddingLeft: '50px', display: 'flex', flexDirection: 'row', justifyContent: "center", marginBottom: "200px"  }}>
        <Contact />
        </div>


      </div>
    </ThemeProvider>
  );
}
