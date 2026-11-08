import React, { useState, useMemo } from "react";
import { PROJECT_CATEGORIES, PROJECTS_DATA } from "../data/portfolioData";
import type { ProjectCategory } from "../types/portfolio";
import ProjectCard from "./ProjectCard";

export const Portfolio: React.FC = () => {
    const [activeCategory, setActiveCategory] =
        useState<ProjectCategory>("All");

    // Dynamic filtering using useMemo for optimal performance
    const filteredProjects = useMemo(() => {
        if (activeCategory === "All") {
            return PROJECTS_DATA;
        }
        return PROJECTS_DATA.filter(
            (project) => project.category === activeCategory,
        );
    }, [activeCategory]);

    // Calculate item counts for category tabs
    const categoryCounts = useMemo(() => {
        const counts: Record<string, number> = { All: PROJECTS_DATA.length };
        for (const cat of PROJECT_CATEGORIES) {
            if (cat !== "All") {
                counts[cat] = PROJECTS_DATA.filter(
                    (p) => p.category === cat,
                ).length;
            }
        }
        return counts;
    }, []);

    return (
        <section id="portfolio" className="fc-portfolio-section position-relative py-5">
            <div className="container py-4">
                {/* Section Header */}
                <div className="text-center mb-5" data-aos="fade-up">
                    <h2 className="fc-section-title mb-3">Portfolio</h2>
                    <p className="fc-section-subtitle mx-auto">
                        Explore custom-built WordPress architectures, front-end
                        web applications, and high-conversion e-commerce storefronts.
                    </p>
                </div>

                {/* Filter Tabs Strip */}
                <div
                    className="fc-portfolio-tabs d-flex flex-wrap justify-content-center gap-2 mb-5"
                    data-aos="fade-up"
                    role="tablist"
                    aria-label="Filter portfolio categories"
                >
                    {PROJECT_CATEGORIES.map((category) => {
                        const isActive = activeCategory === category;
                        const count = categoryCounts[category] || 0;
                        return (
                            <button
                                key={category}
                                type="button"
                                role="tab"
                                aria-selected={isActive}
                                onClick={() => setActiveCategory(category)}
                                className={`fc-filter-pill ${
                                    isActive ? "fc-filter-pill-active" : ""
                                }`}
                            >
                                <span>{category}</span>
                                <span className="fc-filter-count">({count})</span>
                            </button>
                        );
                    })}
                </div>

                {/* Dynamic Projects Grid */}
                <div className="row g-4 fc-projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="col-lg-4 col-md-6 col-12"
                        >
                            <ProjectCard project={project} index={index} />
                        </div>
                    ))}
                </div>

                {/* Empty State Guard */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-5">
                        <p className="text-muted">
                            No projects found in this category yet.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Portfolio;
