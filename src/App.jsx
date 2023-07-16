import React from 'react';
import NavHead from './Components/Navhead/NavHead';
import './App.scss';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
function App() {


  return (
    <div>
      <NavHead />
      <div id="home">
        <Home/>
      </div>
      <div id="about">
      <About />
      </div>
      <div id='project'>
       <Projects/>
      </div>
      <div id="Contact">
       <Contact/>
      </div>
      <Footer/>
      
    </div>
  );
};

export default App;
