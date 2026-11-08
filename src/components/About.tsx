import React from "react";
import { ABOUT_DATA, HERO_DATA } from "../data/portfolioData";
import CircularProgress from "./CircularProgress";
import francessProfile from "../assets/images/francess_profile.webp";

export const About: React.FC = () => {
    return (
        <section id="about" className="fc-about-section position-relative py-5">
            <div className="container py-4">
                {/* Section Header */}
                <div className="text-center mb-5" data-aos="fade-up">
                    <h2 className="fc-section-title mb-3">{ABOUT_DATA.title}</h2>
                    <p className="fc-section-subtitle mx-auto">
                        {ABOUT_DATA.subtitle}
                    </p>
                </div>

                {/* 2-Column Main Bio Area */}
                <div className="row align-items-center mb-5 pb-4">
                    {/* Left: Arched Frame Portrait */}
                    <div
                        className="col-lg-5 col-12 d-flex justify-content-center mb-4 mb-lg-0"
                        data-aos="fade-right"
                    >
                        <div className="fc-about-frame-wrapper position-relative">
                            <div className="fc-about-accent-glow" aria-hidden="true"></div>
                            <div className="fc-about-arch-mask position-relative overflow-hidden">
                                <img
                                    src={francessProfile}
                                    alt="Francess Cillo - Technical Leadership & Architecture"
                                    width={450}
                                    height={580}
                                    loading="lazy"
                                    className="fc-about-portrait-img w-100 h-100 object-fit-cover"
                                />
                                <div className="fc-about-arch-overlay"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Narrative & CTAs */}
                    <div
                        className="col-lg-7 col-12 ps-lg-5"
                        data-aos="fade-left"
                    >
                        <div className="fc-about-bio-text">
                            <p className="fc-about-lead mb-3">
                                {ABOUT_DATA.paragraphs[0]}
                            </p>
                            <p className="fc-about-p mb-3">
                                Currently building 100% custom PHP WordPress
                                architectures at{" "}
                                <strong className="text-cyan">BeUnique INC</strong>
                                , I specialize in ditching bloated page builders in
                                favor of lean, modular code that satisfies strict
                                Japanese client standards. Beyond writing code, I
                                actively shape how engineering teams build—authoring
                                custom <code className="fc-code-badge">.agent</code>{" "}
                                AI rulesets and automation scripts that keep codebases
                                consistent while cutting development cycles by{" "}
                                <span className="text-cyan fw-bold">40%</span>.
                            </p>
                            <p className="fc-about-p mb-4">
                                Before stepping into pure custom architecture, I
                                progressed from Junior Developer to Department Head
                                in just four months at{" "}
                                <strong className="text-white">
                                    CreativesOnline
                                </strong>
                                , and later served as Production Manager at{" "}
                                <strong className="text-white">CoCreate</strong>
                                —where I led cross-functional dev, design, and QA
                                pods to a{" "}
                                <span className="text-cyan fw-bold">
                                    100% on-time delivery record
                                </span>{" "}
                                while reducing post-launch defect tickets by{" "}
                                <span className="text-cyan fw-bold">35%</span>.
                                Whether you are an employer looking for a disciplined
                                technical lead or a client needing a fast, reliable
                                build, I bring accountability from the first Figma
                                inspection to final deployment.
                            </p>

                            {/* CTAs */}
                            <div className="d-flex flex-wrap align-items-center gap-3 pt-2">
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
                                    aria-label="Download Francess Cillo CV"
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
                        </div>
                    </div>
                </div>

                {/* Core Stack & Proficiency Rings (5-Column Circular Progress Strip) */}
                <div className="fc-skills-section pt-5 border-top border-dark-subtle">
                    <div className="text-center mb-4" data-aos="fade-up">
                        <h3 className="fc-skills-heading text-white mb-2">
                            Core Stack &amp; Technical Proficiency
                        </h3>
                        <p className="fc-skills-sub text-muted">
                            Validated technical capabilities across custom CMS,
                            modern front-end engineering, and workflow automation.
                        </p>
                    </div>

                    <div className="row g-4 justify-content-center pt-3">
                        {ABOUT_DATA.skills.map((skill) => (
                            <div
                                key={skill.id}
                                className="col-lg-2 col-md-4 col-6 d-flex justify-content-center"
                            >
                                <CircularProgress skill={skill} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

