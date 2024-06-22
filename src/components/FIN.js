import React, { useEffect }  from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; 
import Navbar from './NavbarOne';
import { Link } from 'react-scroll';
import { motion } from "framer-motion"
import { Project } from './Project';

import myImage8 from '../Fin.png'
import myImage9 from '../Fin1.png'

import myImage11 from '../FinProblem1.png'

import myImage13 from '../FinProblem3.png'
import myImage16 from '../FinProblem4.png'
import myImage14 from '../FinArch.png'


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});






export default function Fin() {
  const navigate = useNavigate(); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGitClick = () => {
    window.open('https://github.com/JaronWenger/Financial-Tracker', '_blank'); // Opens the link in a new tab
  };

  const handleSiteClick = () => {
    window.open('https://thegoldenmetrics.com/', '_blank'); // Opens the link in a new tab
  };

  const handleDocumentationClick = () => {
    navigate('/'); // Change to a valid route
  };



  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar/>

      <div style={{ marginTop: '20px', paddingLeft: '50px' }}>


      <div style={{ marginBottom: "140px" }}>
        <motion.div
        initial={{ opacity: 0, x: 0 }} // Start with low opacity and off to the right
        animate={{ opacity: 1, x: 0 }} // Fade in and move to position
        transition={{ duration: 0.7 }} // Adjust as needed
        >
            <h2 style={{  fontSize: 50, marginTop: '50px', textShadow: "0 0 1px white" }}>FULL-STACK FINANCIAL TRACKER</h2>
        </motion.div>
        </div>




        <div style={{ marginTop: '40px', marginBottom: "100px", display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
          <Project imgURL={myImage8} URLText={"Live Site"} URL={"https://thegoldenmetrics.com/"} newRoute={'/'} newText={"HOME"}/>
        </div>




        <section id="ProjectOverview">

        <div style={{ marginTop: '0px', marginBottom: '20px', display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
        <Link to="ProjectOverview" spy={true} smooth={true} offset={-150} duration={600}>
        <Button variant="text"><p style={{ textAlign: 'center', marginLeft: '30vw', marginRight: '30vw', marginTop: '0px', marginBottom: '0px', fontSize: 25, color: "white", textShadow: "0 0 2px white", letterSpacing: '.4rem',}}>PROJECT OVERVIEW</p></Button>
        </Link>
        </div>

        <div className='split'
          style={{
            display: 'flex', // Use Flexbox
            flexDirection: 'row', // Align content in a column
            justifyContent: 'center', // Center horizontally
            alignItems: 'center', // Center vertically (in case the content grows)
            width: '100%', // Take full width
            maxWidth: '1200px', // Constrain the maximum width to keep the text centered
            margin: '0 auto', // Ensure the container itself is centered
            textAlign: 'center', // Center text within the container
          }}
        >



            <p style={{ fontSize: '24px', textIndent: '4em' }}>
            The goal of this project is to create a simple financial tracker website to help users keep track of key financial metrics like net worth, savings rate, and FIRE number. Using SQLite for user authentication and data persistence, it securely stores user information. The focus is on providing a smooth user experience with a lightweight backend for good performance. The modular design makes it easy to maintain and scale, allowing for future updates and integrations. Ultimately, this project aims to deliver a reliable and easy-to-use platform for users to manage their finances effectively.
            </p>


            <img 
          src={myImage9}
          alt="Project Img"
          style={{
            width: '100%',
            maxWidth: '450px',
            maxHeight: '400px',
            border: '4px solid white', // Change border color to white
            boxShadow: '0 0 10px white', // Use 10px shadow when hovered, else 15px shadow
            transition: 'box-shadow 0.3s ease-in-out', // Add transition for smooth effect
            marginLeft: '50px',
          }}
        />
          </div>









        </section>
        




        <section id="Architecture">


        <div style={{ marginTop: '60px', marginBottom: '20px', display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
        <Link to="Architecture" spy={true} smooth={true} offset={-150} duration={600}>
        <Button variant="text"><p style={{ textAlign: 'center', marginLeft: '30vw', marginRight: '30vw', marginTop: '0px', marginBottom: '0px', fontSize: 25, color: "white", textShadow: "0 0 2px white", letterSpacing: '.4rem',}}>ARCHITECTURE</p></Button>
        </Link>
        </div>


        <div className='split'
          style={{
            display: 'flex', // Use Flexbox
            flexDirection: 'row', // Align content in a column
            justifyContent: 'center', // Center horizontally
            alignItems: 'center', // Center vertically (in case the content grows)
            width: '100%', // Take full width
            maxWidth: '1200px', // Constrain the maximum width to keep the text centered
            margin: '0 auto', // Ensure the container itself is centered
            textAlign: 'center', // Center text within the container
          }}
        >




            <p style={{ fontSize: '24px', textIndent: '4em' }}>
            This project is a React and Node.js application hosted on a Digital Ocean VPS. The frontend is a client-side rendered app built with React.js, providing a responsive and dynamic user interface. The React application interacts with the backend through a RESTful API, ensuring a smooth user experience. It includes features like user authentication and tracking of financial metrics, all within a lightweight and efficient design.
            </p>

          </div>

          <div
            style={{
              display: 'flex', // Use Flexbox
              flexDirection: 'row', // Align content in a column
              justifyContent: 'center', // Center horizontally
              alignItems: 'center', // Center vertically (in case the content grows)
              width: '100%', // Take full width
              maxWidth: '1200px', // Constrain the maximum width to keep the text centered
              margin: '0 auto', // Ensure the container itself is centered
              textAlign: 'center', // Center text within the container
            }}
          >

            <p style={{ fontSize: '24px', textIndent: '4em' }}>
            The backend architecture consists of Node.js and Express, handling server-side logic and API requests. SQLite is used to store user data and manage user sessions. Cookie and session-based authentication are implemented for information security. The application is containerized using Docker and managed with Docker-Compose, utilizing Docker volumes for persistent data storage. Nginx is configured as a reverse proxy to handle incoming traffic, and the entire setup is secured with SSL for encrypted communication. The combination of these technologies ensures a robust, scalable, and secure environment for the application. Below is a code snipit of how a user authentication is handled from React.
            </p>


            
          </div>
          <div
          style={{
            display: 'flex', // Use Flexbox
            flexDirection: 'column', // Align content in a column
            justifyContent: 'center', // Center horizontally
            alignItems: 'center', // Center vertically (in case the content grows)
            width: '100%', // Take full width
            maxWidth: '1200px', // Constrain the maximum width to keep the text centered
            margin: '0 auto', // Ensure the container itself is centered
            textAlign: 'center', // Center text within the container
          }}
        >


            <img 
          src={myImage14}
          alt="Project Img"
          style={{
            width: '100%',
            maxWidth: '750px',
            maxHeight: '600px',
            border: '4px solid white', // Change border color to white
            boxShadow: '0 0 10px white', // Use 10px shadow when hovered, else 15px shadow
            transition: 'box-shadow 0.3s ease-in-out', // Add transition for smooth effect
            marginLeft: '50px',
          }}
        />
          </div>


        </section>



        <section id="ProblemSolving">


        <div style={{ marginTop: '60px', marginBottom: '20px', display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
        <Link to="ProblemSolving" spy={true} smooth={true} offset={-150} duration={600}>
        <Button variant="text"><p style={{ textAlign: 'center', marginLeft: '30vw', marginRight: '30vw', marginTop: '0px', marginBottom: '0px', fontSize: 25, color: "white", textShadow: "0 0 2px white", letterSpacing: '.4rem',}}>PROBLEM SOLVING</p></Button>
        </Link>
        </div>

        <div
          style={{
            display: 'flex', // Use Flexbox
            flexDirection: 'column', // Align content in a column
            justifyContent: 'center', // Center horizontally
            alignItems: 'center', // Center vertically (in case the content grows)
            width: '100%', // Take full width
            maxWidth: '1200px', // Constrain the maximum width to keep the text centered
            margin: '0 auto', // Ensure the container itself is centered
            textAlign: 'center', // Center text within the container
          }}
        >



<p style={{ fontSize: '24px', textIndent: '4em' }}>
One challenge I faced was efficiently interacting with the SQLite database to create a row for each new user during the signup process. The solution involved writing a function in Node.js using the db.run method to execute an SQL INSERT statement. This function, createUser, takes the username and password as inputs and inserts them into the database along with default values for other user metrics such as net worth, savings rate, and FIRE number. By using a promise-based approach, the function ensures that the database operation completes before proceeding, providing a reliable and asynchronous way to handle user creation. This method streamlined the user registration process and ensured that each new user had a consistent set of initial values in the database.
</p>




          </div>

          <div
          style={{
            display: 'flex', // Use Flexbox
            flexDirection: 'Column', // Align content in a column
            justifyContent: 'center', // Center horizontally
            alignItems: 'center', // Center vertically (in case the content grows)
            width: '100%', // Take full width
            maxWidth: '1200px', // Constrain the maximum width to keep the text centered
            margin: '0 auto', // Ensure the container itself is centered
            textAlign: 'center', // Center text within the container
          }}
        >

<img 
          src={myImage11}
          alt="Project Img"
          style={{
            width: '100%',
            maxWidth: '650px',
            maxHeight: '500px',
            border: '4px solid white', // Change border color to white
            boxShadow: '0 0 10px white', // Use 10px shadow when hovered, else 15px shadow
            transition: 'box-shadow 0.3s ease-in-out', // Add transition for smooth effect
            marginTop: '20px',
            marginBottom: '30px',
          }}
        />


          </div>


          <div
          style={{
            display: 'flex', // Use Flexbox
            flexDirection: 'row', // Align content in a column
            justifyContent: 'center', // Center horizontally
            alignItems: 'center', // Center vertically (in case the content grows)
            width: '100%', // Take full width
            maxWidth: '1200px', // Constrain the maximum width to keep the text centered
            margin: '0 auto', // Ensure the container itself is centered
            textAlign: 'center', // Center text within the container
          }}
        >



<p style={{ fontSize: '24px', textIndent: '4em' }}>
Another challenge I encountered was implementing secure user authentication using cookies and server sessions. To address this, I developed functions to manage session data within the SQLite database. The insertSession function stores session details, such as session ID, user ID, creation time, and expiration time, into the sessions table. This ensures that each session is recorded and can be tracked. Additionally, the deleteSession function removes a session from the database based on its session ID, allowing for proper session termination. By managing sessions in this way, I was able to create a secure authentication system that uses cookies to maintain user sessions on the client side while keeping track of them on the server side, enhancing both security and user experience.
</p>


          </div>
          <div
          style={{
            display: 'flex', // Use Flexbox
            flexDirection: 'column', // Align content in a column
            justifyContent: 'center', // Center horizontally
            alignItems: 'center', // Center vertically (in case the content grows)
            width: '100%', // Take full width
            maxWidth: '1200px', // Constrain the maximum width to keep the text centered
            margin: '0 auto', // Ensure the container itself is centered
            textAlign: 'center', // Center text within the container
          }}
        >



            <img 
          src={myImage13}
          alt="Project Img"
          style={{
            width: '100%',
            maxWidth: '750px',
            maxHeight: '600px',
            border: '4px solid white', // Change border color to white
            boxShadow: '0 0 10px white', // Use 10px shadow when hovered, else 15px shadow
            transition: 'box-shadow 0.3s ease-in-out', // Add transition for smooth effect
            marginTop: '20px',
          }}
        />
                    <img 
          src={myImage16}
          alt="Project Img"
          style={{
            width: '100%',
            maxWidth: '750px',
            maxHeight: '600px',
            border: '4px solid white', // Change border color to white
            boxShadow: '0 0 10px white', // Use 10px shadow when hovered, else 15px shadow
            transition: 'box-shadow 0.3s ease-in-out', // Add transition for smooth effect
            marginTop: '50px',
          }}
        />
          </div>

        </section>




        <section id="Conclusion">

        <div style={{ marginTop: '60px', display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
        <Link to="Conclusion" spy={true} smooth={true} offset={-150} duration={600}>
        <Button variant="text"><p style={{ textAlign: 'center', marginLeft: '30vw', marginRight: '30vw', marginTop: '0px', marginBottom: '0px', fontSize: 25, color: "white", textShadow: "0 0 2px white", letterSpacing: '.4rem',}}>CONCLUSION</p></Button>
        </Link>
        </div>

        <div
          style={{
            display: 'flex', // Use Flexbox
            flexDirection: 'column', // Align content in a column
            justifyContent: 'center', // Center horizontally
            alignItems: 'center', // Center vertically (in case the content grows)
            width: '100%', // Take full width
            maxWidth: '1200px', // Constrain the maximum width to keep the text centered
            margin: '0 auto', // Ensure the container itself is centered
            textAlign: 'center', // Center text within the container
          }}
        >



            <p style={{ fontSize: '24px' , textIndent: '4em'}}>
            Throughout the development process, significant challenges were addressed, such as efficiently interacting with the SQLite database to create new user records and implementing secure user authentication with cookies and server sessions. Solutions involved writing asynchronous functions for database operations and managing session data securely. With these problems solved, the application is now live on my VPS, offering a reliable, scalable, and secure financial tracking tool for users.
            </p>
            
            <p style={{ fontSize: '24px' , textIndent: '4em'}}>
            Future improvements include adding downloadable financial summaries so users can track their progress and incorporating JavaScript charts for better data visualization. These features will enhance the user experience, making financial tracking even more comprehensive and user-friendly.
            </p>

          </div>

 


        <div style={{ marginTop: '40px', marginBottom: '0px', display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
        <Button 
        variant="outlined" 
        onClick={handleGitClick} 
        style={{ marginTop: '10px' }}
      >
        GitHub Repository
      </Button>
      </div>
      <div style={{ marginTop: '40px', marginBottom: '0px', display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
      <Button 
        variant="outlined" 
        onClick={handleSiteClick} 
        style={{ marginTop: '10px' }}
      >
        Live Site
      </Button>
      </div>
      <div style={{ marginTop: '10px', marginBottom: '100px', display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
        <Button 
        variant="outlined" 
        onClick={handleDocumentationClick} 
        style={{ marginTop: '10px' }}
      >
        Home
      </Button>
      </div>

        
        </section>




      </div>



    </ThemeProvider>
  );
}
