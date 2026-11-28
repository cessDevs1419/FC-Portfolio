import type {
    Project,
    Service,
    SkillRing,
    MetricItem,
    SocialLink,
    InquiryType,
    ProjectCategory,
} from "../types/portfolio";

// Card-optimized WebP images
import confidentialFcImg from "../assets/images/cards/confidential-fc.webp";
import cocreateImg from "../assets/images/cards/cocreate.webp";
import lightbulbImg from "../assets/images/cards/lightbulb.webp";
import phixelsImg from "../assets/images/cards/phixels.webp";
import majesticImg from "../assets/images/cards/majestic.webp";
import datonImg from "../assets/images/cards/Daton.webp";
import brnddealsImg from "../assets/images/cards/brnddeals.webp";
import portfolioImg from "../assets/images/cards/lappeev1-land.webp";
import quezonImg from "../assets/images/cards/Quezon.webp";
import osamImg from "../assets/images/cards/Osam.webp";
import maharlikaImg from "../assets/images/cards/maharlika.webp";
import apexImg from "../assets/images/cards/apex.webp";

export interface NavLink {
    name: string;
    href: string;
}

export const NAV_LINKS: NavLink[] = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Me", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
];

export const HERO_DATA = {
    introTag: "Hi, I am",
    name: "Francess Cillo",
    headlineStart: "Web Developer & ",
    headlineAccent: "Technical Delivery Specialist",
    subheadline:
        "I engineer 100% custom, bloat-free WordPress themes and high-converting front-end architectures that load in under 3 seconds—built with pixel-level Figma precision and AI-accelerated workflows.",
    resumeUrl: "/Francess_Cillo_2026_Resume.pdf",
    resumeFilename: "Francess_Cillo_2026_Resume.pdf",
    socialLinks: [
        {
            name: "GitHub",
            url: "https://github.com/cessDevs1419",
            icon: "github",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/francess-cillo-177b8a29a/",
            icon: "linkedin",
        },
        {
            name: "Email",
            url: "mailto:francess@gmail.com",
            icon: "email",
        },
    ] as SocialLink[],
    metrics: [
        {
            id: "m1",
            value: "3+ Years",
            label: "Engineering & Delivery Experience",
        },
        {
            id: "m2",
            value: "40% Faster",
            label: "Dev Cycles via Custom AI Rules",
        },
        {
            id: "m3",
            value: "100%",
            label: "On-Time Project Delivery Rate",
        },
    ] as MetricItem[],
};

export const SERVICES_DATA: {
    title: string;
    subtitle: string;
    services: Service[];
} = {
    title: "Services",
    subtitle:
        "End-to-end web engineering, technical leadership, and performance optimization tailored for ambitious brands and engineering teams.",
    services: [
        {
            id: "srv-wp",
            title: "Custom WordPress Architecture",
            description:
                "100% bespoke PHP themes, custom hooks, and modular structures built completely from scratch—zero heavy page builders—ensuring sub-3-to-4-second load times and top Core Web Vitals.",
            icon: "wordpress",
        },
        {
            id: "srv-fe",
            title: "Front-End & UI Engineering",
            description:
                "Translating complex Figma design systems into clean, semantic, responsive interfaces using modern JavaScript (ES6+), Vue.js, React, SCSS, and Tailwind CSS.",
            icon: "frontend",
        },
        {
            id: "srv-ecom",
            title: "Shopify & E-Commerce Solutions",
            description:
                "Custom Shopify Liquid storefronts and tailored WooCommerce builds engineered for seamless checkout flows, custom product logic, and scalable performance.",
            icon: "shopify",
        },
        {
            id: "srv-ai",
            title: "AI-Accelerated Dev Workflows",
            description:
                "Writing and maintaining custom .agent rulesets, prompt engineering pipelines, and reusable component boilerplates that enforce coding standards and cut build times by up to 40%.",
            icon: "ai",
        },
        {
            id: "srv-qa",
            title: "Pixel-Perfect Figma-to-Code QA",
            description:
                "Rigorous cross-browser and multi-device quality assurance audits that eliminate UI defects, tighten responsive breakpoints, and meet strict international design standards.",
            icon: "qa",
        },
        {
            id: "srv-seo",
            title: "Technical SEO & Speed Optimization",
            description:
                "Comprehensive Core Web Vitals tuning, caching setups, schema markup, and All-in-One SEO configurations that maximize search crawlability and user retention.",
            icon: "seo",
        },
        {
            id: "srv-marketing",
            title: "GA4, GTM & Klaviyo Marketing Integration",
            description:
                "End‑to‑end setup of Google Tag Manager (GTM) and Google Analytics 4 (GA4) tracking architecture. I connect precise e‑commerce event triggers, conversion funnels, and revenue attribution directly with Klaviyo to power targeted behavioral flows, advanced customer segmentation, and automated marketing revenue.",
            icon: "marketing",
        },
    ],
};

export const ABOUT_DATA = {
    title: "About Me",
    subtitle:
        "Pragmatic Engineering, Strict UI Precision & Reliable Technical Delivery",
    paragraphs: [
        "I’m a Dasmariñas-based Web Developer and Technical Delivery Specialist who believes great websites shouldn't have to choose between visual elegance and raw speed.",
        "Currently building 100% custom PHP WordPress architectures at BeUnique INC, I specialize in ditching bloated page builders in favor of lean, modular code that satisfies strict Japanese client standards. Beyond writing code, I actively shape how engineering teams build—authoring custom .agent AI rulesets and automation scripts that keep codebases consistent while cutting development cycles by 40%.",
        "Before stepping into pure custom architecture, I progressed from Junior Developer to Department Head in just four months at CreativesOnline, and later served as Production Manager at CoCreate—where I led cross-functional dev, design, and QA pods to a 100% on-time delivery record while reducing post-launch defect tickets by 35%. Whether you are an employer looking for a disciplined technical lead or a client needing a fast, reliable build, I bring accountability from the first Figma inspection to final deployment.",
    ],
    skills: [
        {
            id: "sk-wp",
            percentage: 100,
            label: "Custom WordPress & PHP",
            icon: "wordpress",
        },
        {
            id: "sk-html",
            percentage: 95,
            label: "HTML5, SCSS & Tailwind CSS",
            icon: "code",
        },
        {
            id: "sk-figma",
            percentage: 90,
            label: "Figma-to-Code & UI QA",
            icon: "figma",
        },
        {
            id: "sk-react",
            percentage: 85,
            label: "JavaScript, Vue.js & React",
            icon: "react",
        },
        {
            id: "sk-ai",
            percentage: 90,
            label: "AI Dev Rules & Workflow Automation",
            icon: "ai",
        },
    ] as SkillRing[],
};

export const PROJECT_CATEGORIES: ProjectCategory[] = [
    "All",
    "Custom WordPress",
    "Front-End Apps",
    "E-Commerce",
    "UI/UX & Concepts",
];

export const PROJECTS_DATA: Project[] = [
    {
        id: "proj-jp-steel",
        title: "Japanese Industrial Metal & Steel Works",
        category: "Custom WordPress",
        description:
            "Custom-built from scratch via AI-assisted engineering, Figma MCP design matching, and custom .agent rules & skills for a Japanese metal & steel works firm with sub-2.5s load times.",
        longDescription:
            "Engineered a 100% custom WordPress theme completely from scratch using AI-assisted engineering workflows, direct Figma MCP layout parity, and custom .agent rules and skills files to enforce strict Japanese coding and QA standards for an industrial metal & steel works firm.",
        architectureHighlights: [
            "Custom-built from scratch with AI-assisted engineering guided by .agent rules & skills files",
            "Pixel-accurate layout, spacing, and Japanese typography matched directly via Figma MCP",
            "Custom PHP template hierarchy with modular ACF blocks achieving sub-2.5s initial load times",
        ],
        techStack: ["WordPress", "Custom PHP", "Figma MCP", ".agent Rules & Skills", "AI-Assisted Build"],
        image: confidentialFcImg,
        imageWidth: 800,
        imageHeight: 432,
        confidentialLabel: "Project under Company Confidential",
        featured: true,
        metrics: "Sub-2.5s load time · Figma MCP + .agent",
    },
    {
        id: "proj-jp-healthcare",
        title: "Japanese Senior Living & Nursing Care Portal",
        category: "Custom WordPress",
        description:
            "Accessible Japanese nursing & senior living portal custom-built from scratch with AI-assisted workflows, Figma MCP parity, and .agent quality/a11y rulesets.",
        longDescription:
            "Developed an accessibility-first custom WordPress theme from scratch for a Japanese nursing and senior living provider, combining AI-assisted engineering with Figma MCP design inspection and .agent rules & skills for consistent responsive QA.",
        architectureHighlights: [
            "Built from scratch using AI-assisted engineering with .agent rules enforcing WCAG contrast & semantic HTML5",
            "Exact Figma-to-code component spacing and typography synchronized via Figma MCP",
            "Bespoke PHP page templates audited across Japanese iOS and Android viewports",
        ],
        techStack: ["WordPress", "Custom PHP", "Figma MCP", ".agent Rules & Skills", "Accessibility (a11y)"],
        image: confidentialFcImg,
        imageWidth: 800,
        imageHeight: 432,
        confidentialLabel: "Project under Company Confidential",
        featured: true,
        metrics: "Strict Japanese QA · Figma MCP + .agent",
    },
    {
        id: "proj-jp-glass",
        title: "Japanese Architectural Glass Engineering",
        category: "Custom WordPress",
        description:
            "Precision architectural glass corporate site custom-built from scratch using AI-assisted engineering, Figma MCP specs, and modular .agent skills for 95+ Core Web Vitals.",
        longDescription:
            "Built a lightweight custom PHP WordPress architecture from scratch for a Japanese architectural glass engineering enterprise. Leveraged Figma MCP tokens and custom .agent rules & skills files to streamline modular block generation and hit 95+ Core Web Vitals.",
        architectureHighlights: [
            "Custom WordPress blocks built from scratch with AI-assisted workflows and modular .agent skills",
            "Strict Figma MCP visual parity for grid proportions, CSS spacing, and responsive breakpoints",
            "Core Web Vitals tuning targeting minimal CLS, lean JS payloads, and fast LCP",
        ],
        techStack: ["WordPress", "Custom PHP", "Figma MCP", ".agent Rules & Skills", "Core Web Vitals"],
        image: confidentialFcImg,
        imageWidth: 800,
        imageHeight: 432,
        confidentialLabel: "Project under Company Confidential",
        featured: true,
        metrics: "Core Web Vitals 95+ · AI-Assisted Build",
    },
    {
        id: "proj-jp-clinic",
        title: "Japanese Medical & Plastic Surgery Clinic",
        category: "Custom WordPress",
        description:
            "Clinical WordPress portal custom-built from scratch with direct web reservation routing, medical SEO schema, Figma MCP design matching, and .agent QA rules.",
        longDescription:
            "Engineered a trust-focused medical clinic website completely from scratch with AI-assisted development, Figma MCP layout synchronization, and .agent rulesets governing semantic markup, medical schema structure, and mobile speed.",
        architectureHighlights: [
            "Built from scratch with AI-assisted engineering and .agent rules enforcing clean PHP & SEO schema",
            "UI components and mobile reservation flows matched directly from Figma via Figma MCP",
            "Direct patient web-reservation routing audited across Safari iOS and Chromium mobile devices",
        ],
        techStack: ["WordPress", "Custom PHP", "Figma MCP", "Medical SEO Schema", "AI-Assisted Build"],
        image: confidentialFcImg,
        imageWidth: 800,
        imageHeight: 432,
        confidentialLabel: "Project under Company Confidential",
        featured: true,
        metrics: "Web Booking Integration · Figma MCP",
    },
    {
        id: "proj-jp-utilities",
        title: "Japanese Utilities & Electrical Infrastructure",
        category: "Custom WordPress",
        description:
            "Japanese utilities & electrical infrastructure portal custom-built from scratch via AI-assisted engineering, Figma MCP precision, and .agent rules & skills for strict Japanese QA.",
        longDescription:
            "Delivered a modern corporate and recruitment portal for a Japanese utilities and electrical infrastructure enterprise—engineered from scratch with pure custom PHP, Figma MCP design alignment, and custom .agent rules & skills for repeatable Japanese localization QA.",
        architectureHighlights: [
            "Pure custom PHP theme built from scratch using AI-assisted engineering and .agent workflow skills",
            "Pixel-level Japanese layout & recruitment UI parity verified through Figma MCP",
            "Lightweight front-end delivery with clean animation timing and accessible inquiry forms",
        ],
        techStack: ["WordPress", "Custom PHP", "Figma MCP", ".agent Rules & Skills", "Japanese Localization"],
        image: confidentialFcImg,
        imageWidth: 800,
        imageHeight: 432,
        confidentialLabel: "Project under Company Confidential",
        featured: true,
        metrics: "Strict Japanese Standards · .agent Workflow",
    },
    {
        id: "proj-daton",
        title: "Daton Haywood Coaching Hub",
        category: "Custom WordPress",
        description:
            "Empowering community organizer and coaching platform featuring bespoke WordPress architecture, custom shortcodes, and tailored Elementor components.",
        techStack: ["WordPress", "Elementor", "Custom Shortcodes", "Responsive Design"],
        image: datonImg,
        imageWidth: 800,
        imageHeight: 500,
        liveUrl: "https://datonhaywood.com/",
        featured: true,
        metrics: "Custom shortcodes · Zero bloat architecture",
    },
    {
        id: "proj-brnddeals",
        title: "Brnd Deals E-Commerce Suite",
        category: "E-Commerce",
        description:
            "Engineered bespoke Shopify Liquid templates, custom product filtering, and mobile-first checkout optimizations for an international retail client.",
        techStack: ["Shopify Liquid", "JavaScript", "Responsive UI", "E-Commerce"],
        image: brnddealsImg,
        imageWidth: 800,
        imageHeight: 500,
        liveUrl: "https://www.brnddeals.com/",
        featured: true,
        metrics: "Custom checkout flow · Mobile-first UX",
    },
    {
        id: "proj-quezon",
        title: "Quezon LPS Legislative Portal",
        category: "Front-End Apps",
        description:
            "Translated modular Figma UI libraries into reusable Vue.js and Laravel Blade components for local government administration, resolving 50+ cross-device UI defects prior to launch.",
        techStack: ["Vue.js", "Laravel Blade", "SCSS", "UI QA Audit"],
        image: quezonImg,
        imageWidth: 800,
        imageHeight: 500,
        liveUrl: "https://sp.quezon.gov.ph/",
        featured: true,
        metrics: "50+ QA bugs resolved · Government grade",
    },
    {
        id: "proj-cocreate",
        title: "Team CoCreate Agency Platform",
        category: "Custom WordPress",
        description:
            "Business collaboration and on-demand creative agency platform built on custom WordPress architecture, delivering bespoke presentation logic and fast interactions.",
        techStack: ["WordPress", "Custom PHP", "Elementor/Hooks", "Brand Systems"],
        image: cocreateImg,
        imageWidth: 800,
        imageHeight: 432,
        liveUrl: "https://teamcocreate.com/",
        featured: true,
        metrics: "100% on-time delivery · Creative Agency",
    },
    {
        id: "proj-lightbulb",
        title: "Lightbulb PH Digital Solutions",
        category: "Custom WordPress",
        description:
            "High-performance digital solutions agency platform built on custom WordPress, engineered with custom shortcodes for lightning-fast page speed and high lead conversion.",
        techStack: ["WordPress", "PHP", "Lead Generation", "SEO Schema", "Speed Optimization"],
        image: lightbulbImg,
        imageWidth: 800,
        imageHeight: 430,
        liveUrl: "https://lightbulb.ph/",
        featured: true,
        metrics: "Sub-2s page load · High-converting UI",
    },
    {
        id: "proj-phixels",
        title: "Phixels Asian Stock Media Platform",
        category: "UI/UX & Concepts",
        description:
            "End-to-end front-end architecture, wireframes, and media management interfaces for an Asian stock photography, vector, and royalty-free media platform built under Cocreate.",
        techStack: ["UI/UX Design", "Figma", "Front-End Architecture", "Asset Management"],
        image: phixelsImg,
        imageWidth: 800,
        imageHeight: 430,
        liveUrl: "https://phixels.app/",
        featured: true,
        metrics: "End-to-end UX flow · Asset library app",
    },
    {
        id: "proj-majestic",
        title: "Majestic Print & Packaging",
        category: "Custom WordPress",
        description:
            "Industrial manufacturing catalog and 75th-anniversary digital showcase for premium packaging products, featuring custom interactive carousel logic and technical SEO.",
        techStack: ["WordPress", "SEO", "Custom PHP", "Interactive UI"],
        image: majesticImg,
        imageWidth: 800,
        imageHeight: 429,
        liveUrl: "https://majesticprintpackaging.com/",
        featured: true,
        metrics: "Enterprise Catalog · 75-Year Heritage",
    },
    {
        id: "proj-portfolio",
        title: "Interactive Developer Portfolio",
        category: "Front-End Apps",
        description:
            "Component-driven personal showcase built with modern front-end tooling, responsive grid layouts, and smooth micro-interactions.",
        techStack: ["React", "TypeScript", "Vite", "Tailwind/CSS3"],
        image: portfolioImg,
        imageWidth: 800,
        imageHeight: 500,
        githubUrl: "https://github.com/cessDevs1419",
        featured: true,
        metrics: "100% Responsive · Zero bloat",
    },
    {
        id: "proj-osam",
        title: "Osam Creative Digital Presence",
        category: "Custom WordPress",
        description:
            "Charity and creative web site engineered with custom PHP architecture, supporting streamlined donation/community engagement funnels and fast performance.",
        techStack: ["WordPress", "Custom PHP", "Charity Platform", "Responsive UI"],
        image: osamImg,
        imageWidth: 800,
        imageHeight: 500,
        featured: false,
    },
    {
        id: "proj-maharlika",
        title: "Maharlika Coaching & Multi-Brand Store",
        category: "E-Commerce",
        description:
            "Bespoke coaching service and multi-brand e-commerce marketplace build featuring fast checkout funnels and custom inventory synchronization.",
        techStack: ["WooCommerce", "PHP", "Stripe API", "CSS3"],
        image: maharlikaImg,
        imageWidth: 800,
        imageHeight: 500,
        featured: false,
    },
    {
        id: "proj-apex",
        title: "Apex Esports Gaming Platform",
        category: "Front-End Apps",
        description:
            "Collaborated within an engineering team using Laravel Blade and modern front-end tooling to build dynamic tournament brackets, user dashboards, and responsive gaming community features.",
        techStack: ["JavaScript", "Laravel Blade", "CSS3", "REST API"],
        image: apexImg,
        imageWidth: 800,
        imageHeight: 500,
        featured: false,
    },
];

export const INQUIRY_OPTIONS: InquiryType[] = [
    "Full-Time / Contract Web Developer Role",
    "Custom WordPress Theme Development",
    "Front-End Engineering (React / JS)",
    "Shopify / WooCommerce Storefront",
    "Website Speed, SEO & QA Audit",
];

export const CONTACT_DATA = {
    title: "Contact Me",
    subtitle:
        "Looking for a dedicated developer for your engineering team or a custom-built website for your business? Send over the details below.",
    directContact: {
        email: "francess@gmail.com",
        phone: "+63 936 934 6575",
        location: "Dasmariñas, Cavite, Philippines",
    },
};

export const FOOTER_DATA = {
    copyright:
        "© 2026 Francess Cillo. Engineered with clean code & zero bloat.",
    quickLinks: NAV_LINKS,
    contact: CONTACT_DATA.directContact,
};
