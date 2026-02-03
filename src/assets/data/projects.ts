import { type projects } from "../../app/model/projects";
import daton from "../images/Daton.png";
import cocreate from "../images/teamcocreate.png";
import ltb from "../images/lightblb.png";
import majestic from "../images/mjestic.png";
import qplis from "../images/Quezon.png";
import lappee from "../images/lappeev1-land.png";
import apex from "../images/apex.png";
import cryo from "../images/cryo.png";
import riot from "../images/riot.png";
import swyper from "../images/sweeper.png";
import brnd from "../images/brnddeals.png";

export const Sample_Projects: projects[] = [
    // WORDPRESS
    {
        id: "wp-01",
        name: "Daton Haywood",
        description:
            "A professional consultancy and personal branding site built on WordPress.",
        tech: ["WordPress", "PHP", "Elementor"],
        link: "https://datonhaywood.com/",
        images: [daton],
    },
    {
        id: "wp-02",
        name: "Team Co-Create",
        description:
            "Business collaboration platform focusing on agency workflow and services.",
        tech: ["WordPress", "PHP", "Elementor"],
        link: "https://teamcocreate.com/",
        images: [cocreate],
    },
    {
        id: "wp-03",
        name: "Lightbulb PH",
        description:
            "A digital solutions agency site optimized for high performance and lead generation.",
        tech: ["WordPress", "PHP", "Elementor"],
        link: "https://lightbulb.ph/",
        images: [ltb],
    },
    {
        id: "wp-04",
        name: "Majestic Print Packaging",
        description:
            "Industrial e-commerce catalog for premium printing and packaging products.",
        tech: ["WordPress", "SEO", "Elementor"],
        link: "https://majesticprintpackaging.com/",
        images: [majestic],
    },

    // SHOPIFY
    {
        id: "sh-01",
        name: "Brand Deals (BRND)",
        description:
            "Modern Shopify storefront for premium brand liquidation and retail deals.",
        tech: ["Shopify", "Liquid"],
        link: "https://www.brnddeals.com/",
        images: [brnd],
    },

    // VUE & GOVERNMENT
    {
        id: "vue-01",
        name: "Quezon Legislative",
        description:
            "Official legislative portal for Quezon Province, featuring public records and transparency tools.",
        tech: ["Vue.js", "JavaScript", "API"],
        link: "https://sp.quezon.gov.ph/",
        images: [qplis],
    },

    // REACT / ANGULAR
    {
        id: "re-01",
        name: "Lappee - Admin Ecosystem",
        description:
            "Comprehensive enterprise dashboard for the Lappee platform, built with React and Angular modules.",
        tech: ["Angular", "TypeScript", "API"],
        link: "",
        images: [lappee],
    },

    // VANILLA DEVELOPMENT / PREVIOUS PORTFOLIO
    {
        id: "van-01",
        name: "Apex Lounge",
        description:
            "A service platform built with Laravel Blade to help players improve gaming performance.",
        tech: ["JavaScript", "CSS", "Blade"],
        link: "",
        images: [apex],
    },
    {
        id: "van-02",
        name: "Cryo Games",
        description:
            "Landing website for sellers to display products via Sellix API integration.",
        tech: ["Vanilla Development", "Sellix API"],
        link: "",
        images: [cryo],
    },
    {
        id: "van-03",
        name: "RIOT",
        description:
            "Product showcase platform connecting to external e-commerce APIs.",
        tech: ["Vanilla Development", "Sellix API"],
        link: "",
        images: [riot],
    },
    {
        id: "van-04",
        name: "Swypers Paradise",
        description:
            "Online platform designed for displaying and selling gaming accounts.",
        tech: ["Vanilla Development", "Sellix API"],
        link: "",
        images: [swyper],
    },
];
