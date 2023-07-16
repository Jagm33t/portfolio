import React, { useState } from 'react';
import './About.scss';

function About() {
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    setActive(sectionId);
    console.log(active);
  };
  const [active, setActive]= useState ('');
  

  
  return (
    <>
      <div className="about-container">
        <div className="about-first">
          <h1 className="about-header">ABOUT ME</h1>
        </div>
        <div className="about-second">
        <div className="about-knowme">
              <div className="about-knowme__header">
           <h3>Get to know me</h3>
             </div>
             <p className="about-knowme__txt">
              A passionate <span className="bold">Full-stack Web Developer</span> with a focus on innovative applications. Check out some of my work in the <span className="bold">Projects</span> section.<br/><br/>
               My love for coding and exploration of new technologies drives me forward. With strong skills in both <span className="bold">front-end</span> and <span className="bold">back-end</span> development, I create responsive, user-friendly websites.<br/><br/>
               I believe in using technology to make a positive difference in the industry, and I stay updated with the latest trends. Continuous learning is vital for me to stay ahead and provide effective solutions.<br/><br/>
              Collaboration and contributing to industry professionals are my goals, as I am open to job opportunities for growth.<br/><br/>

                </p>

             <button className="about-contactbtn" onClick={() => scrollToSection('Contact')}>CONTACT</button>
</div>

          <div className="about-skills">
            <div className="about-skills__header">
              <h3>My Skills</h3>
            </div>
            <div className="about-skillscard">
              <span>HTML</span><span>CSS</span><span>JavaScript</span><span>React</span><span>Sass</span>
              <span>Node</span><span>MySql</span><span>Express.js</span>
              <span>Git</span><span>GitHub</span><span>Jira</span><span>Figma</span><span>Json</span><span>Web Api's</span><span>Agile Development</span><span>Visual Studio Code</span>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default About;
