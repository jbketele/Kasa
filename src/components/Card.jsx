import { Link } from "react-router-dom";
import PropTypes from "prop-types";
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
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;