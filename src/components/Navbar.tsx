import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { NAV_LINKS } from "../data/portfolioData";

export const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Determine active section
            const sections = ["home", "services", "about", "portfolio", "contact"];
            const scrollPos = window.scrollY + 200;

            for (const sectionId of sections) {
                const el = document.getElementById(sectionId);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPos >= top && scrollPos < top + height) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        targetId: string,
    ) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header
            className={`fc-navbar-header fixed-top ${
                scrolled ? "fc-navbar-scrolled" : ""
            }`}
        >
            <div className="container">
                <nav
                    className="fc-navbar d-flex align-items-center justify-content-between py-3"
                    aria-label="Main Navigation"
                >
                    {/* Brand Logo */}
                    <div className="fc-navbar-brand">
                        <Logo size="md" />
                    </div>

                    {/* Desktop Navigation Links */}
                    <ul className="fc-nav-menu d-none d-lg-flex align-items-center gap-4 m-0 p-0 list-unstyled">
                        {NAV_LINKS.map((link) => {
                            const sectionId = link.href.replace("#", "");
                            const isActive = activeSection === sectionId;
                            return (
                                <li key={link.name} className="fc-nav-item">
                                    <a
                                        href={link.href}
                                        onClick={(e) =>
                                            handleNavClick(e, link.href)
                                        }
                                        className={`fc-nav-link text-decoration-none ${
                                            isActive ? "fc-nav-link-active" : ""
                                        }`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Desktop Right CTA */}
                    <div className="d-none d-lg-block">
                        <a
                            href="mailto:francess@gmail.com?subject=Hire%20Inquiry%20—%20Francess%20Cillo"
                            className="fc-btn-primary fc-btn-sm text-decoration-none"
                            id="navbar-hire-me"
                        >
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        type="button"
                        className={`fc-menu-toggle d-lg-none bg-transparent border-0 p-2 ${
                            mobileMenuOpen ? "fc-menu-open" : ""
                        }`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        <span className="fc-hamburger-bar"></span>
                        <span className="fc-hamburger-bar"></span>
                        <span className="fc-hamburger-bar"></span>
                    </button>
                </nav>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`fc-mobile-drawer d-lg-none ${
                    mobileMenuOpen ? "fc-drawer-open" : ""
                }`}
            >
                <div className="container py-4">
                    <ul className="list-unstyled d-flex flex-column gap-3 m-0 p-0">
                        {NAV_LINKS.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={(e) =>
                                        handleNavClick(e, link.href)
                                    }
                                    className="fc-mobile-nav-link text-decoration-none"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="pt-4 border-top border-dark-subtle mt-3">
                        <a
                            href="mailto:francess@gmail.com?subject=Hire%20Inquiry%20—%20Francess%20Cillo"
                            className="fc-btn-primary w-100 text-center d-block text-decoration-none"
                        >
                            Hire Me
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

