import React, { useState } from 'react';
import iconportfolio from '../../assets/icons/iconportfolio.png';
import './Home.scss';
import linkedin from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github.png';
import gmail from '../../assets/icons/gmail.png';

function Home() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    setActive(sectionId);
    console.log(active);
  };
  const [active, setActive]= useState ('');

  return (
    <>
      <div className="home-container">
        <div className="home-social">
          <a href="https://www.linkedin.com/in/jagmeet-singh7/" target="_blank" rel="noopener noreferrer">
            <img className="home-socialimage" src={linkedin} alt="linkedin" />
          </a>
          <a href="https://github.com/Jagm33t" target="_blank" rel="noopener noreferrer">
            <img className="home-socialimage" src={github} alt="github" />
          </a>
          <img className="home-socialimage" src={gmail} alt="gmail" onClick={() => scrollToSection('Contact')} />
        </div>
        <div className="home-box1">
          <h1 className="home-header">JAGMEET SINGH</h1>
          <p className="home-details typing-demo">Full-Stack Developer based in Vancouver, Canada.</p>
          <button className="home-projectbtn" onClick={() => scrollToSection('project')}>PROJECTS</button>
        </div>
        <div className="home-box2">
          <img className="home-portpic" src={iconportfolio} alt="homeimage" />
        </div>
      </div>
      
    </>
  );
}

export default Home;
