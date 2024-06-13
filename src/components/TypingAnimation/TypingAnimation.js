import React, { useState, useEffect } from 'react';

// 타이핑 애니메이션
const TypingAnimation = ({ text = '', speed = 100 }) => {
    const [renderedText, setRenderedText] = useState('');
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      if (index >= text.length) return; // 모든 문자 처리 완료
  
      const timer = setTimeout(() => {
        const nextChar = text.charAt(index);
        let newRenderedText = renderedText + nextChar;
  
        // 마지막 5글자가 '<br/>'인지 확인 후, 줄바꿈으로 대체
        if (newRenderedText.endsWith('<br/>   ')) {
          //이곳에서 500ms 동안 정지
          setRenderedText((prev) => prev.substring(0, prev.length - 7) + '\n'); // '<br/>'를 줄바꿈으로 대체
        } else {
          setRenderedText(newRenderedText);
        }
  
        setIndex(index + 1);
      }, speed);
  
      return () => clearTimeout(timer);
    }, [index, renderedText, speed, text]);
  
    return(
      <div
        className='AppText'
        style={{ 
        whiteSpace: 'pre-wrap',
        color: "#FFFFFF",
        fontSize: 30,
        lineHeight: 1.2
        }}
      >
        {renderedText}
      </div>
    )
  };

export default TypingAnimation;