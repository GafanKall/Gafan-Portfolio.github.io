import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const closeMenu = () => {
        setIsActive(false);
    };

    return (
        <div className="nav-container">
            <h1 className="brand">
                port<span>folio</span>
            </h1>
            <div className={`nav-link ${isActive ? 'active' : ''}`} id="navMenu">
                <a href="#home" className="nav-links" onClick={closeMenu}>Home</a>
                <a href="#about" className="nav-links" onClick={closeMenu}>About</a>
                <a href="#skill" className="nav-links" onClick={closeMenu}>Skill</a>
                <a href="#experience" className="nav-links" onClick={closeMenu}>Education & Experience</a>
                <a href="#project" className="nav-links" onClick={closeMenu}>Project</a>
                <a href="#contact" className="nav-links" onClick={closeMenu}>Contact</a>
            </div>
            <div
                className={`hamburger ${isActive ? 'active' : ''}`}
                id="hamburger"
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className=""></div>
        </div>
    );
};

export default Navbar;
