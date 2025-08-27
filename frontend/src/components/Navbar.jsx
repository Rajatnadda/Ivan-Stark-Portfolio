import React, { useState } from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <h1 className="navbar-title">Portfolio Figma-2</h1>
      <button className="close-open" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

    
      <nav className={`navbar-nav ${isOpen ? "open" : ""}`}>
        <ul className="navbar-list">
          <li className="navbar-item">Work</li>
          <li className="navbar-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
