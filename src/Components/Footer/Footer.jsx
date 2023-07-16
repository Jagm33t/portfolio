import "./Footer.scss";
import React from 'react';
import linkedin from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github.png';
import resumePDF from '../../assets/resume/Jagmeet_Singh_resume.pdf';
import diploma from "../../assets/resume/diploma.pdf";


const Footer = () => {
  const openPDFInNewTab = () => {
    window.open(diploma, '_blank');
  };
  return (
    <footer className="rect-footer">
      <div className="rect-first">
      <div className="rect-footer-buttons">
      <button className="rect-download" type="button">
  <span className="button__text">
    <a
      className="rect-footer-download"
      href={resumePDF}
      download="resume.pdf"
    >
      Resume
    </a>
  </span>
  <span className="button__icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 35 35"
      id="bdd05811-e15d-428c-bb53-8661459f9307"
      data-name="Layer 2"
      className="svg"
      onClick={() => {
        const link = document.createElement('a');
        link.href = resumePDF;
        link.download = 'resume.pdf';
        link.click();
      }}
    >
      <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
      <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
      <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
    </svg>
  </span>
</button>
<button className="rect-diploma" type="button" onClick={openPDFInNewTab}>Certificate</button>
       
      </div>
     
      <div className="rect-footer-icons">
       <h4><span>itsjag07@gmail.com</span></h4>
       <div className="footer-social">
          <a href="https://www.linkedin.com/in/jagmeet-singh7/" target="_blank" rel="noopener noreferrer">
            <img className="home-socialimage" src={linkedin} alt="linkedin" />
          </a>
          <a href="https://github.com/Jagm33t" target="_blank" rel="noopener noreferrer">
            <img className="home-socialimage" src={github} alt="github" />
          </a>
        </div>
      </div>
      
      </div>
      <div className="rect-second">
      <div className="rect-footer-bottom">
        <span className="copyright"> copyright &copy; Jagmeet Singh 2023</span>
      </div>
      </div>
      
    </footer>
  );
};

export default Footer;