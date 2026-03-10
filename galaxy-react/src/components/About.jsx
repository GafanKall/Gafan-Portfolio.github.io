import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Globe, Sparkles } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import '../styles/about.css';
import profilePhoto from '../assets/profile.jpg';

const About = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="about" className="section-padding">
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeIn}
                    className="section-header"
                >
                    <span className="subtitle">Discover</span>
                    <h2 className="title">About <span>Me</span></h2>
                </motion.div>

                <div className="about-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="about-img-container"
                    >
                        <div className="img-frame">
                            <img src={profilePhoto} alt="Kemal Gafan" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="about-text"
                    >
                        <p className="lead">
                            I am a <strong>Junior Fullstack Web Developer</strong> based in Indonesia,
                            with a sharp eye for modern UI/UX and a passion for crafting robust code.
                        </p>

                        <p>
                            My journey in tech is driven by a desire to bridge the gap between complex
                            functionality and intuitive design. I don't just write code; I build
                            digital experiences that resonate with users.
                        </p>

                        <div className="stats-grid">
                            <SpotlightCard className="stat-card glass" spotlightColor="rgba(99, 102, 241, 0.2)">
                                <Code2 className="stat-icon" />
                                <h3>Clean Code</h3>
                                <p>Structured & maintainable</p>
                            </SpotlightCard>
                            <SpotlightCard className="stat-card glass" spotlightColor="rgba(168, 85, 247, 0.2)">
                                <Sparkles className="stat-icon" />
                                <h3>Modern UI</h3>
                                <p>Visual excellence</p>
                            </SpotlightCard>
                            <SpotlightCard className="stat-card glass" spotlightColor="rgba(99, 102, 241, 0.2)">
                                <Globe className="stat-icon" />
                                <h3>Global Standards</h3>
                                <p>Best practices always</p>
                            </SpotlightCard>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
