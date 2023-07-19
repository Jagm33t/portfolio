import React, { useState, useEffect } from 'react';
import NavHead from './Components/Navhead/NavHead';
import './App.scss';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate the loading process for 3 seconds
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div class="appcontainer">
          <div class="loader"></div>
          <div class="loader"></div>
          <div class="loader"></div>
        </div>
      ) : (
        <>
          <NavHead />
          <div id="home">
            <Home />
          </div>
          <div id="about">
            <About />
          </div>
          <div id='project'>
            <Projects />
          </div>
          <div id="Contact">
            <Contact />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
