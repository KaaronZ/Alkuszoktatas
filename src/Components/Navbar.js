import React, { useState } from "react";
import "../CSSComponents/Navbar.css";
import logo from "../Resources/Logo.png"



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="Alkuszoktatas Logo" className="logo-img" />
          </a>
        </div>
        <nav>
          <div className="hamburger-menu" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
