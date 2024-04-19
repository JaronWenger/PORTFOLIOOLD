import React from 'react';
import Button from '@mui/material/Button';

const Skills = ({ categoryTitle, skillsList }) => {
  return (
    <div>
        <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
        <Button variant="text"><p style={{ textAlign: 'center', marginLeft: '5px', marginRight: '5px', marginTop: '0px', marginBottom: '0px', fontSize: 35, color: "white", textShadow: "0 0 2px white"}}>{categoryTitle}</p></Button>
        </div>
        <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  {skillsList.map((skill, index) => (
    <li key={index} style={{ marginBottom: '5px' }}>
      <Button variant="contained" style={{ fontSize: '1.2em' }}>{skill}</Button>
    </li>
  ))}
</ul>

    </div>
  );
};

export default Skills;