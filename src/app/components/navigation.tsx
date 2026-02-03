import logo from "../../assets/images/FC.png";
import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigationbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Navbar
            expand="xl"
            className={`position-fixed w-100 px-md-0 px-2 transition-navbar ${
                scrolled ? "navbar-scrolled" : "navbar-top"
            }`}
        >
            <Container className="nav-container d-flex w-100">
                <Navbar.Brand href="./">
                    <img
                        width={80}
                        src={logo}
                        alt="Marci Metzger"
                        className="logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className="border-white"
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto w-100 d-flex justify-content-end gap-4">
                        <Nav.Link
                            href="#hero"
                            className="navlink text-dark poppins-regular fs-5"
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#projects"
                            className="navlink text-dark poppins-regular fs-5"
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link
                            href="#about"
                            className="navlink text-dark poppins-regular fs-5"
                        >
                            About
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Navigationbar;
