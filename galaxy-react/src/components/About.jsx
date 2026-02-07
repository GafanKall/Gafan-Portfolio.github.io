import React from 'react';
import '../styles/about.css';
import profilePhoto from '../assets/profile.jpg'; // Verify filename

const About = () => {
    return (
        <section id="about" className="about">
            <div className="section-title" data-aos="fade-up">
                <h2>About <span>Me</span></h2>
                <p>Get to know me better</p>
            </div>

            <div className="about-wrapper">
                <div className="about-image" data-aos="fade-right">
                    <img src={profilePhoto} alt="Profile Photo" />
                </div>

                <div className="about-content" data-aos="fade-left">
                    <p>
                        I am a <strong>junior fullstack web developer</strong> with a passion
                        for building modern, responsive, and user-friendly web applications.
                    </p>

                    <p>
                        I enjoy turning ideas into real digital experiences while continuously
                        learning new technologies and improving my coding skills.
                    </p>

                    <div className="about-highlight">
                        <span>Clean Code</span>
                        <span>Responsive Design</span>
                        <span>Real Projects</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
