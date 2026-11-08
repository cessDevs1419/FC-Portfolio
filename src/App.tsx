import { useEffect } from "react";
import AOS from "aos";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./app/pages/Home";
import "./assets/styles/portfolio.css";

function App() {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800,
            easing: "ease-in-out",
            offset: 80,
        });
    }, []);

    return (
        <div className="fc-app-root">
            <Navbar />
            <main id="main-content" role="main">
                <Home />
            </main>
            <Footer />
        </div>
    );
}

export default App;
