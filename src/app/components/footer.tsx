import Container from "./container";

const Footer = () => {
    return (
        <>
            <Container
                parent_className="footer bg-primary p-4"
                child_className="d-flex flex-column align-items-center justify-content-center p-0"
            >
                <h3 className="font-paragraph text-white m-0">
                    ©Copyright Francess Cillo Portfolio 2026
                </h3>
            </Container>
        </>
    );
};
export default Footer;
