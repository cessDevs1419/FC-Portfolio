import React from "react";
import { HERO_DATA } from "../data/portfolioData";
import francessProfile from "../assets/images/francess_profile.webp";

export const Hero: React.FC = () => {
    return (
        <section id="home" className="fc-hero-section position-relative overflow-hidden">
            {/* Background ambient lighting */}
            <div className="fc-ambient-glow fc-hero-glow" aria-hidden="true"></div>

            <div className="container position-relative z-1">
                <div className="row align-items-center min-vh-100 pt-5 pb-5">
                    {/* Left Column: Copy, CTAs, Metrics */}
                    <div className="col-lg-7 col-12 order-2 order-lg-1 pt-4 pt-lg-0">
                        {/* Intro Tag */}
                        <div
                            className="fc-hero-tag mb-2 d-inline-block"
                            data-aos="fade-down"
                        >
                            <span>{HERO_DATA.introTag}</span>
                        </div>

                        {/* Name */}
                        <div
                            className="fc-hero-name mb-2"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            {HERO_DATA.name}
                        </div>

                        {/* Main Headline H1 */}
                        <h1
                            className="fc-hero-title mb-4"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            {HERO_DATA.headlineStart}
                            <span className="text-cyan">
                                {HERO_DATA.headlineAccent}
                            </span>
                        </h1>

                        {/* Sub-headline */}
                        <p
                            className="fc-hero-subheadline mb-4"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            {HERO_DATA.subheadline}
                        </p>

                        {/* Social Links */}
                        <div
                            className="fc-hero-socials d-flex align-items-center gap-3 mb-4"
                            data-aos="fade-up"
                            data-aos-delay="350"
                        >
                            {HERO_DATA.socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target={
                                        social.icon === "email"
                                            ? "_self"
                                            : "_blank"
                                    }
                                    rel="noreferrer"
                                    className="fc-social-circle d-flex align-items-center justify-content-center"
                                    aria-label={`Francess Cillo on ${social.name}`}
                                >
                                    {social.icon === "github" && (
                                        <svg
                                            viewBox="0 0 24 24"
                                            width="18"
                                            height="18"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    )}
                                    {social.icon === "linkedin" && (
                                        <svg
                                            viewBox="0 0 24 24"
                                            width="18"
                                            height="18"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    )}
                                    {social.icon === "email" && (
                                        <svg
                                            viewBox="0 0 24 24"
                                            width="18"
                                            height="18"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 8.139h-18.893l5.627-8.134zm9.201-1.259l4.623-3.746v9.458l-4.623-5.712z" />
                                        </svg>
                                    )}
                                </a>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div
                            className="fc-hero-actions d-flex flex-wrap align-items-center gap-3 mb-5"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <a
                                href="mailto:francess@gmail.com?subject=Hire%20Inquiry%20—%20Francess%20Cillo"
                                className="fc-btn-primary text-decoration-none"
                            >
                                Hire Me
                            </a>
                            <a
                                href={HERO_DATA.resumeUrl}
                                download={HERO_DATA.resumeFilename}
                                className="fc-btn-secondary text-decoration-none d-inline-flex align-items-center gap-2"
                                aria-label="Download Francess Cillo 2026 CV"
                            >
                                <span>Download CV</span>
                                <svg
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                            </a>
                        </div>

                        {/* Key Metrics Strip (3-Column Box) */}
                        <div
                            className="fc-metrics-box p-3 p-md-4"
                            data-aos="fade-up"
                            data-aos-delay="450"
                        >
                            <div className="row g-3 g-md-0">
                                {HERO_DATA.metrics.map((metric, idx) => (
                                    <div
                                        key={metric.id}
                                        className={`col-md-4 col-12 d-flex flex-column align-items-center text-center px-2 ${
                                            idx > 0 ? "fc-metric-divider" : ""
                                        }`}
                                    >
                                        <div className="fc-metric-value text-cyan mb-1">
                                            {metric.value}
                                        </div>
                                        <div className="fc-metric-label">
                                            {metric.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Hero Visual Frame */}
                    <div
                        className="col-lg-5 col-12 order-1 order-lg-2 d-flex justify-content-center align-items-center mb-4 mb-lg-0"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        <div className="fc-hero-frame-container position-relative">
                            {/* Outer Cyan Accent Glow Ring */}
                            <div className="fc-hero-accent-ring" aria-hidden="true"></div>

                            {/* Inner Circle Frame with Portrait */}
                            <div className="fc-hero-circle-mask overflow-hidden position-relative">
                                <img
                                    src={francessProfile}
                                    alt="Francess Cillo - Technical Delivery Specialist"
                                    width={500}
                                    height={500}
                                    loading="eager"
                                    className="fc-hero-portrait-img w-100 h-100 object-fit-cover"
                                />
                                <div className="fc-hero-portrait-overlay"></div>
                            </div>

                            {/* Subtle floating tech badge */}
                            <div className="fc-hero-badge position-absolute d-flex align-items-center gap-2">
                                <span className="fc-pulse-dot"></span>
                                <span className="fc-badge-text">100% Custom Architecture</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

