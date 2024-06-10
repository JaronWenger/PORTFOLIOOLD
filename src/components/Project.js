import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';

export const Project = ({ imgURL, URLText, URL, newRoute, newText, projectTitle }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleImageClick = () => {
    if (location.pathname === '/') {
      navigate(newRoute);
    } else {
      window.open(URL, '_blank');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>{projectTitle}</h1>
      <div
        onClick={handleImageClick} // Conditional handler
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={imgURL}
          alt="Project Image" // Improve alt text for accessibility
          style={{
            width: '100%',
            maxWidth: '450px',
            maxHeight: '300px',
            border: '4px solid white',
            boxShadow: isHovered ? '0 0 20px white' : '0 0 10px white', 
            transition: 'box-shadow 0.3s ease-in-out',
          }}
        />
      </div>
      <div style={{ marginTop: '20px' }}></div>
      <Button variant="outlined" onClick={() => window.open(URL, '_blank')} style={{ marginTop: '10px' }}>
        {URLText}
      </Button>
      <Button variant="outlined" onClick={() => navigate(newRoute)} style={{ marginTop: '10px' }}>
        {newText}
      </Button>
    </div>
  );
};

