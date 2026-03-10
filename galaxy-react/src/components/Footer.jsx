import React from 'react';
import { Github, Instagram, Linkedin, Heart } from 'lucide-react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer section-padding">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        Kemal <span>Gafan</span>
                    </div>

                    <div className="footer-socials">
                        <a href="https://github.com/GafanKall" target="_blank" rel="noreferrer" className="footer-social-link"><Github size={20} /></a>
                        <a href="https://www.instagram.com/gafankemal/" target="_blank" rel="noreferrer" className="footer-social-link"><Instagram size={20} /></a>
                        <a href="https://www.linkedin.com/in/muhammad-kemal-gafan-kusuma-3b536a29b/" target="_blank" rel="noreferrer" className="footer-social-link"><Linkedin size={20} /></a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        &copy; {new Date().getFullYear()} Muhammad Kemal Gafan.
                        Made with <Heart size={14} style={{ color: '#ef4444', display: 'inline' }} /> for the Web.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
