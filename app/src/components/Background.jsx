import React from "react";
import "../assets/styles/Background.sass";
import backgroundImg from "../assets/images/background-img.png"; // Import direct

const Background = ({ src, alt, text }) => {
  return (
    <div className="background">
      <img
        src={src || backgroundImg} // Utilisation de l'import
        alt={alt || "background"}
        className="background-image"
      />
      <div className="background-text">{text || "Chez vous, partout et ailleurs"}</div> {/* Ajout du texte */}
    </div>
  );
};  

export default Background;