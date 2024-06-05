// Full project at https://github.com/Flamingolo/Meta-Front-end/tree/main/portfolio

import './App.css';
import React from 'react';
import { NavBar } from './components/NavBar.js';
import { Banner } from './components/Banner.js'
import { Skills } from './components/Skills.js';
import { Projects } from './components/Projects.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
