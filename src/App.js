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
              display:'flex',
              flex:1,
              flexDirection:'column',
              minHeight:'100vh'
            }}
          >
            <HeaderComponent/>
            
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            
            <FooterComponent/>
          </div>
      </Router>
  );
}

export default App;
