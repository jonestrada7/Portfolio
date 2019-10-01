import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation.js'
import About from './components/About.js'
import Experience from './components/Experience.js'
import Projects from './components/Projects.js'
import Contact from './components/Contact.js'
import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init();


function App() {
  return (
    <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <header className="App-header">
        
      </header>
      <Navigation></Navigation>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
      
      <footer>
        <a href="https://github.com/jonestrada7/Portfolio" target="_blank" rel="noopener noreferrer">Created by Jonathan Estrada</a>
      </footer>
    </div>
  );
}

export default App;
