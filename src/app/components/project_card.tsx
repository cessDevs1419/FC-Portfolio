import React from "react";
// 1. Import your interface (use 'type' if your TS settings require it)
import { type projects } from "../../app/model/projects";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    container_id?: string;
    // 2. Assign the project interface to the 'value' prop
    value: projects;
}

const ProjectCard: React.FC<CardProps> = ({
    className,
    container_id,
    value,
    ...props
}) => {
    return (
        <div
            {...props}
            id={container_id}
            className={`project-card-container rounded-3 border ${className || ""}`}
        >
            {/* 3. Use the 'value' prop to display data */}
            <div className="card-content">
                <h3 className="font-sub">{value.name}</h3>
                <p className="font-paragraph mb-2">{value.description}</p>

                {value.link && (
                    <a
                        href={value.link || "#"}
                        target="_blank"
                        className={`btn btn-primary view mb-4 ${!value.link ? "invisible" : ""}`}
                    >
                        View Live Site
                    </a>
                )}

                <div className="d-flex justify-content start gap-3">
                    {value.tech?.map((item) => (
                        <span
                            key={item}
                            className="tech-badge font-paragraph rounded-3 border"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
