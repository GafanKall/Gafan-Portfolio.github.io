import React from 'react';
import '../styles/skill.css';

const Skills = () => {
    // Duplicate the icons for infinite scroll effect as per original HTML
    const skills = [
        "devicon-php-plain colored",
        "devicon-javascript-plain colored",
        "devicon-dart-plain colored",
        "devicon-laravel-plain colored",
        "devicon-flutter-plain colored",
        "devicon-react-plain colored",
        "devicon-python-plain colored",
        "devicon-mysql-plain colored",
        "devicon-postgresql-plain colored"
    ];

    return (
        <section id="skill" className="skills">
            <div className="skills-container">
                <div className="skills-header">
                    <h2>My <span>Skills</span></h2>
                    <p>Technologies I work with</p>
                </div>

                <div className="slider">
                    <div className="slide-track">
                        {skills.map((skill, index) => (
                            <div className="slide" key={`original-${index}`}>
                                <i className={skill}></i>
                            </div>
                        ))}
                        {/* Duplicate for infinite scroll */}
                        {skills.map((skill, index) => (
                            <div className="slide" key={`duplicate-${index}`}>
                                <i className={skill}></i>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
