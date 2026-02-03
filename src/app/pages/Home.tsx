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
                <div className="m-auto mb-5 pb-5 w-100 text-center border border-bottom-1 border-start-0 border-end-0 border-top-0 row">
                    <div className="col-4 border border-bottom-0 border-start-0 border-end-1 border-top-0 px-5 py-3"></div>
                    <div className="col-4 px-5 py-3"></div>
                    <div className="col-4 border border-bottom-0 border-start-1 border-end-0 border-top-0 px-5 py-3"></div>
                </div>
                <div className="m-auto ">
                    <h3 className="font-paragraph text-white m-0">
                        Front End Specialist | Wordpress Developer | Project
                        Manager
                    </h3>
                </div>
            </Container>
            <Container
                container_id="contact"
                parent_className="contact"
                child_className="d-flex align-items-center justify-content-center"
            >
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
