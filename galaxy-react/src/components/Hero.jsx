import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typed from 'typed.js';
import { Github, Instagram, Linkedin, ArrowRight, Sparkles } from 'lucide-react';
import Magnetic from './Magnetic';
import '../styles/hero.css';
import profileImg from '../assets/hero-profile.jpg';

const Hero = () => {
    const el = useRef(null);
    const [badgeIndex, setBadgeIndex] = React.useState(0);
    const badges = ["Creative Mind", "Problem Solver", "Fast Learner", "Tech Enthusiast"];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setBadgeIndex((prev) => (prev + 1) % badges.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                'Junior Fullstack Web Developer',
                'UI/UX Designer',
                'Web Developer',
                'Passionate Coder',
                'Digital Craftsmanship'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true
        });

        return () => typed.destroy();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="hero-section container" id="home">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="hero-grid"
            >
                <div className="hero-info">
                    <motion.span variants={itemVariants} className="hero-badge">
                        Available for Work
                    </motion.span>
                    <motion.h1 variants={itemVariants} className="hero-main-title">
                        Building Digital <br />
                        <span>Experiences</span> That Matter
                    </motion.h1>
                    <motion.p variants={itemVariants} className="hero-subline">
                        Hi, I'm <span className="highlight">Muhammad Kemal Gafan</span>.
                        I'm a <span className="typed-text" ref={el}></span>
                    </motion.p>

                    <motion.div variants={itemVariants} className="hero-actions">
                        <a href="#project" className="btn-primary">
                            View Works <ArrowRight size={18} />
                        </a>
                        <div className="social-links-hero">
                            <Magnetic>
                                <a href="https://github.com/GafanKall" target="_blank" rel="noreferrer" className="social-link">
                                    <Github size={24} />
                                </a>
                            </Magnetic>
                            <Magnetic>
                                <a href="https://www.instagram.com/gafankemal/" target="_blank" rel="noreferrer" className="social-link">
                                    <Instagram size={24} />
                                </a>
                            </Magnetic>
                            <Magnetic>
                                <a href="https://www.linkedin.com/in/muhammad-kemal-gafan-kusuma-3b536a29b/" target="_blank" rel="noreferrer" className="social-link">
                                    <Linkedin size={24} />
                                </a>
                            </Magnetic>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    variants={itemVariants}
                    className="hero-image-wrapper"
                >
                    <div className="image-blob">
                        <img src={profileImg} alt="Kemal Gafan" />
                    </div>
                    <div className="blob-decoration"></div>
                    <motion.div
                        animate={{
                            y: [0, -15, 0],
                            rotate: [0, 5, 0]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="floating-card glass"
                    >
                        <Sparkles size={16} color="var(--accent-primary)" />
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={badgeIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5 }}
                            >
                                {badges[badgeIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
