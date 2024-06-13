import './Home.css';
import React, { useState, useEffect } from 'react';
import circlegif_white from '../../images/circlegif_white.gif'

//components
import OnCursorText from '../../components/OnCursorText/OnCursorText';
import TypingAnimation from '../../components/TypingAnimation/TypingAnimation';
import OnCursorTextProject from '../../components/OnCursorText/OnCursorTextProject';

const Home = () => {


  return (    
    <div 
      className="App"
      style = {{
        flexDirection: "column",
        display:'flex',
        padding: '40px'
      }}
    >
{/*Typing Introduction*/}
      <div
        style = {{
          minHeight:110,
          display:'flex',
          alignItems:'flex-start',
          marginTop:20
        }}>
        <TypingAnimation text="Hi, There ! <br/>   This is TGLIM's Worklog Page ! <br/>   Feel Free to Click Below !"/>
      </div>
{/*Redirectings*/}
      <div
        style = {{
          //backgroundColor:'#222222',
          marginTop:20
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
{/*Worklog - Projects*/}
      <div
        style = {{
          //backgroundColor:'#222222',
          display:'flex',
          flexDirection:'column',
          marginTop:40
        }}
      >


        <div
          className="AppText"
          style={{
            color:'#FFFFFF',
            fontSize:40
          }}
        >
          Projects !
        </div>
        

        <OnCursorTextProject
          text = 'PT-Chart'
          projectName = 'PTchart'
        />
        <OnCursorTextProject
          text = 'CMC (Customize My Clothes)'
          projectName = 'CMC'
        />
        <OnCursorTextProject
          text = '수면 라이프로그 데이터를 활용한 LSTM 기반 인지 장애 예측 모형'
          projectName = 'LSTMpaper'
        />
        <OnCursorTextProject
          text = 'KEM Studio for OCR'
          projectName='KEM'
        />
        <OnCursorTextProject
          text = 'MFR: Music Feature Recommendation'
          projectName='MFR'
        />
        <OnCursorTextProject
          text = 'AI 육아 전문가 - 코코 박사'
          projectName='DrCoco'
        />
        


      </div>
    </div>
  );
}

export default Home;
