import React, { useEffect }  from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; 
import Navbar from './NavbarOne';
import { Link } from 'react-scroll';
import { motion } from "framer-motion"
import { Project } from './Project';

import myImage8 from './NewToDo.png'
import myImage9 from '../ToDoDraft.png'
import myImage10 from '../ToDoStructure.png'
import myImage11 from '../ToDoProblem1.png'
import myImage13 from '../ToDoProblem2.png'
import myImage14 from '../ToDoProblem3.png'
import myImage15 from '../ToDoProblem4.png'
import myImage16 from '../ToDoProblem5.png'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});






export default function StockApi() {
  const navigate = useNavigate(); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const handleGitClick = () => {
    window.open('https://github.com/JaronWenger/TASK-LIST', '_blank'); // Opens the link in a new tab
  };

  const handleSiteClick = () => {
    window.open('https://main.dmgpi4s3ff7zk.amplifyapp.com/', '_blank'); // Opens the link in a new tab
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
            <h2 style={{  fontSize: 50, marginTop: '50px', textShadow: "0 0 1px white" }}>FULL STACK TASK LIST PROJECT</h2>
        </motion.div>
        </div>




        <div style={{ marginTop: '40px', marginBottom: "100px", display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
          <Project imgURL={myImage8} URLText={"Live Site"} URL={"https://main.dmgpi4s3ff7zk.amplifyapp.com/"} newRoute={'/'} newText={"HOME"}/>
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
            The goal of this project is to build a task list application that helps users manage their tasks. This application offers essential features like creating, reading, updating, and deleting tasks, enabling users to keep track of their to-dos. The front-end is built with React, offering a user-friendly interface, while the back-end is serverless, running on AWS Lambda and using DynamoDB for storing tasks. With real-time updates and scalable architecture, the app provides a seamless experience for creating and completing tasks.
            </p>


            <img 
          src={myImage9}
          alt="Project Img"
          style={{
            width: '100%',
            maxWidth: '550px',
            maxHeight: '500px',
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
            maxWidth: '550px',
            maxHeight: '500px',
            border: '4px solid white', // Change border color to white
            boxShadow: '0 0 10px white', // Use 10px shadow when hovered, else 15px shadow
            transition: 'box-shadow 0.3s ease-in-out', // Add transition for smooth effect
            marginRight: '50px',
          }}
        />


<p style={{ fontSize: '24px', textIndent: '4em' }}>
        The architecture of this task list application consists of a React-based front-end, an Express.js back-end, and a DynamoDB database, with serverless deployment on AWS Lambda. The <strong>src</strong> contains the front-end components, while <strong>api</strong> contains the back-end server code. In <strong>src</strong>, <strong>App.js</strong> serves as the root component, initializing the application and rendering other components. It includes <strong>AddTaskForm.js</strong> for adding new tasks; <strong>Task.js</strong>, representing individual tasks; and <strong>UpdateTaskForm.js</strong> for editing existing tasks. The back-end in <strong>api</strong> uses Express.js to define routes for HTTP operations like <strong>GET, POST, PUT,</strong> and <strong>DELETE</strong>, with the business logic in <strong>task.js</strong> to interact with DynamoDB for task management. This architecture allows for efficient communication between the front-end and back-end through HTTP requests, and serverless deployment provides scalability and cost efficiency. The use of DynamoDB ensures reliable data storage, making the app resilient and scalable.
      </p>



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
A challenge I faced in building the application was ensuring state management remained consistent and synchronized while dealing with asynchronous operations. The <strong>App.js</strong> component, which serves as the root of the application, manages a local state for tasks using React's <strong>useState</strong> hook. I needed to ensure that tasks were fetched from the back-end server and properly updated within the app, while also handling potential <strong>API errors</strong> and avoiding redundant fetches or re-renders. I solved this problem by implementing a <strong>useEffect</strong> hook with an empty dependency array, ensuring that the <strong>fetchTasks</strong> function runs only once when the component mounts. To further mitigate errors and maintain consistent state, I added <strong>error handling</strong> in fetchTasks to manage potential network issues. This approach provided a scalable way to handle state management, allowing the app to stay responsive and up-to-date with the latest task data, even in asynchronous scenarios.
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
            maxWidth: '950px',
            maxHeight: '900px',
            border: '4px solid white', // Change border color to white
            boxShadow: '0 0 10px white', // Use 10px shadow when hovered, else 15px shadow
            transition: 'box-shadow 0.3s ease-in-out', // Add transition for smooth effect
            marginLeft: '50px',
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
Another challenge was communicating with the database. To add tasks to DynamoDB, I created a robust method for connecting to the database, ensuring reliable task creation while handling potential errors. In <strong>task.js</strong>, the <strong>createTasks</strong> function is responsible for adding a new task. It generates a unique identifier (<strong>uuid</strong>) using <strong>crypto.randomUUID()</strong>, then creates a <strong>PutCommand</strong> to insert the task into the "<strong>Tasks</strong>" table, including its <strong>ID</strong>, <strong>name</strong>, and <strong>completion status</strong>. This command is sent to the <strong>DynamoDB client</strong>, which handles the actual database interaction. In <strong>index.js</strong>, I defined an Express.js <strong>POST route</strong> (<strong>/task</strong>) to receive HTTP requests for adding tasks from the front-end. The request body contains the new task's data, which is passed to <strong>createTasks</strong> to add the task to DynamoDB. <strong>Error handling</strong> ensures that if something goes wrong during this process, a 400 status code and an error message are returned to inform the client. This approach allows seamless communication between the front-end and DynamoDB for task creation. Similar methods were used for update and delete operations.
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



            <img 
          src={myImage13}
          alt="Project Img"
          style={{
            width: '100%',
            maxWidth: '550px',
            maxHeight: '500px',
            border: '4px solid white', // Change border color to white
            boxShadow: '0 0 10px white', // Use 10px shadow when hovered, else 15px shadow
            transition: 'box-shadow 0.3s ease-in-out', // Add transition for smooth effect
            marginLeft: '50px',
          }}
        />
                    <img 
          src={myImage14}
          alt="Project Img"
          style={{
            width: '100%',
            maxWidth: '650px',
            maxHeight: '600px',
            border: '4px solid white', // Change border color to white
            boxShadow: '0 0 10px white', // Use 10px shadow when hovered, else 15px shadow
            transition: 'box-shadow 0.3s ease-in-out', // Add transition for smooth effect
            marginLeft: '50px',
          }}
        />
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
          src={myImage15}
          alt="Project Img"
          style={{
            width: '100%',
            maxWidth: '550px',
            maxHeight: '500px',
            border: '4px solid white', // Change border color to white
            boxShadow: '0 0 10px white', // Use 10px shadow when hovered, else 15px shadow
            transition: 'box-shadow 0.3s ease-in-out', // Add transition for smooth effect
            marginTop: '50px',

          }}
        />
                    <img 
          src={myImage16}
          alt="Project Img"
          style={{
            width: '100%',
            maxWidth: '650px',
            maxHeight: '600px',
            border: '4px solid white', // Change border color to white
            boxShadow: '0 0 10px white', // Use 10px shadow when hovered, else 15px shadow
            transition: 'box-shadow 0.3s ease-in-out', // Add transition for smooth effect
            marginTop: '20px',
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
            Building a task list application with a React front-end and an Express.js back-end presented several challenges, from maintaining consistent state management to ensuring reliable communication with DynamoDB. On the front-end, managing asynchronous data fetching and state updates required careful use of React hooks like useState and useEffect. The back-end had to handle serverless constraints, such as AWS Lambda's cold starts and limited execution times, while also integrating with DynamoDB for CRUD operations. Despite these hurdles, completing the project was a rewarding experience, offering a holistic view of full-stack development.</p>
            
            <p style={{ fontSize: '24px' , textIndent: '4em'}}>
            Future improvements could focus on optimizing serverless performance, enhancing security and user authentication, and refining the user interface for a smoother experience. This project not only taught the intricacies of connecting React and Express.js but also highlighted the power of AWS Lambda and DynamoDB in building scalable, cloud-based applications.
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
