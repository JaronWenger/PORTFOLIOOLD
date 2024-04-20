import React from 'react';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import myImage4 from './/Profile.jpg'
import myImage5 from './/Profile2.jpg'

const Contact = () => {
    const contactItems = [
        { icon: <EmailIcon fontSize="large"/>, text: 'jarongwenger@gmail.com' },
        { icon: <PhoneIcon fontSize="large"/>, text: '717-723-5127' },
        { icon: <LocationOnIcon fontSize="large"/>, text: 'Lancaster, PA' },
        { icon: <LinkedInIcon fontSize="large"/>, text: 'linkedin.com/in/jaronwenger', link: 'https://www.linkedin.com/in/jaronwenger/' },
        { icon: <GitHubIcon fontSize="large"/>, text: 'https://github.com/JaronWenger', link: 'https://github.com/JaronWenger' }
      ];

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* Picture on the left */}
      <img 
        src={myImage5} 
        alt="Contact" 
        style={{ 
            width: '400px', 
            marginRight: '20px',
            border: '4px solid white', // Add white border
            boxShadow: '0 0 10px white', // Add initial white shadow
            transition: 'box-shadow 0.3s ease-in-out' // Add transition for smooth effect
        }} 
        onMouseEnter={(e) => { e.target.style.boxShadow = '0 0 10px white'; }} // Increase shadow on hover
        onMouseLeave={(e) => { e.target.style.boxShadow = '0 0 5px white'; }} // Restore initial shadow on mouse leave
        />


      {/* Contact heading and list on the right */}
      <div>
      <ul>
          {contactItems.map((contact, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <div style={{ marginRight: '10px' }}>{contact.icon}</div>
              {contact.link ? (
                <Button variant="outlined" component="a" href={contact.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2em' }}>
                  {contact.text}
                </Button>
              ) : (
                <Button variant="outlined" style={{ fontSize: '1.2em' }}>
                  {contact.text}
                </Button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
