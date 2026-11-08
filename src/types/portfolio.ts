export type ProjectCategory =
    | "All"
    | "Custom WordPress"
    | "Front-End Apps"
    | "E-Commerce"
    | "UI/UX & Concepts";

export type ProjectFilterCategory = ProjectCategory;

export interface Project {
    id: string;
    title: string;
    category: Exclude<ProjectCategory, "All">;
    description: string;
    longDescription?: string;
    techStack: string[];
    image: string;
    imageWidth: number;
    imageHeight: number;
    liveUrl?: string;
    githubUrl?: string;
    featured?: boolean;
    metrics?: string;
}

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: "wordpress" | "frontend" | "shopify" | "ai" | "qa" | "seo" | "marketing";
}

export interface SkillRing {
    id: string;
    percentage: number;
    label: string;
    icon: "wordpress" | "code" | "figma" | "react" | "ai";
}

export interface MetricItem {
    id: string;
    value: string;
    label: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: "github" | "linkedin" | "email";
}

export type InquiryType =
    | "Full-Time / Contract Web Developer Role"
    | "Custom WordPress Theme Development"
    | "Front-End Engineering (React / JS)"
    | "Shopify / WooCommerce Storefront"
    | "Website Speed, SEO & QA Audit";

export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    inquiryType: InquiryType | "";
    timeline: string;
    details: string;
}

