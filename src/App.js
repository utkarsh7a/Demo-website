// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';  // Importing the styles

import Navbar1 from './components/nav_bar';
import Homepage from './components/Homepage';
import About from './components/about';
import Design from './components/design';
import Contact from './components/contact';
import Footer1 from './components/footer';
function App() {
  return (
    <div>
      <Navbar1></Navbar1>
      <Homepage></Homepage>
      <About></About>
      <Design></Design>
      <Contact></Contact>
      <Footer1></Footer1>
    </div>
    
    
  );
}

export default App;
