import "./Projects.scss";
import capstone from "../../assets/images/capstone.png";
import brainflix from "../../assets/images/brainflixscreen.png";
import bandsite from "../../assets/images/screenshotshows.png";
import amazon from "../../assets/images/amazonpage.png";
import movies from "../../assets/images/movieslover.png";
import fastfingers from "../../assets/images/fastfinger.png";
import tic from "../../assets/images/tic.png";
function Projects (){


  return(
    <>
    <div className="projects-container">
      <div className="projects-first">
        <h1 className="projects-header">PROJECTS</h1>
      </div>
      <div className="projects-second">

        <div className="projects-cardsection">
        <div className="projects-cards">
          <div className="projects-book">
            <p className="projects-booktxt">This is a Full Stack Application built with HTML, SASS, React, Node, Express.js, MySql, JWT Token Authentication ,Axios, Web Api, Email.js and more..
             Click on the Link here to view details <a href="https://github.com/Jagm33t/Capstone-client" target="_blank" rel="noopener noreferrer">Github</a>
             </p>
          <div className="projects-cover">
           <img className="card-image" src={capstone} alt="capstone" />
          </div>
         </div>
         <div className="card-details">
         <p ><span class="bold-shine">CardMute</span>, This project is a digital wallet that simplifies transactions, allowing user to add funds from various sources and transfer money to loved ones. With features like the check balance, expense calculator, and currency converter, making managing wallet a breeze.
            This project allow user to  view transaction in real time with the help of database. </p>
            <button className="projects-viewbtn" onClick={() => window.open('https://github.com/Jagm33t/Capstone-client', '_blank')}> View</button>
         </div>

        </div>
        </div>
        <div className="projects-cardsection">
        <div className="projects-cards">
          <div className="projects-book">
            <p className="projects-booktxt">The application is built using HTML and styled with CSS. It utilizes Axios calls to make requests to an external API, retrieves the data, and displays it to the user.
            Click on the Link here to view details <a href="https://github.com/Jagm33t/Hackathon" target="_blank" rel="noopener noreferrer">Github</a>
            </p>
          <div className="projects-cover">
          <img className="card-image" src={movies} alt="movies" />
          </div>
         </div>
         <div className="card-details">
         <p>As a part of our group project, This is a front-end application that enables users to search for movies using keywords in a search box. The application efficiently displays relevant results based on the search query, encompassing movies related to actor names, release dates, and various other criteria
         </p>
         <button className="projects-viewbtn" onClick={() => window.open('https://github.com/Jagm33t/Hackathon', '_blank')}> View</button>
        </div>
        </div>
        </div>
        <div className="projects-cardsection">
        <div className="projects-cards">
          <div className="projects-book">
            <p className="projects-booktxt">This is a Full Stack Application built with HTML, SASS, React, Node, Express.js, Axios..
            Click on the Link here to view details <a href="https://github.com/Jagm33t/BrainFlix" target="_blank" rel="noopener noreferrer">Github</a>
            </p>
          <div className="projects-cover">
         <img className="card-image" src={brainflix} alt="brainflix" />
          </div>
         </div>
         <div className="card-details">
         <p>Video streaming platform page called BrainFlix. It is similar to YouTube, where users can navigate to different videos and view their detailed sections. Users can see the number of likes and views each video has. Additionally, users can add comments and delete them. </p>
         <button className="projects-viewbtn" onClick={() => window.open('https://github.com/Jagm33t/BrainFlix', '_blank')}> View</button>
        </div>
        </div>
        </div>
        <div className="projects-cardsection">
        <div className="projects-cards">
          <div className="projects-book">
            <p className="projects-booktxt">A Responsive application built using HTML, Sass, BEM and more.. Click on the Link here to view details <a href="https://github.com/Jagm33t/BandSite" target="_blank" rel="noopener noreferrer">Github</a></p>
          <div className="projects-cover">
          <img className="card-image" src={bandsite} alt="bandsite" />
          </div>
         </div>
         <div className="card-details">
         <p>The website of an imaginary music group was developed to demonstrate proficiency in Flexbox, SASS, BEM, responsive design, APIs, and fundamental concepts of JavaScript. This undertaking was accomplished within a three-week timeframe. Each sprint within this directory represents the culmination of one week's worth of effort.</p>
         <button className="projects-viewbtn" onClick={() => window.open('https://github.com/Jagm33t/BandSite', '_blank')}> View</button>
        </div>
        </div>
        </div>
        <div className="projects-cardsection">
        <div className="projects-cards">
          <div className="projects-book">
            <p className="projects-booktxt">A Front-end application is primarily focused on intricate and detailed styling with the help of Grid Positining in HTML and styled through Css.Click on the Link here to view details <a href="https://github.com/Jagm33t/Shopping-page" target="_blank" rel="noopener noreferrer">Github</a></p>
          <div className="projects-cover">
          <img className="card-image" src={amazon} alt="amazon" />
          </div>
         </div>
         <div className="card-details">
         <p>Similar to an Amazon shopping page, this web page enables users to obtain detailed information about products. The primary focus of this project is to work on styling and positioning each item effectively.</p>
         <button className="projects-viewbtn" onClick={() => window.open('https://github.com/Jagm33t/Shopping-page', '_blank')}> View</button>

        </div>
        </div>
        </div>


      </div>
      <div className="projects-third">
        <div className="project-third__header">
        <h2 className="third-header">For Fun Projects</h2>
        </div>
        <div className="projects-fun">
        <div className="typing-portfolio">
        <a href="https://jagmeetsingh-fastfingers.netlify.app/" target="_blank" rel="noopener noreferrer">
        <img className="fastfingers" src={fastfingers} alt="fastfingers" /></a>
        <p className="typing-para">Made with typescript</p>
        </div>

        <div className="tic-tac-toe">
        <a href="https://jagmeetsingh-tic-tac-toe.netlify.app/" target="_blank" rel="noopener noreferrer">
        <img className="tic" src={tic} alt="tic-tac-toe" /></a>
        <p className="typing-para">Made with Javascript</p>
        </div>
        
        </div>
       
      </div>
    </div>
    </>
  )
}

export default Projects;