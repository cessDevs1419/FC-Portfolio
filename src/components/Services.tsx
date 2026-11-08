import React from "react";
import { SERVICES_DATA } from "../data/portfolioData";
import type { Service } from "../types/portfolio";

const renderServiceIcon = (iconType: Service["icon"]) => {
    switch (iconType) {
        case "wordpress":
            // Bespoke WordPress & Code Architecture Icon
            return (
                <svg
                    viewBox="0 0 24 24"
                    width="36"
                    height="36"
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                    <line x1="12" y1="2" x2="12" y2="22" strokeDasharray="2 2" />
                </svg>
            );
        case "frontend":
            // Front-End & UI Engineering (Layers & Component)
            return (
                <svg
                    viewBox="0 0 24 24"
                    width="36"
                    height="36"
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                    <circle cx="6" cy="7" r="1" fill="#38BDF8" />
                    <circle cx="10" cy="7" r="1" fill="#38BDF8" />
                </svg>
            );
        case "shopify":
            // Shopify & E-Commerce Cart/Storefront
            return (
                <svg
                    viewBox="0 0 24 24"
                    width="36"
                    height="36"
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
            );
        case "ai":
            // AI Dev Workflows (Sparkles & Neural Chips)
            return (
                <svg
                    viewBox="0 0 24 24"
                    width="36"
                    height="36"
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            );
        case "qa":
            // Figma-to-Code QA & Strict Auditing
            return (
                <svg
                    viewBox="0 0 24 24"
                    width="36"
                    height="36"
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                </svg>
            );
        case "seo":
            // Technical SEO & Core Web Vitals Optimization
            return (
                <svg
                    viewBox="0 0 24 24"
                    width="36"
                    height="36"
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
            );
        case "marketing":
            // GA4, GTM & Klaviyo Marketing Integration
            return (
                <svg
                    viewBox="0 0 24 24"
                    width="36"
                    height="36"
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    <circle cx="12" cy="12" r="1" fill="#38BDF8" />
                </svg>
            );
        default:
            return null;
    }
};

export const Services: React.FC = () => {
    return (
        <section id="services" className="fc-services-section position-relative py-5">
            <div className="container py-4">
                {/* Section Header */}
                <div className="text-center mb-5" data-aos="fade-up">
                    <h2 className="fc-section-title mb-3">
                        {SERVICES_DATA.title}
                    </h2>
                    <p className="fc-section-subtitle mx-auto">
                        {SERVICES_DATA.subtitle}
                    </p>
                </div>

                {/* 6-Card Grid */}
                <div className="row g-4">
                    {SERVICES_DATA.services.map((service, index) => (
                        <div
                            key={service.id}
                            className="col-lg-4 col-md-6 col-12"
                            data-aos="fade-up"
                            data-aos-delay={(index % 3) * 100}
                        >
                            <div className="fc-service-card d-flex flex-column h-100 p-4 p-md-4">
                                {/* Service Icon */}
                                <div className="fc-service-icon-box mb-4 d-inline-flex align-items-center justify-content-center">
                                    {renderServiceIcon(service.icon)}
                                </div>

                                {/* Title */}
                                <h3 className="fc-service-title mb-3">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="fc-service-desc mb-0 flex-grow-1">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
