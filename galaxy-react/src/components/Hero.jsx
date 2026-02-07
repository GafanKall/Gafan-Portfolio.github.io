import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import '../styles/hero.css';
import profileImg from '../assets/me.jpg'; // Adjust path if needed

const Hero = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Junior Fullstack Web Developer', 'UI/UX Designer', 'Web Developer', 'Code with passion, design with purpose', 'Crafting ideas into digital experiences'],
            typeSpeed: 10,
            backSpeed: 0,
            fadeOut: true,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <div className="hero-subtitle">Hello Everyone, I am</div>
                <div className="hero-title">Muhammad Kemal <span>Gafan</span> </div>
                <p className="hero-description" data-aos="fade-up" data-aos-delay="600">
                    I'm a, <span ref={el}></span>
                </p>
                <div className="hero-social">
                    <a href="https://github.com/GafanKall" className="social github" target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.instagram.com/gafankemal/" className="social instagram" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-kemal-gafan-kusuma-3b536a29b/"
                        className="social linkedin" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>

            </div>
            <div className="image-content hero">
                <img src={profileImg} alt="Profile Image" />
            </div>

        </section>
    );
};

export default Hero;
