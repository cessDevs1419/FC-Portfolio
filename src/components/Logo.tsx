import React from "react";

interface LogoProps {
    className?: string;
    size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
    const dimensions = {
        sm: { width: 42, height: 26, fontSize: 24 },
        md: { width: 56, height: 35, fontSize: 32 },
        lg: { width: 72, height: 45, fontSize: 40 },
    }[size];

    return (
        <a
            href="#home"
            className={`fc-logo-link inline-flex items-center text-decoration-none select-none ${className}`}
            aria-label="Francess Cillo Home"
        >
            <span
                style={{
                    fontFamily:
                        "'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
                    fontWeight: 800,
                    fontSize: `${dimensions.fontSize}px`,
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    display: "inline-flex",
                    alignItems: "center",
                }}
            >
                <span
                    style={{
                        color: "#4A5568",
                        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))",
                    }}
                >
                    F
                </span>
                <span
                    style={{
                        color: "#38BDF8",
                        filter: "drop-shadow(0 2px 6px rgba(56,189,248,0.4))",
                    }}
                >
                    C
                </span>
            </span>
        </a>
    );
};

export default Logo;

