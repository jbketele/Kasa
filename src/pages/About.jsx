import Header from "../components/Header";
import "../assets/styles/About.sass";
import Footer from "../components/Footer";
import backgroundImg from "../assets/images/banner-about.png"; // Import direct
import "../assets/styles/Banner.sass";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const Banner = () => {
    return (
      <div className="banner">
        <img
          src={backgroundImg} // Utilisation de l'image importée directement
          alt="banner-image"
          className="bg-about"
        />
      </div>
    );
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState({
    value1: false,
    value2: false,
    value3: false,
    value4: false,
  });

  const toggleDropdown = (key) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <>
      <Header />
      <div className="banner-container">
      <Banner />
      </div>
      <main>
        <div className="values">
          <div className="dropdown">
            <div className="dropdown-header" onClick={() => toggleDropdown("value1")}>
              <h2>Fiabilité</h2>
              <FontAwesomeIcon icon={isDropdownOpen.value1 ? faChevronUp : faChevronDown} />
            </div>
            {isDropdownOpen.value1 && <p className="value-text">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>}
          </div>
          <div className="dropdown">
            <div className="dropdown-header" onClick={() => toggleDropdown("value2")}>
              <h2>Respect</h2>
              <FontAwesomeIcon icon={isDropdownOpen.value2 ? faChevronUp : faChevronDown} />
            </div>
            {isDropdownOpen.value2 && <p className="value-text">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>}
          </div>
          <div className="dropdown">
            <div className="dropdown-header" onClick={() => toggleDropdown("value3")}>
              <h2>Service</h2>
              <FontAwesomeIcon icon={isDropdownOpen.value3 ? faChevronUp : faChevronDown} />
            </div>
            {isDropdownOpen.value3 && <p className="value-text">La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</p>}
          </div>
          <div className="dropdown">
            <div className="dropdown-header" onClick={() => toggleDropdown("value4")}>
              <h2>Sécurité</h2>
              <FontAwesomeIcon icon={isDropdownOpen.value4 ? faChevronUp : faChevronDown} />
            </div>
            {isDropdownOpen.value4 && <p className="value-text">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l&apos;hôte qu&apos;au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;