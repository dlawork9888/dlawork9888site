import React, { useState, useEffect } from 'react';
import './OnCursorText.css';
import ProjectComponent from '../ProjectComponent/ProjectComponent';

const NoProject = () => {
  return <div>Component not found!</div>;
};

const OnCursorTextProject = ({ text = '' , projectName = ''}) => {
  const [hoverColor, setHoverColor] = useState('#FFFFFF');
  const [projectDetailFlag, setProjectDetailFlag] = useState(false);

  const handleMouseEnter = () => {
    setHoverColor("#666666");
  };

  const handleMouseLeave = () => {
    setHoverColor('#FFFFFF');
  };

  const handleClick = () => {
    setProjectDetailFlag(!projectDetailFlag);
  };

  return (
    <>
      <div
        className="AppTextNotDraggable"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{
          color: hoverColor,
          fontSize: 25,
          cursor: 'pointer',
          marginTop: 20,
        }}
      >
        <div style = {{display:'flex', flexDirection:'row'}}>
          {projectDetailFlag ? <div style={{marginLeft:10, marginRight:25}}>↓ </div>: <div style={{marginLeft:10, marginRight:25}}> > </div>}{text}
        </div>
      </div>
      {projectDetailFlag ? <ProjectComponent projectName={projectName}/> : <></>}
    </>
  );
};

export default OnCursorTextProject;
