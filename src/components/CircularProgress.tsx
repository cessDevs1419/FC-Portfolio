import React, { useState, useEffect, useRef } from "react";
import type { SkillRing } from "../types/portfolio";

interface CircularProgressProps {
    skill: SkillRing;
    index?: number;
}

const renderSkillIcon = (icon: SkillRing["icon"]) => {
    switch (icon) {
        case "wordpress":
            // Clean WordPress "W" mark — simplified for small-size clarity
            return (
                <svg
                    viewBox="0 0 24 24"
                    width="34"
                    height="34"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0"
                    className="fc-icon-wordpress"
                    aria-hidden="true"
                >
                    <path
                        d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.886 14.932L7.15 8.628h1.514l1.89 5.862 1.46-5.862h1.456l1.46 5.862 1.89-5.862h1.514l-2.964 8.304h-1.456L12 11.604l-1.914 5.328h-1.972z"
                        fill="currentColor"
                    />
                </svg>
            );
        case "code":
            // Clean semantic HTML / Code tag icon
            return (
                <svg
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="fc-icon-code"
                    aria-hidden="true"
                >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                    <line x1="14" y1="4" x2="10" y2="20" />
                </svg>
            );
        case "figma":
            // Official 5-part Figma logo with crisp vector shapes
            return (
                <svg
                    viewBox="0 0 38 57"
                    width="24"
                    height="36"
                    fill="none"
                    className="fc-icon-figma"
                    aria-hidden="true"
                >
                    <path
                        d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"
                        fill="#38BDF8"
                    />
                    <path
                        d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"
                        fill="#38BDF8"
                    />
                    <path
                        d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5z"
                        fill="#38BDF8"
                    />
                    <path
                        d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5z"
                        fill="#38BDF8"
                    />
                    <path
                        d="M19 0h9.5a9.5 9.5 0 1 1 0 19H19V0z"
                        fill="#38BDF8"
                    />
                </svg>
            );
        case "react":
            // React Atom icon with smooth electron orbit animation
            return (
                <svg
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="fc-icon-react"
                    aria-hidden="true"
                >
                    <ellipse
                        cx="12"
                        cy="12"
                        rx="4"
                        ry="10"
                        transform="rotate(30 12 12)"
                    />
                    <ellipse
                        cx="12"
                        cy="12"
                        rx="4"
                        ry="10"
                        transform="rotate(90 12 12)"
                    />
                    <ellipse
                        cx="12"
                        cy="12"
                        rx="4"
                        ry="10"
                        transform="rotate(150 12 12)"
                    />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
            );
        case "ai":
            // AI Sparkles / Automations icon
            return (
                <svg
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="fc-icon-ai"
                    aria-hidden="true"
                >
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    <circle
                        cx="12"
                        cy="12"
                        r="3.5"
                        fill="#38BDF8"
                        fillOpacity="0.4"
                    />
                </svg>
            );
        default:
            return null;
    }
};

export const CircularProgress: React.FC<CircularProgressProps> = ({
    skill,
    index = 0,
}) => {
    const radius = 42;
    const circumference = 2 * Math.PI * radius; // ~263.89

    const containerRef = useRef<HTMLDivElement>(null);
    const [animatedPercentage, setAnimatedPercentage] = useState(0);
    const [currentOffset, setCurrentOffset] = useState(circumference);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const currentRef = containerRef.current;
        if (!currentRef) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.2 },
        );

        observer.observe(currentRef);

        return () => {
            observer.disconnect();
        };
    }, [hasAnimated]);

    useEffect(() => {
        if (!hasAnimated) return;

        let frameId: number;
        // Staggered delay so each skill ring animates in sequence
        const staggerDelay = 150 + (index % 5) * 120;

        const timer = setTimeout(() => {
            const targetPercent = skill.percentage;
            const duration = 1400; // ms
            const startTime = performance.now();

            const animate = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Smooth Quartic ease-out: 1 - (1 - t)^4
                const easeOut = 1 - Math.pow(1 - progress, 4);

                const currentVal = Math.round(targetPercent * easeOut);
                const offset =
                    circumference - (circumference * targetPercent * easeOut) / 100;

                setAnimatedPercentage(currentVal);
                setCurrentOffset(offset);

                if (progress < 1) {
                    frameId = requestAnimationFrame(animate);
                }
            };

            frameId = requestAnimationFrame(animate);
        }, staggerDelay);

        return () => {
            clearTimeout(timer);
            if (frameId) {
                cancelAnimationFrame(frameId);
            }
        };
    }, [hasAnimated, skill.percentage, circumference, index]);

    // When starting at offset=circumference, hide the round cap dot until animation starts
    const isBeginning = currentOffset >= circumference - 0.5;

    return (
        <div
            ref={containerRef}
            className="skill-ring-item d-flex flex-column align-items-center text-center"
            data-aos="fade-up"
            data-aos-delay={index * 100}
        >
            <div className="skill-ring-wrapper position-relative">
                <svg
                    className="skill-ring-svg"
                    width="110"
                    height="110"
                    viewBox="0 0 100 100"
                    aria-hidden="true"
                >
                    {/* Dark Background Track circle */}
                    <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke="#22252C"
                        strokeWidth="7"
                    />
                    {/* Animated Cyan Progress circle moving from 0 to target */}
                    <circle
                        className="skill-ring-progress"
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke="#38BDF8"
                        strokeWidth="7"
                        strokeDasharray={circumference}
                        strokeDashoffset={currentOffset}
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                        style={{
                            opacity: isBeginning ? 0 : 1,
                            transition: "opacity 0.2s ease, filter 0.3s ease",
                        }}
                    />
                </svg>
                {/* Center icon */}
                <div className="skill-ring-center-icon d-flex align-items-center justify-content-center">
                    <span className="text-cyan d-flex align-items-center justify-content-center">
                        {renderSkillIcon(skill.icon)}
                    </span>
                </div>
            </div>

            {/* Animated Filling Percentage & Label */}
            <div className="skill-ring-percent mt-3">
                {animatedPercentage}%
            </div>
            <div className="skill-ring-label mt-1">{skill.label}</div>
        </div>
    );
};

export default CircularProgress;
