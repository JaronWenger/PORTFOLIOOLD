import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; 
import Navbar from './NavbarOne';
import { Link } from 'react-scroll';
import { motion } from "framer-motion"
import { Project } from './Project';

import myImage8 from './Weather.png'
import myImage9 from '../StockDraft.png'
import myImage10 from '../StockStructure.png'
import myImage11 from '../StockProblem1.png'
import myImage12 from '../keys.png'
import myImage13 from '../StockProblem2.png'
import myImage14 from '../StockMap.png'
import myImage15 from '../StockUseState.png'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});






export default function StockApi() {
  const navigate = useNavigate(); 


  const handleHomeClick = () => {
    window.open('https://github.com/JaronWenger/Stock-API', '_blank'); // Opens the link in a new tab
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
            <h2 style={{  fontSize: 50, marginTop: '50px', textShadow: "0 0 1px white" }}>STOCK PRICE API PROJECT</h2>
        </motion.div>
        </div>




        <div style={{ marginTop: '40px', marginBottom: "100px", display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
          <Project imgURL={myImage8} URLText={"Live Site"} URL={"https://jaronwenger.github.io/Stock-API/"} newRoute={'/'} newText={"HOME"}/>
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
            The goal of this project is to create a web application where users can quickly look up real-time stock prices by entering a stock ticker symbol or company name. It will allow users to create a watchlist of multiple stocks with the flexibility to add or remove them as desired. The application leverages React.js for its component-based architecture and responsive user interfaces, and it retrieves accurate and timely stock price data through the Alpaca API. The ultimate aim is to provide a user-friendly platform that efficiently delivers stock market information, with room for future expansions to offer more comprehensive market insights.
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
            The project's architecture is centered around a typical <strong>React</strong> application structure, with the main folder containing <strong>node_modules</strong> for dependencies, the <strong>public</strong> folder for static assets, and the <strong>src</strong> folder for source code. Within <strong>src</strong>, the critical files include <strong>index.js</strong>, which serves as the application's entry point, and <strong>App.js</strong>, where most of the business logic is implemented. The <strong>components</strong> folder houses various React components, including <strong>StockData.js</strong>, which stores company names with their tickers, <strong>StockCard.js</strong>, responsible for rendering stock cards with company name, ticker, and price, and <strong>lookupFunctions.js</strong>, which provides functions for finding stock company names from tickers and vice versa. This modular structure enables a clear and maintainable codebase, allowing for easy scalability and updates.
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
          In the <strong>App.js</strong> component, state management is handled using React's <strong>useState</strong> hook. The <strong>stockTickers</strong> state keeps track of the list of stock symbols being monitored, initially containing <strong>['MSFT', 'AAPL', 'NVDA', 'AMZN', 'META']</strong>. The <strong>stockData</strong> state holds the data for each stock, such as company name and price. To display the stocks on the page, <strong>App.js</strong> uses the <strong>StockCard</strong> component, mapping over the <strong>stockTickers</strong> list to create a card for each stock. When displaying the stock cards, the code checks if data is still loading; if not, it maps the tickers in reverse order to render the most recently added stock at the top. The <strong>StockCard</strong> components show the stock's symbol, company name, and price. Clicking on a stock card triggers the <strong>handleRemoveTicker</strong> function, allowing users to remove a stock from the watchlist.
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
          src={myImage15}
          alt="Project Img"
          style={{
            width: '100%',
            maxWidth: '750px',
            maxHeight: '600px',
            border: '4px solid white', // Change border color to white
            boxShadow: '0 0 10px white', // Use 10px shadow when hovered, else 15px shadow
            transition: 'box-shadow 0.3s ease-in-out', // Add transition for smooth effect
            marginLeft: '50px',
            marginBottom: '30px',
          }}
        />


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
  The first problem I solved was accessing data from the <strong>Alpaca API</strong> to fetch real-time stock quotes. To do this, I used <strong>Axios</strong>, a popular HTTP client for JavaScript, to make GET requests to the <strong>Alpaca API</strong> endpoint for stock quotes. To authenticate these requests, you need valid <strong>API keys</strong>. In this project, I stored the keys in a <strong>.env</strong> file, ensuring they're not exposed in the source code. This file is included in <strong>.gitignore</strong> to prevent it from being pushed to version control. To fetch a stock price, I created the <strong>fetchStockPrice</strong> function, which takes a stock ticker symbol and sends a request to <strong>Alpaca</strong>, including the <strong>API keys</strong> in the request headers. If successful, the function returns the stock's ask price (<strong>quote.ap</strong>). In case of errors, it catches exceptions and logs an error message to help with troubleshooting. This approach ensures the <strong>API keys</strong> are secured while enabling seamless integration with <strong>Alpaca's</strong> data services.
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
            marginLeft: '50px',
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
            marginLeft: '50px',
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
  In <strong>lookupFunctions.js</strong>, the <strong>getStockSymbol</strong> and <strong>getStockName</strong> functions enable users to access stock data by allowing flexible search terms. The <strong>getStockSymbol</strong> function is used during searches, normalizing user input to uppercase and checking if it matches a known stock symbol. If not, it iterates through the stock data, using <strong>.includes()</strong> to find matches within company names. This flexibility allows users to find a stock by entering part of the company name, like "Tesla," instead of needing the exact formal name, "Tesla, Inc." The <strong>getStockName</strong> function retrieves the full company name from a stock symbol, which is useful for constructing stock cards on the website. These functions solve the problem of accessing stock information with varied inputs, enhancing the user experience by making searches more intuitive and forgiving of small discrepancies.
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
            This project has provided insights into the seamless integration of third-party APIs, specifically the Alpaca API, to fetch real-time stock information. It has also highlighted the importance of error handling to ensure a smooth user experience, even when network issues or unexpected API errors occur. Throughout the development process, React.js has proven to be an efficient framework, allowing for component-based design and quick iterations.</p>
            
            <p style={{ fontSize: '24px' , textIndent: '4em'}}>
Looking ahead, there are several opportunities for further enhancements. One significant improvement would be to build a backend service to expand the scope of data that can be accessed, allowing for more comprehensive market insights beyond stock prices. With these enhancements, the website could evolve from a simple stock price viewer to a robust financial tool offering a deeper understanding of market trends and analysis.
            </p>

          </div>

 


        <div style={{ marginTop: '40px', marginBottom: '0px', display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
        <Button 
        variant="outlined" 
        onClick={handleHomeClick} 
        style={{ marginTop: '10px' }}
      >
        GitHub Repository
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
