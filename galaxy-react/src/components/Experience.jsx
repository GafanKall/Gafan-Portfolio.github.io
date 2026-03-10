import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import '../styles/experience.css';

const Experience = () => {
    const timelineData = [
        {
            type: 'education',
            title: "SMK Taruna Bhakti Student",
            subtitle: "Software Engineering",
            duration: "2022 – 2025",
            desc: "Learning web development, mobile development, database systems, UI/UX design, and game development.",
            icon: <GraduationCap size={20} />
        },
        {
            type: 'experience',
            title: "Internship at PT. Bangun Kreatif Abadi",
            subtitle: "Fullstack Web Developer",
            duration: "Sep 2024 – Jan 2025",
            desc: "Worked as Fullstack Web Developer using NextJS, NestJS, and PostgreSQL.",
            icon: <Briefcase size={20} />
        },
        {
            type: 'education',
            title: "UBSI Student",
            subtitle: "Informatics",
            duration: "2025 – Now",
            desc: "Learning advanced web development, database systems, Laravel, and UI/UX design.",
            icon: <GraduationCap size={20} />
        }
    ];

    return (
        <section id="experience" className="section-padding">
            <div className="container">
                <div className="section-header">
                    <span className="subtitle">Journey</span>
                    <h2 className="title">Education & <span>Experience</span></h2>
                </div>

                <div className="timeline-container">
                    {timelineData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="timeline-item-new"
                        >
                            <div className="timeline-icon glass">
                                {item.icon}
                            </div>
                            <SpotlightCard className="timeline-content glass" spotlightColor="rgba(168, 85, 247, 0.2)">
                                <div className="timeline-header">
                                    <span className="timeline-duration">
                                        <Calendar size={14} /> {item.duration}
                                    </span>
                                </div>
                                <h3>{item.title}</h3>
                                <p className="timeline-subtitle">{item.subtitle}</p>
                                <p className="timeline-desc">{item.desc}</p>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
