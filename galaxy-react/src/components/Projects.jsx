import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import '../styles/project.css';
import taskmateImg from '../assets/Taskmate.jfif';
import taskmateMockup from '../assets/taskmate-mockup.png';
import kboothMockup from '../assets/kbooth-mockup.png';
import jkt48Mockup from '../assets/jkt48-mockup.png';
import kboothDetail from '../assets/kbooth-detail.png';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projectData = [
        {
            title: "Taskmate",
            desc: "Modern productivity suite with Kanban boards, smart notifications, and mobile sync.",
            fullDesc: "Taskmate is a comprehensive productivity suite consisting of a Laravel 12 web application and a Flutter mobile application. It features real-time Kanban boards with drag-and-drop, automated deadline alerts (24/12/6h), weekly schedules, and cloud-synchronized notes.",
            features: [
                "Real-time Kanban boards with Drag & Drop",
                "Smart deadline alerts (Push & Browser)",
                "Weekly time-blocked scheduling",
                "Cross-platform synchronization",
                "Secure Auth with Laravel Sanctum & Fortify"
            ],
            tech: ["Laravel 12", "Flutter", "MySQL", "Provider", "Sanctum"],
            github: "https://github.com/GafanKall/taskmate.git",
            image: taskmateMockup
        },
        {
            title: "KBooth",
            desc: "Premium retro-style photobooth with real-time filters and multi-layout support.",
            fullDesc: "A high-performance photobooth web application built with React 19 and Vite. Features multi-layout grids, real-time professional filters (Noir, Sepia, etc.), premium frames, and a local storage-first gallery system using IndexedDB.",
            features: [
                "Multi-layout support (1x1, 2x2 grid)",
                "Real-time professional filters",
                "Premium Glassmorphic UI & Frames",
                "Local Gallery storage via IndexedDB",
                "Customizable timer & countdowns"
            ],
            tech: ["React 19", "Tailwind CSS", "Framer Motion", "Zustand", "IndexedDB"],
            github: "https://github.com/GafanKall/KBooth.git",
            image: kboothMockup,
            detailImage: kboothDetail
        },
        {
            title: "JKT48 Stream",
            desc: "Experimental UI/UX Case Study for a JKT48 dedicated mobile ecosystem.",
            fullDesc: "This project explores the intersection of fandom culture and modern mobile UX. A deep dive into user personas, journey mapping, and high-fidelity prototyping, JKT48 Stream aims to solve fragmentation in fan resources by consolidating news, streams, and membership into a premium, unified experience.",
            features: [
                "User Persona & Journey Research",
                "High-Fidelity Interaction Prototyping",
                "Unified Design System (Component Library)",
                "Membership & Fan Interaction Funnel",
                "Immersive Onboarding Experience"
            ],
            tech: ["Figma", "User Research", "Interaction Design", "Prototyping", "UI Design"],
            github: "#",
            image: jkt48Mockup
        }
    ];

    return (
        <section id="project" className="section-padding">
            <div className="container">
                <div className="section-header">
                    <span className="subtitle">Portfolio</span>
                    <h2 className="title">Featured <span>Projects</span></h2>
                </div>

                <div className="projects-grid">
                    {projectData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            onClick={() => setSelectedProject(project)}
                            className="project-card-outer"
                        >
                            <SpotlightCard className="project-card glass" spotlightColor="rgba(255, 255, 255, 0.1)">
                                <div className="project-img-wrapper">
                                    <img src={project.image} alt={project.title} />
                                    <div className="project-overlay">
                                        <span className="view-details">Click to View Details</span>
                                    </div>
                                </div>

                                <div className="project-content">
                                    <div className="project-tags">
                                        {project.tech.slice(0, 3).map((tag) => (
                                            <span key={tag} className="tech-tag">{tag}</span>
                                        ))}
                                    </div>
                                    <h3>{project.title}</h3>
                                    <p>{project.desc}</p>
                                    <div className="project-footer">
                                        <div className="project-link">
                                            <Github size={18} /> Code
                                        </div>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="project-modal glass"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="modal-close" onClick={() => setSelectedProject(null)}>
                                <X size={24} />
                            </button>

                            <div className="modal-grid">
                                <div className="modal-image">
                                    <img src={selectedProject.detailImage || selectedProject.image} alt={selectedProject.title} />
                                </div>
                                <div className="modal-info">
                                    <h2>{selectedProject.title}</h2>
                                    <p className="modal-full-desc">{selectedProject.fullDesc}</p>

                                    <div className="modal-section">
                                        <h4>Key Features</h4>
                                        <ul>
                                            {selectedProject.features.map((feat) => (
                                                <li key={feat}>{feat}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="modal-section">
                                        <h4>Technologies</h4>
                                        <div className="modal-tech">
                                            {selectedProject.tech.map((t) => (
                                                <span key={t} className="tech-pill">{t}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="modal-actions">
                                        <a href={selectedProject.github} target="_blank" rel="noreferrer" className="btn-primary">
                                            <Github size={18} /> View Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
