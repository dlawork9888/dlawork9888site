import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import FooterComponent from './components/FooterComponent/FooterComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';

function App() {


  return (    
      <Router>
        <div
          style = {{
            backgroundColor:'#000000',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            minHeight:'100vh'
          }}
        >
          <div
            style = {{
              display:'flex',
              flex:1,
              flexDirection:'column',
              width:'90%',
            }}
          >
            <HeaderComponent/>
            
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            
            
          </div>
          <FooterComponent/>
        </div>
        
      </Router>
  );
}

export default App;
