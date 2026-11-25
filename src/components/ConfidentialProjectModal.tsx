import React, { useEffect } from "react";
import type { Project } from "../types/portfolio";

interface ConfidentialProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export const ConfidentialProjectModal: React.FC<ConfidentialProjectModalProps> = ({
    project,
    onClose,
}) => {
    useEffect(() => {
        if (!project) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [project, onClose]);

    if (!project) return null;

    return (
        <div
            className="fc-modal-backdrop"
            role="dialog"
            aria-modal="true"
            aria-labelledby="fc-confidential-modal-title"
            onClick={onClose}
        >
            <div
                className="fc-modal-dialog"
                onClick={(event) => event.stopPropagation()}
            >
                {/* Modal Header */}
                <div className="fc-modal-header d-flex align-items-start justify-content-between gap-3">
                    <div>
                        <span className="fc-confidential-pill d-inline-flex align-items-center gap-2 mb-2">
                            <svg
                                viewBox="0 0 24 24"
                                width="13"
                                height="13"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                            <span>
                                {project.confidentialLabel ||
                                    "Project under Company Confidential"}
                            </span>
                        </span>
                        <h3
                            id="fc-confidential-modal-title"
                            className="fc-modal-title m-0"
                        >
                            {project.title}
                        </h3>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="fc-modal-close-btn"
                        aria-label="Close project brief"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Modal Body */}
                <div className="fc-modal-body">
                    <div className="fc-modal-notice mb-4">
                        <p className="m-0">
                            Live production URLs and client-facing interface
                            screenshots for this engagement are withheld under
                            company NDA. Below is a technical summary of the
                            architecture and engineering deliverables.
                        </p>
                    </div>

                    <p className="fc-modal-desc mb-4">
                        {project.longDescription || project.description}
                    </p>

                    {project.architectureHighlights &&
                        project.architectureHighlights.length > 0 && (
                            <div className="mb-4">
                                <h4 className="fc-modal-subheading mb-3">
                                    Key Engineering Deliverables
                                </h4>
                                <ul className="fc-modal-list list-unstyled m-0 p-0 d-flex flex-column gap-2">
                                    {project.architectureHighlights.map((item) => (
                                        <li
                                            key={item}
                                            className="d-flex align-items-start gap-2"
                                        >
                                            <span
                                                className="fc-modal-bullet"
                                                aria-hidden="true"
                                            >
                                                ▸
                                            </span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                    <div className="d-flex flex-wrap gap-2 pt-2">
                        {project.techStack.map((tech) => (
                            <span key={tech} className="fc-tech-pill">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Modal Footer */}
                <div className="fc-modal-footer d-flex flex-wrap align-items-center justify-content-between gap-3">
                    {project.metrics ? (
                        <span className="fc-modal-metrics">{project.metrics}</span>
                    ) : (
                        <span />
                    )}
                    <button
                        type="button"
                        onClick={onClose}
                        className="fc-btn-primary fc-btn-sm border-0"
                    >
                        Close Brief
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfidentialProjectModal;

