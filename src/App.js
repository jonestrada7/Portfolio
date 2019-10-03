import React from 'react';
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
      <Navigation></Navigation>
      
      <div className="intro">
        <h2 className="intro-text1" data-aos='fade-right' data-aos-duration='1000' data-aos-delay='0'>Hello, my name is</h2>
        <h2 className="intro-text2" data-aos='fade-right' data-aos-duration='1000' data-aos-delay='100'>Jonathan Estrada.</h2>
        <h2 className="intro-text3" data-aos='fade-right' data-aos-duration='1000' data-aos-delay='200'>I thrive on technology.</h2>
        <div className='about-button' data-aos='fade-right' data-aos-duration='1000' data-aos-delay='300'>
          <a href='#about' className="about-link">Learn more about me!</a>
        </div>
      </div>
      
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
