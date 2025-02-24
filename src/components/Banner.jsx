import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Banner.sass";
import logo from "../assets/images/logo.png";

const Banner = () => {
    useEffect(() => {
        const link = document.createElement("link");
        link.href = "https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Montserrat:wght@100..900&display=swap";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }, []);

    return (
        <header className="banner">
            <div className="logo-container">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/" className="nav-link">Accueil</Link></li>
                    <li><Link to="/about" className="nav-link">À propos</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Banner;