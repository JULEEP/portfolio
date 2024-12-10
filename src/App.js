// src/App.js
import './App.css'; // Import App styles
import React from 'react';
import Header from './components/Header'; // Import the Header component
import About from './components/About';
import Hire from './components/Hire';
import Expertise from './components/Expertise';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="App">
    <div className="content-overlay">
      <Header />
      <About />
      <Hire />
      <Expertise />
      <Portfolio />
      <Contact />
    </div>
  </div>
  );
};

export default App;
