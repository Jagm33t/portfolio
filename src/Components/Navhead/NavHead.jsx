
import { useState } from 'react';
import { ReactComponent as Hamburger } from "../../assets/icons/menu-hamburger.svg";
import iconportfolio from "../../assets/icons/iconportfolio.png"
import './NavHead.scss';

function NavHead() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    setActive(sectionId);
  };

  const [showNavbar, setShowNavbar] = useState(false);
  const [active, setActive]= useState ('');
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  

  return (
    <nav className="navbar-body">
      <div className="navbar-container">
       <div className="nav-logo" onClick={() => scrollToSection('home')}>
          <img className='nav-iconport'  src={iconportfolio} alt="iconport" />
          <span><p className='nav-logoname'>JAGMEET SINGH</p></span>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {showNavbar ? (
            <div className="exit-button" onClick={handleShowNavbar}>
              X
            </div>
          ) : (
            <Hamburger />
          )}
        </div>
        <div className='nav-desktop'>
    <ul className='nav-desktopul'>
      <li
        className={active === 'home' ? 'active' : ''}
        onClick={() => scrollToSection('home')}
      >
        <span>HOME</span>
      </li>
      <li
        className={active === 'about' ? 'active' : ''}
        onClick={() => scrollToSection('about')}
      >
        <span>ABOUT</span>
      </li>
      <li
        className={active === 'project' ? 'active' : ''}
        onClick={() => scrollToSection('project')}
      >
        <span>PROJECTS</span>
      </li>
      <li
        className={active === 'contact' ? 'active' : ''}
        onClick={() => scrollToSection('Contact')}
      >
        <span>CONTACT</span>
      </li>
    </ul>
    <style>
      {`
      .nav-desktopul li.active span {
        text-decoration: underline;
      }
      `}
    </style>
  </div>
      </div>
     
      {showNavbar && (
        <div className="nav-overlay">
          <div className="nav-elements">
            <ul>
              <li onClick={() => scrollToSection('home')}>
                <span>HOME</span>
              </li>
              <li onClick={() => scrollToSection('about')}>
                <span>ABOUT</span>
              </li>
              <li onClick={() => scrollToSection('project')}>
                <span>PROJECT</span>
              </li>
              <li onClick={() => scrollToSection('Contact')}>
                <span>CONTACT</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavHead;
