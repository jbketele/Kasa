import "../assets/styles/Background.sass";
import backgroundImg from "../assets/images/background-img.png"; // Import direct

const Background = () => {
  return (
    <div className="background">
      <img
        src={backgroundImg} // Utilisation de l'image importée directement
        alt="background"
        className="background-image"
      />
      <div className="background-text">Chez vous, partout et ailleurs</div> {/* Texte statique */}
    </div>
  );
};

export default Background;