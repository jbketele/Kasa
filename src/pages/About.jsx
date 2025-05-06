import Header from "../components/Header";
import "../assets/styles/About.sass";
import Footer from "../components/Footer";
import backgroundImg from "../assets/images/banner-about.png"; 
import "../assets/styles/Banner.sass";
import Collapse from "../components/Collapse"; 

const About = () => {
  const Banner = () => {
    return (
      <div className="banner">
        <img
          src={backgroundImg} 
          alt="banner-image"
          className="bg-about"
        />
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="banner-container">
        <Banner />
      </div>
      <main>
        <div className="values">
          <Collapse title="Fiabilité">
            <p className="value-text">
              Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
            </p>
          </Collapse>
          <Collapse title="Respect">
            <p className="value-text">
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
            </p>
          </Collapse>
          <Collapse title="Service">
            <p className="value-text">
              La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.
            </p>
          </Collapse>
          <Collapse title="Sécurité">
            <p className="value-text">
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l&apos;hôte qu&apos;au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </Collapse>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;