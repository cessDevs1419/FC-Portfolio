import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
    return (
        <button {...props} className={`${className || ""} rounded-3`}>
            {children}
        </button>
    );
};

export default Button;
