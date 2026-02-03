import Container from "../components/container";
import Button from "../components/button";
import ProjectCard from "../components/project_card";
import { Sample_Projects } from "../../assets/data/projects";
import "../../assets/styles/home.css";
import "../../assets/styles/projects.css";

const Home = () => {
    return (
        <>
            {/* Hero */}
            <Container
                container_id="hero"
                parent_className="hero"
                child_className="d-flex flex-column align-items-center justify-content-center"
            >
                <div className="title-container text-center">
                    <h1 className="font-header">
                        Front-end developer <br></br>building fast, reliable
                        websites.
                    </h1>
                    <h5 className="font-paragraph">
                        I specialize in modern front-end development and custom
                        WordPress <br></br>builds that are responsive, scalable,
                        and easy to maintain.
                        <br></br>
                        <br></br>I work with startups, agencies, and small
                        businesses <br></br>to turn designs into high-quality,
                        production-ready websites.
                    </h5>
                </div>
                <div className="button-container d-flex justify-content-between align-items-center gap-5">
                    <Button className="view font-paragraph" scrollTo="projects">
                        View Work
                    </Button>
                    <Button
                        className="contact font-paragraph"
                        scrollTo="contact"
                    >
                        Contact Me
                    </Button>
                </div>
            </Container>
            {/* Projects */}
            <Container
                container_id="projects"
                parent_className="projects"
                child_className="d-flex flex-column align-items-start justify-content-center"
            >
                <div className="m-auto mb-5 pb-5 w-100 text-center border border-bottom-1 border-start-0 border-end-0 border-top-0">
                    <h3 className="font-sub">FEATURED PROJECTS</h3>
                </div>
                <div className="projects-container row ">
                    {Sample_Projects.map((project) => (
                        <div className="col-lg-6 mb-4">
                            <ProjectCard key={project.id} value={project} />
                        </div>
                    ))}
                </div>
            </Container>
            {/* About */}
            <Container
                container_id="about"
                parent_className="about bg-primary"
                child_className="d-flex flex-column align-items-start justify-content-center "
            >
                <div className="m-auto mb-5 w-100 text-center border border-bottom-1 border-start-0 border-end-0 border-top-0 row">
                    <div className="rate col-md-4 col-12 d-flex justify-content-center align-items-center gap-3 border border-bottom-0 border-start-0 border-end-1 border-top-0 px-5 py-3">
                        <h3 className="font-sub text-white m-0 p-0">2+</h3>
                        <p className=" font-paragraph text-white m-0 p-0">
                            Years of Experience
                        </p>
                    </div>
                    <div className="rate col-md-4 col-12 px-5 py-3 d-flex justify-content-center align-items-center gap-3 ">
                        <h3 className="font-sub text-white m-0 p-0">15+</h3>
                        <p className=" font-paragraph text-white m-0 p-0">
                            Projects Done
                        </p>
                    </div>
                    <div className="rate col-md-4 col-12 d-flex justify-content-center align-items-center gap-3 border border-bottom-0 border-start-1 border-end-0 border-top-0 px-5 py-3">
                        <h3 className="font-sub text-white m-0 p-0">4.5</h3>
                        <p className=" font-paragraph text-white m-0 p-0">
                            Client Satistaction
                        </p>
                    </div>
                </div>
                <div className="m-auto ">
                    <h3 className="font-paragraph text-white m-0 text-center">
                        Front End Engineer | Wordpress Developer | Project
                        Manager
                    </h3>
                </div>
            </Container>
            <Container
                container_id="about2"
                parent_className="about2"
                child_className="d-flex align-items-start justify-content-center row"
            >
                <div className="col-lg-6 col-12 mb-lg-0 mb-3">
                    <h2 className="font-about text-dark text-lg-end text-center m-0 mb-5">
                        About
                    </h2>
                    <p className="font-paragraph text-dark text-lg-end text-center   m-0">
                        I’m a front-end developer focused on building
                        responsive, maintainable websites and custom WordPress
                        solutions. I work with modern front-end tools to turn
                        designs into fast, reliable, production-ready sites.
                    </p>
                </div>
                <div className="col-lg-6 col-12 mb-md-0 mb-3">
                    <h1 className="font-tech text-dark text-lg-start text-center m-0 mb-5">
                        Tech
                    </h1>
                    <div className="d-flex justify-content-center justify-content-lg-start gap-3 m-aut m-lg-0 ">
                        <span className="tech-badge font-paragraph rounded-3 border">
                            React
                        </span>
                        <span className="tech-badge font-paragraph rounded-3 border">
                            Wordpress
                        </span>
                        <span className="tech-badge font-paragraph rounded-3 border">
                            API Integration
                        </span>
                    </div>
                </div>
            </Container>
            <Container
                container_id="contact"
                parent_className="contact"
                child_className="d-flex flex-column align-items-center justify-content-center"
            >
                <div className="contact-container d-flex gap-3 mb-4">
                    {/* LinkedIn */}
                    <a
                        className="text-decoration-none"
                        href="https://www.linkedin.com/in/francess-cillo-177b8a29a/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="#0F0F0F"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </a>

                    {/* GitHub */}
                    <a
                        className="text-decoration-none"
                        href="https://github.com/cessDevs1419"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="#0F0F0F"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>

                    {/* Email */}
                    <a
                        className="text-decoration-none"
                        href="mailto:francess12357@gmail.com"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="#0F0F0F"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 8.139h-18.893l5.627-8.134zm9.201-1.259l4.623-3.746v9.458l-4.623-5.712z" />
                        </svg>
                    </a>

                    {/* Viber */}
                    <a
                        className="text-decoration-none"
                        href="viber://chat?number=639369346575"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="#0F0F0F"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M17.47 1.4C11.96 1.4 7.5 5.86 7.5 11.37c0 1.19.21 2.32.6 3.37L6.44 20.2c-.17.47.3.93.77.77l5.46-1.66c1.05.39 2.18.6 3.37.6 5.51 0 9.97-4.46 9.97-9.97S22.98 1.4 17.47 1.4zm2.63 14.34c-.34.34-.87.4-1.27.14l-1.85-1.11c-.39-.23-.53-.72-.31-1.11l.54-.93c-.92-.61-1.76-1.33-2.49-2.14l-.98.44c-.42.19-.92.05-1.18-.33L11.4 8.95c-.26-.4-.2-.93.14-1.27l.79-.79c.14-.14.15-.35.03-.51-.31-.41-.71-.89-1.07-1.3-.13-.15-.34-.17-.5-.04l-1.03.88c-.89.77-1.12 2.06-.55 3.09 1.41 2.55 3.51 4.65 6.06 6.06 1.03.57 2.32.34 3.09-.55l.88-1.03c.13-.15.11-.37-.04-.5-.41-.36-.89-.76-1.3-1.07-.16-.12-.37-.11-.51.03l-.79.79z" />
                        </svg>
                    </a>
                </div>
                <Button
                    className="view font-paragraph"
                    email="francess12357@gmail.com"
                >
                    Let's work together
                </Button>
            </Container>
        </>
    );
};

export default Home;
