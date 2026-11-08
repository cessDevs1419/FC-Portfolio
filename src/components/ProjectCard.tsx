import React from "react";
import type { Project } from "../types/portfolio";

interface ProjectCardProps {
    project: Project;
    index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
    // Determine whether to use eager loading for top 2 items, lazy for below the fold
    const isBelowTheFold = index >= 2;

    return (
        <article
            className="fc-project-card d-flex flex-column h-100"
            data-aos="fade-up"
            data-aos-delay={(index % 3) * 100}
        >
            {/* Card Media Preview */}
            <div className="fc-project-media-wrapper position-relative overflow-hidden">
                <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    width={project.imageWidth}
                    height={project.imageHeight}
                    loading={isBelowTheFold ? "lazy" : "eager"}
                    decoding="async"
                    className="fc-project-img w-100 h-100 object-fit-cover"
                />
                <div className="fc-project-overlay d-flex align-items-center justify-content-center">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fc-project-overlay-btn"
                            aria-label={`View live site for ${project.title}`}
                        >
                            <span>View Live</span>
                            <svg
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                        </a>
                    )}
                    {project.githubUrl && !project.liveUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fc-project-overlay-btn"
                            aria-label={`View repository for ${project.title}`}
                        >
                            <span>View Code</span>
                            <svg
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>

            {/* Card Content */}
            <div className="fc-project-body d-flex flex-column flex-grow-1 p-4">
                {/* Category & Metrics Tag */}
                <div className="d-flex align-items-center justify-content-between mb-2 flex-wrap gap-2">
                    <span className="fc-project-category-badge">
                        {project.category}
                    </span>
                    {project.metrics && (
                        <span className="fc-project-metrics-badge">
                            {project.metrics}
                        </span>
                    )}
                </div>

                {/* Title */}
                <h3 className="fc-project-title mb-2">{project.title}</h3>

                {/* Description */}
                <p className="fc-project-desc mb-4 flex-grow-1">
                    {project.description}
                </p>

                {/* Tech Tags & Action */}
                <div className="fc-project-footer d-flex align-items-center justify-content-between pt-3 border-top border-dark-subtle flex-wrap gap-2">
                    <div className="fc-project-tags d-flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                            <span key={tech} className="fc-tech-pill">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fc-project-link d-inline-flex align-items-center gap-1"
                            aria-label={`Visit live build for ${project.title}`}
                        >
                            <span>Live Build</span>
                            <svg
                                viewBox="0 0 24 24"
                                width="14"
                                height="14"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <line x1="7" y1="17" x2="17" y2="7" />
                                <polyline points="7 7 17 7 17 17" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
