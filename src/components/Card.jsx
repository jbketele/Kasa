import "../assets/styles/Card.sass"; // Assurez-vous de créer ce fichier CSS

const Card = ({ cover, title }) => {
  return <div className="card">
    <img src={cover} alt={title} className="card-cover" />
    <div className="card-title">{title}</div>
  </div>;
};

export default Card;