import React from "react";

interface ContainerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    parent_className?: string;
    child_className?: string;
    container_id?: string;
}

const Container: React.FC<ContainerProps> = ({
    children,
    parent_className,
    child_className,
    container_id,
}) => {
    return (
        <div
            id={container_id}
            className={`parent-container container-fluid ${parent_className || ""}`}
        >
            <div
                className={`child-container container-lg p-0 ${child_className || ""}`}
            >
                {children}
            </div>
        </div>
    );
};

export default Container;
