import React, { useState } from 'react';
import '../styles/project.css';
import taskmateImg from '../assets/Taskmate.jfif'; // Verify filename

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projectData = [
        {
            title: "TaskMate",
            desc: "To-do app with Kanban, Calendar, Notes, Weekly Schedule, and authentication.",
            features: [
                "Role-based authentication (Admin & Staff)",
                "Cart & transaction system", // Note: This feature list seems copied from the POS app description in project.js, but the HTML says TaskMate. I will keep it consistent with what was in the original js file for the first item if it matches, but the HTML shows 3 TaskMates. I will stick to the logic in project.js or the HTML. 
                // Wait, project.js had "POS Laravel App" but index.html had "TaskMate" repeated 3 times.
                // The HTML structure suggests static content for the list, but dynamic modal content.
                // I will use a hybrid approach: Map over an array of projects to generate the list and use the same array for the modal.
            ],
            tech: ["Laravel", "MySQL", "AJAX"],
            github: "https://github.com/GafanKall/taskmate-laravel.git",
            image: taskmateImg
        },
        {
            title: "TaskMate 2",
            desc: "To-do app with Kanban, Calendar, Notes, Weekly Schedule, and authentication.",
            features: [
                "Feature 1",
                "Feature 2"
            ],
            tech: ["Laravel", "MySQL", "AJAX"],
            github: "#",
            image: taskmateImg
        },
        {
            title: "TaskMate 3",
            desc: "To-do app with Kanban, Calendar, Notes, Weekly Schedule, and authentication.",
            features: [
                "Feature A",
                "Feature B"
            ],
            tech: ["Laravel", "MySQL", "AJAX"],
            github: "#",
            image: taskmateImg
        }
    ];

    // Aligning with project.js content which seemed to have "POS Laravel App"
    // But since the HTML had 3 TaskMates, I will stick to what the user sees in the HTML for init.
    // However, I should probably include the POS app from project.js if it was intended to be there. 
    // Given the HTML is the source of truth for the *current* display, I will keep the component generic.

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <section id="project" className="section project">
            <div className="section-inner">

                <div className="section-title">
                    <h2>My <span>Projects</span></h2>
                    <p>Some things I’ve built</p>
                </div>

                <div className="project-list">
                    {projectData.map((project, index) => (
                        <div className="project-item" key={index} onClick={() => openModal(project)}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>

                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.desc}</p>

                                <div className="project-tech">
                                    {project.tech.map((tech, i) => (
                                        <span key={i}>{tech}</span>
                                    ))}
                                </div>

                                <div className="project-action">
                                    <a href={project.github} className="btn-outline" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>Github</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {selectedProject && (
                <div id="projectModal" className="project-modal" style={{ display: 'flex' }}>
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2 id="modalTitle">{selectedProject.title}</h2>
                        <p id="modalDesc">{selectedProject.desc}</p>
                        <ul id="modalFeature">
                            {selectedProject.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
