import React, { useState } from 'react';
import Button from '@mui/material/Button';

export const Project = ({ imgURL, URLText, URL }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open(URL, '_blank'); // Open the projectURL in a new tab
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <a 
        href={URL} 
        target="_blank"
        rel="noopener noreferrer" 
        onMouseEnter={() => setIsHovered(true)} // Set isHovered to true when mouse enters
        onMouseLeave={() => setIsHovered(false)} // Set isHovered to false when mouse leaves
      >
        <img 
          src={imgURL}
          alt="Project Image"
          style={{
            width: '100%',
            maxWidth: '450px',
            height: 'auto',
            border: '4px solid white', // Change border color to white
            boxShadow: isHovered ? '0 0 20px white' : '0 0 10px white', // Use 10px shadow when hovered, else 15px shadow
            transition: 'box-shadow 0.3s ease-in-out' // Add transition for smooth effect
          }}
        />
      </a>
      <div style={{ marginTop: "20px"}}>

      </div>
      <Button variant="outlined" onClick={handleClick} style={{ marginTop: '10px' }}>
        {URLText}
      </Button>
    </div>
  );
};
