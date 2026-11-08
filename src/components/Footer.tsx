import React from "react";
import Logo from "./Logo";
import { FOOTER_DATA, HERO_DATA } from "../data/portfolioData";

export const Footer: React.FC = () => {
    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        targetId: string,
    ) => {
        e.preventDefault();
        const el = document.querySelector(targetId);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="fc-footer position-relative pt-5 pb-4 border-top border-dark-subtle">
            <div className="container">
                <div className="d-flex flex-column align-items-center text-center">
                    {/* Brand Logo */}
                    <div className="mb-4">
                        <Logo size="lg" />
                    </div>

                    {/* Quick Navigation Links */}
                    <ul className="fc-footer-links d-flex flex-wrap justify-content-center gap-4 p-0 mb-4 list-unstyled">
                        {FOOTER_DATA.quickLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={(e) =>
                                        handleNavClick(e, link.href)
                                    }
                                    className="fc-footer-link text-decoration-none"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Social Media Links */}
                    <div className="d-flex align-items-center gap-3 mb-4">
                        {HERO_DATA.socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target={
                                    social.icon === "email" ? "_self" : "_blank"
                                }
                                rel="noreferrer"
                                className="fc-social-circle d-flex align-items-center justify-content-center"
                                aria-label={`Francess Cillo ${social.name}`}
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

                    {/* Direct Contact Bar */}
                    <div className="fc-direct-contact-bar d-flex flex-wrap justify-content-center align-items-center gap-3 gap-md-4 py-3 px-4 rounded-pill mb-4">
                        <a
                            href={`mailto:${FOOTER_DATA.contact.email}`}
                            className="fc-contact-pill-item text-decoration-none d-inline-flex align-items-center gap-2"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                width="16"
                                height="16"
                                fill="none"
                                stroke="#38BDF8"
                                strokeWidth="2"
                                aria-hidden="true"
                            >
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            <span>{FOOTER_DATA.contact.email}</span>
                        </a>

                        <span className="fc-contact-pill-sep d-none d-md-inline text-muted">
                            •
                        </span>

                        <a
                            href={`tel:${FOOTER_DATA.contact.phone.replace(/\s+/g, "")}`}
                            className="fc-contact-pill-item text-decoration-none d-inline-flex align-items-center gap-2"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                width="16"
                                height="16"
                                fill="none"
                                stroke="#38BDF8"
                                strokeWidth="2"
                                aria-hidden="true"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <span>{FOOTER_DATA.contact.phone}</span>
                        </a>

                        <span className="fc-contact-pill-sep d-none d-md-inline text-muted">
                            •
                        </span>

                        <div className="fc-contact-pill-item d-inline-flex align-items-center gap-2 ">
                            <svg
                                viewBox="0 0 24 24"
                                width="16"
                                height="16"
                                fill="none"
                                stroke="#38BDF8"
                                strokeWidth="2"
                                aria-hidden="true"
                            >
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span>{FOOTER_DATA.contact.location}</span>
                        </div>
                    </div>

                    {/* Copyright */}
                    <p className="fc-copyright mb-0">
                        {FOOTER_DATA.copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

