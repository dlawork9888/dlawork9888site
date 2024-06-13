import React, { useState, useEffect } from 'react';
import './OnCursorText.css'

// 커서 올렸을 때 색 변화 텍스트 컴포넌트
const OnCursorText = ({ text = '', redirection = '' }) => {
    const [hoverColor, setHoverColor] = useState('#FFFFFF'); // 기본 텍스트 색상
  
    const handleMouseEnter = () => {
      setHoverColor("#666666");
    };
  
    const handleMouseLeave = () => {
      setHoverColor('#FFFFFF'); 
    };
  
    const handleClick = () => {
      if (redirection) {
        window.open(redirection, '_blank'); // 새 탭에서 redirection URL로 이동
      }
    };
  
    return (
      <div
        className="AppTextNotDraggable"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{
          color: hoverColor,
          fontSize: '25px',
          cursor: 'pointer', // 마우스 커서가 텍스트 위에 올라가 있을 때 포인터 모양으로 변경
        }}
      >
        {text}
      </div>
    );
  };

export default OnCursorText;