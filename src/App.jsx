import React, { useState } from 'react';
import RenderProjects from './components/RenderProjects.jsx';
import Nav from './components/Nav.jsx';  
import Intro from './components/Intro.jsx';  
import Contact from './components/Contact.jsx';
import Home from './components/Home'  
import './App.css';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const [selectedSample, setSelectedSample] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <BrowserRouter>
<Home/>
</BrowserRouter>
      );
    };
    
    

export default App;


