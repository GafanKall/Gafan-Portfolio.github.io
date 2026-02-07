import React from 'react';
import '../styles/experience.css';

const Experience = () => {
    return (
        <section id="experience" className="section experience">
            <div className="section-inner">

                <div className="section-title">
                    <h2>Education & <span>Experience</span></h2>
                    <p>My learning journey</p>
                </div>

                <div className="timeline">

                    <div className="timeline-item">
                        <span className="dot"></span>
                        <div className="content">
                            <h3>SMK Taruna Bhakti Student – Software Engineering</h3>
                            <small>2022 – 2025</small>
                            <p>
                                Learning web development, mobile development, <br /> database systems,
                                UI/UX design, and game development.
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <span className="dot"></span>
                        <div className="content">
                            <h3>Internship at PT. Bangun Kreatif Abadi – Fullstack Web Developer</h3>
                            <small>Sep 2024 – Jan 2025</small>
                            <p>
                                Working as Fullstack Web Developer using NextJS, NestJS, and PostgreSQL.
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <span className="dot"></span>
                        <div className="content">
                            <h3>UBSI Student – Informatics</h3>
                            <small>2025 – Now</small>
                            <p>
                                Learning web development, database systems,
                                Laravel, and UI/UX design.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Experience;
