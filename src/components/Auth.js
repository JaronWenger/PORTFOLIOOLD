import React, { useEffect }  from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; 
import Navbar from './NavbarOne';
import { Link } from 'react-scroll';
import { motion } from "framer-motion"
import { Project } from './Project';

import myImage8 from '../Auth.png'
import myImage9 from '../AuthDraft.png'
import myImage10 from '../AuthStructure.png'
import myImage11 from '../AuthProblem1.png'
import myImage12 from '../AuthProblem2.png'
import myImage13 from '../AuthProblem3.png'
import myImage16 from '../AuthProblem4.png'
import myImage14 from '../AuthArch.png'


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});






export default function Auth() {
  const navigate = useNavigate(); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGitClick = () => {
    window.open('https://github.com/JaronWenger/Authentication', '_blank'); // Opens the link in a new tab
  };

  const handleSiteClick = () => {
    window.open('https://jaronwenger.github.io/Authentication/', '_blank'); // Opens the link in a new tab
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
            <h2 style={{  fontSize: 50, marginTop: '50px', textShadow: "0 0 1px white" }}>AUTHENTICATION PROJECT</h2>
        </motion.div>
        </div>




        <div style={{ marginTop: '40px', marginBottom: "100px", display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
          <Project imgURL={myImage8} URLText={"Live Site"} URL={"https://jaronwenger.github.io/Authentication/"} newRoute={'/'} newText={"HOME"}/>
        </div>




        <section id="ProjectOverview">

        <div style={{ marginTop: '0px', marginBottom: '20px', display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
        <Link to="ProjectOverview" spy={true} smooth={true} offset={-150} duration={600}>
        <Button variant="text"><p style={{ textAlign: 'center', marginLeft: '30vw', marginRight: '30vw', marginTop: '0px', marginBottom: '0px', fontSize: 25, color: "white", textShadow: "0 0 2px white", letterSpacing: '.4rem',}}>PROJECT OVERVIEW</p></Button>
        </Link>
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
            The goal of this project is to build a secure and user-friendly authentication system for a React app. Using AWS Cognito, it manages user log-in, sign-up, password reset, and account confirmation. The focus is on creating a smooth user experience while ensuring strong security and compliance with industry standards. The modular design makes the system scalable and easy to maintain, allowing for future growth and integration with other services. Ultimately, this project aims to deliver a reliable and flexible authentication process for users.
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

        <img 
          src={myImage10}
          alt="Project Img"
          style={{
            width: '100%',
            maxWidth: '450px',
            maxHeight: '400px',
            border: '4px solid white', // Change border color to white
            boxShadow: '0 0 10px white', // Use 10px shadow when hovered, else 15px shadow
            transition: 'box-shadow 0.3s ease-in-out', // Add transition for smooth effect
            marginRight: '50px',
          }}
        />


            <p style={{ fontSize: '24px', textIndent: '4em' }}>
            The architecture of this React authentication app is organized and modular, with all code in the <strong>src</strong> folder. The main entry point, <strong>index.js</strong>, initializes the React application, while <strong>App.js</strong> sets up routing and the overall app structure. Key components for authentication—like <strong>LogIn</strong>, <strong>SignUp</strong>, <strong>ResetPassword</strong>, <strong>ConfirmAccount</strong>, and <strong>Welcome</strong>—are stored in a <strong>Components</strong> folder. These components each handle a specific part of the authentication process.
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
            The app uses <strong>UserPool.js</strong> to connect to AWS Cognito, providing the <strong>UserPoolId</strong> and <strong>ClientId</strong> for user management tasks like sign-up, sign-in, and password reset. <strong>Account.js</strong> serves as a context for managing user authentication, handling login, logout, and session checks. Meanwhile, <strong>UserContext.js</strong> stores user-related data like email and password, allowing easy sharing of this information across components. Together, these elements create a structured and maintainable architecture, enabling a seamless authentication process within the React application while interfacing with AWS Cognito for secure user management.
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
One of the first major problems I solved was streamlining the user flow after account confirmation and password reset. Initially, users had to return to the login page and manually re-enter their credentials, which felt repetitive and inconvenient. To fix this, I created <strong>UserContext.js</strong> to store user-related information, such as email and password, during key processes. This allowed the system to retrieve these details at crucial points, enabling seamless transitions without extra logins.
</p>

<p style={{ fontSize: '24px', textIndent: '4em' }}>
When users confirmed their account with a code, the system used the email and password from <strong>UserContext.js</strong> to authenticate them automatically. This eliminated the need for users to go back to the login page, instead redirecting them straight to the welcome page. The same approach worked for password resets: after users set a new password, the system could authenticate them and take them directly to the welcome page. This solution reduced redundant steps, making the user experience smoother and more intuitive.
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

            <img 
          src={myImage12}
          alt="Project Img"
          style={{
            width: '100%',
            maxWidth: '650px',
            maxHeight: '300px',
            border: '4px solid white', // Change border color to white
            boxShadow: '0 0 10px white', // Use 10px shadow when hovered, else 15px shadow
            transition: 'box-shadow 0.3s ease-in-out', // Add transition for smooth effect
            marginBottom: '20px',
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
  To secure specific parts of the application, I created a <strong>ProtectedRoute</strong> component that ensures only authenticated users can access those areas. The problem was to check if a user was logged in and redirect unauthenticated users to the login page. Using the <strong>AccountContext</strong> from <strong>Account.js</strong>, <strong>ProtectedRoute</strong> checks if a user has an active session with AWS Cognito by calling <strong>getSession</strong>. If a session is found, the component sets <strong>isAuthenticated</strong> to true and <strong>isLoading</strong> to false. If no session is found, <strong>isAuthenticated</strong> is set to false, triggering a redirection to the login page. While checking authentication, <strong>ProtectedRoute</strong> displays a loading indicator. If the user is authenticated, the desired component is rendered; otherwise, the user is redirected to the login page. This design provides a clear way to protect routes in the application, ensuring that only logged-in users can access certain areas, while reducing the need for complex logic in other components.
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
            By using AWS Cognito, this app handles user sign-up, login, password reset, and account confirmation. The focus is on a smooth user experience with strong security and compliance. A key feature is streamlining user transitions after account confirmation and password reset. The use of <strong>UserContext.js</strong> for storing user data and <strong>ProtectedRoute.js</strong> for restricting access to authenticated users helped to advance the website, enhancing the user flow and security.
            </p>
            
            <p style={{ fontSize: '24px' , textIndent: '4em'}}>
            Overall, this project delivers a flexible authentication system that balances security and user experience. It paves the way for future improvements, like multi-factor authentication and better error handling, ensuring the platform stays secure and user-friendly as it evolves.
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
