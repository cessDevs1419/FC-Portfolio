import React from "react";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import About from "../../components/About";
import Portfolio from "../../components/Portfolio";

export const Home: React.FC = () => {
    return (
        <div className="fc-page-wrapper">
            {/* Hero Section */}
            <Hero />

            {/* Services Section */}
            <Services />

            {/* About Me Section & Skills */}
            <About />

            {/* Portfolio Section with dynamic categories */}
            <Portfolio />
        </div>
    );
};

export default Home;
