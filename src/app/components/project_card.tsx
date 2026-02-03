import React from "react";
import { type projects } from "../../app/model/projects";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    container_id?: string;
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
            <div className="card-content row">
                <div className="col-12 col-md-7 mb-3 mb-md-0">
                    <h3 className="title-card font-sub">{value.name}</h3>
                    <p className="font-paragraph mb-2">{value.description}</p>
                    {value.link && (
                        <a
                            href={value.link || "#"}
                            target="_blank"
                            className={`btn btn-primary view mb-4`}
                        >
                            View Live Site
                        </a>
                    )}
                    <div className="border w-100 mb-3"></div>
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
                <div className="col-12 col-md-5 page-scroll">
                    {value.images?.map((items) => (
                        <img src={items} alt={items} width="200" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
