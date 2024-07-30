import React, { useState, useEffect } from 'react';
import '../CssComponents/Navbar.css';
import logo from '../Assets/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    if (window.innerWidth > 768) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const navLinks = document.querySelector('.nav-links');
    if (isOpen) {
      navLinks.style.maxHeight = navLinks.scrollHeight + 'px';
    } else {
      navLinks.style.maxHeight = '0';
    }
  }, [isOpen]);

  return (
    <header className="navbar">
      <div className="container">
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={isOpen ? 'bar1' : ''}></div>
          <div className={isOpen ? 'bar2' : ''}></div>
          <div className={isOpen ? 'bar3' : ''}></div>
        </div>
        <div className={`logo ${isOpen ? 'center-logo' : ''}`}>
          <a href="#">
            <img src={logo} alt="Alkuszoktatas Logo" className="logo-img" />
          </a>
        </div>
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <ul className={isOpen ? 'show' : ''}>
            <li><a href="#section1">Placeholder 1</a></li>
            <li><a href="#section2">Placeholder 2</a></li>
            <li><a href="#section3">Placeholder 3</a></li>
            <li><a href="#section4">Placeholder 4</a></li>
          </ul>
        </nav>
        <div className="navbar-button">
          <a href="#cta" className="cta-button">Get Started</a>
        </div>
      </div>
      {isOpen && isMobile && (
        <div className="mobile-logo">
          <a href="#">
            <img src={logo} alt="Alkuszoktatas Logo" className="mobile-logo-img" />
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;