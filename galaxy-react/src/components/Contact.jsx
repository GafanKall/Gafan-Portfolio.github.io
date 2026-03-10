import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Github, Send, MapPin, Phone } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import '../styles/contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section-padding">
            <div className="container">
                <div className="section-header">
                    <span className="subtitle">Get In Touch</span>
                    <h2 className="title">Let's <span>Connect</span></h2>
                </div>

                <div className="contact-grid-main">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="contact-info-side"
                    >
                        <h3>Contact Information</h3>
                        <p>Feel free to reach out for collaborations or just a friendly hello!</p>

                        <div className="info-items">
                            <div className="info-item">
                                <div className="info-icon glass">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <span>Email Me</span>
                                    <p>gafankall@gmail.com</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="info-icon glass">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <span>Location</span>
                                    <p>Indonesia</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-stack">
                            <h4>Follow Me</h4>
                            <div className="social-pills">
                                <a href="https://github.com/GafanKall" target="_blank" rel="noreferrer" className="social-pill glass">
                                    <Github size={18} /> GitHub
                                </a>
                                <a href="https://www.instagram.com/gafankemal/" target="_blank" rel="noreferrer" className="social-pill glass">
                                    <Instagram size={18} /> Instagram
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <SpotlightCard className="contact-form-side glass" spotlightColor="rgba(99, 102, 241, 0.1)">
                        <form className="contact-form">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="John Doe" className="glass" />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="john@example.com" className="glass" />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea placeholder="How can I help you?" className="glass" rows="4"></textarea>
                            </div>
                            <button type="submit" className="btn-primary w-full">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    );
};

export default Contact;
