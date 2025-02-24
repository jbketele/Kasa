<<<<<<< HEAD
import { Link } from "react-router-dom";
import "../assets/styles/Card.sass";

const Card = ({ id, cover, title }) => {
  return (
    <Link to={`/accommodation/${id}`} className="card">
      <div className="card">
        <img src={cover} alt={title} className="card-cover" />
        <div className="card-title">{title}</div>
      </div>
    </Link>
  );
=======
import "../assets/styles/Card.sass"; // Assurez-vous de créer ce fichier CSS

const Card = ({ cover, title }) => {
  return <div className="card">
    <img src={cover} alt={title} className="card-cover" />
    <div className="card-title">{title}</div>
  </div>;
>>>>>>> 3c233d9dc41cafabfa8460c39aa9190e8ca0a7d0
};

export default Card;