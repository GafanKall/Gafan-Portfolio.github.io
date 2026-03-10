import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import '../styles/skill.css';

const Skills = () => {
    const skillGroups = [
        {
            category: "Frontend",
            description: "Building responsive and interactive user interfaces with modern frameworks.",
            icon: "🎨",
            className: "frontend-card",
            skills: [
                { name: "HTML5", color: "#E34F26", icon: "devicon-html5-plain colored" },
                { name: "CSS3", color: "#1572B6", icon: "devicon-css3-plain colored" },
                { name: "JAVASCRIPT", color: "#F7DF1E", textColor: "#000", icon: "devicon-javascript-plain colored" },
                { name: "BOOTSTRAP", color: "#7952B3", icon: "devicon-bootstrap-plain colored" },
                { name: "TAILWIND CSS", color: "#06B6D4", icon: "devicon-tailwindcss-plain colored" },
                { name: "NEXT.JS", color: "#fff", icon: "devicon-nextjs-plain" },
            ]
        },
        {
            category: "Backend & APIs",
            description: "Architecting scalable server-side logic and robust API integrations.",
            icon: "⚙️",
            className: "backend-card",
            skills: [
                { name: "PHP", color: "#777BB4", icon: "devicon-php-plain colored" },
                { name: "LARAVEL", color: "#FF2D20", icon: "devicon-laravel-plain colored" },
                { name: "PYTHON", color: "#3776AB", icon: "devicon-python-plain colored" },
                { name: "FLASK", color: "#fff", icon: "devicon-flask-original" },
                { name: "NESTJS", color: "#E0234E", icon: "devicon-nestjs-plain colored" },
            ]
        },
        {
            category: "Mobile",
            description: "Developing cross-platform mobile experiences.",
            icon: "📱",
            className: "mobile-card",
            skills: [
                { name: "FLUTTER", color: "#02569B", icon: "devicon-flutter-plain colored" },
                { name: "DART", color: "#0175C2", icon: "devicon-dart-plain colored" },
            ]
        },
        {
            category: "Tools",
            description: "Design and development utilities.",
            icon: "🗄️",
            className: "tools-card",
            skills: [
                { name: "MYSQL", color: "#4479A1", icon: "devicon-mysql-plain colored" },
                { name: "POSTGRESQL", color: "#336791", icon: "devicon-postgresql-plain colored" },
                { name: "FIGMA", color: "#F24E1E", icon: "devicon-figma-plain colored" },
                { name: "INSOMNIA", color: "#4000BF", icon: "devicon-insomnia-plain colored" },
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
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
        <section id="skill" className="section-padding">
            <div className="container">
                <div className="section-header" style={{ marginBottom: "4rem", textAlign: "left" }}>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="title"
                        style={{ fontSize: "2.5rem", display: "flex", alignItems: "center", gap: "1rem" }}
                    >
                        🛠️ Tech Stack
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ color: "var(--text-muted)", marginTop: "0.5rem", fontSize: "1.1rem" }}
                    >
                        My technical arsenal for bringing ideas to life.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="skills-bento-grid"
                >
                    {skillGroups.map((group, gIndex) => (
                        <motion.div
                            key={gIndex}
                            variants={itemVariants}
                            className={`skill-bento-item ${group.className}`}
                        >
                            <SpotlightCard className="skill-category-card" spotlightColor="rgba(99, 102, 241, 0.15)">
                                <div className="category-header">
                                    <div className="category-icon-wrapper">
                                        <span className="category-emoji">{group.icon}</span>
                                    </div>
                                    <div className="category-info">
                                        <h3 className="category-name">{group.category}</h3>
                                        <p className="category-description">{group.description}</p>
                                    </div>
                                </div>
                                <div className="skills-tags-wrap">
                                    {group.skills.map((skill, index) => (
                                        <div key={index} className="skill-glass-tag" style={{ "--brand-color": skill.color }}>
                                            <i className={`${skill.icon} tag-icon`}></i>
                                            <span className="tag-label">{skill.name}</span>
                                            <div className="tag-glow" style={{ background: skill.color }}></div>
                                        </div>
                                    ))}
                                </div>
                                <div className="category-bg-icon">{group.icon}</div>
                                <div className="card-ambient-glow"></div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
