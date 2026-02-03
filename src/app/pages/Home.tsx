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
                        Front-end developer building fast, reliable websites.
                    </h1>
                    <h5 className="font-paragraph">
                        I specialize in modern front-end development and custom
                        WordPress builds that are responsive, scalable, and easy
                        to maintain.
                        <br></br>
                        <br></br>I work with startups, agencies, and small
                        businesses to turn designs into high-quality,
                        production-ready websites.
                    </h5>
                </div>
                <div className="button-container d-flex justify-content-between align-items-center gap-5">
                    <Button className="view font-paragraph">View Work</Button>
                    <Button className="contact font-paragraph">
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
        </>
    );
};

export default Home;
