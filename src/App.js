import './App.css';
import React, { useState, useEffect } from 'react';
import circlegif_white from './images/circlegif_white.gif'



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
    </div>)
};

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
        fontSize: '30px',
        cursor: 'pointer', // 마우스 커서가 텍스트 위에 올라가 있을 때 포인터 모양으로 변경
      }}
    >
      {text}
    </div>
  );
};


function App() {


  return (    
    <div 
      className="App"
      style = {{
        flexDirection: "column"
      }}
    >
{/*헤더*/}
      <div 
        style = {{
          display: 'flex',
          margin: 20,
        }}
      >
        <div 
          className="AppText"
          style = {{
            color: "#FFFFFF",
            fontSize: 40,
          }}
        >
          dlawork9888's worklog !
        </div>
      </div>
{/*Typing Introduction*/}
      <div
        style = {{
          margin:20, 
          height:120,
          display:'flex',
          alignItems:'center'
        }}>
        <TypingAnimation text="Hi, There ! <br/>   This is TGLIM's Worklog Page ! <br/>   Feel Free to Click Below !"/>
      </div>
{/*Work list*/}
      <div
        style = {{
          flex: 1,
          margin:20
        }}
      >


        <div
          style={{
            display:'flex',
            marginTop: 5,
            alignItems:'center',
            marginBottom:20
          }}
        >
          <img
            src={circlegif_white}
            alt="Running !"
            style={{
              width:30,
              marginRight:20
            }}
          />
          <OnCursorText 
            text="dlawork9888's GitHub !"
            redirection='https://github.com/dlawork9888'  
          />
        
        </div>


        <div
          style={{
            display:'flex',
            marginTop: 5,
            alignItems:'center',
            marginBottom:20
          }}
        >
          <img
            src={circlegif_white}
            alt="Running !"
            style={{
              width:30,
              marginRight:20
            }}
          />
          <OnCursorText 
            text="dlawork9888's velog !"
            redirection='https://velog.io/@dlawork9888'
          />
        </div>


        <div
          style={{
            display:'flex',
            marginTop: 5,
            alignItems:'center',
            marginBottom:20
          }}
        >
          <img
            src={circlegif_white}
            alt="Running !"
            style={{
              width:30,
              marginRight:20
            }}
          />
          <OnCursorText 
            text="TGLIM's Portfolio on Notion"
            redirection='https://sparkly-report-5cc.notion.site/cad30c98023042a1a1af99519a58031b'
          />
        </div>


      </div>
{/* footer*/}
      <div
        style={{
          //backgroundColor: '#FFFFFF',
          position: 'absolute', // 절대 위치
          bottom: 0, 
          width: '100%', 
          display: 'flex', // Flexbox 
          justifyContent: 'space-between', //
        }}
      >
        <div
          className='AppText'
          style={{
            color: '#DDDDDD',
            marginLeft: 20,
            marginBottom:5,
          }}
        >
          Powered By TGLIM
        </div>
        <div
          className='AppText'
          style={{
            color: '#DDDDDD',
            marginRight: 20,
            marginBottom:5,
          }}
        >
          github.com/dlawork9888
        </div>
      </div>
{/* footer close*/}

    </div>
  );
}

export default App;
