import React from 'react';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>
        <Route 
          path='/'
          element={<Home />}
        />
        <Route 
          path='/portfolio'
          element={<Portfolio />}
        />
        <Route 
          path='/about'
          element={<About />}
        />
        <Route 
          path='/contact'
          element={<Contact />}
        />
        <Route 
          path='/resume'
          element={<Resume />}
        />
        
      </Routes>
    </Router>
  );
}

export default App;
