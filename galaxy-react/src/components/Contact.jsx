import React from 'react';
import '../styles/contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact">
            <div className="section-inner">

                <div className="section-title">
                    <h2>Contact <span>Me</span></h2>
                    <p>Let’s work together</p>
                </div>

                <p className="contact-note">
                    Open for collaboration & freelance projects
                </p>

                <div className="contact-grid">

                    <a href="mailto:gafankall@gmail.com" className="contact-card">
                        <i className="fas fa-envelope"></i>
                        <p>gafankall@gmail.com</p>
                    </a>

                    <a href="https://www.instagram.com/gafankemal/" target="_blank" rel="noreferrer" className="contact-card">
                        <i className="fab fa-instagram"></i>
                        <p>@gafankemal</p>
                    </a>

                    <a href="https://github.com/GafanKall" target="_blank" rel="noreferrer" className="contact-card">
                        <i className="fab fa-github"></i>
                        <p>github.com/GafanKall</p>
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Contact;
