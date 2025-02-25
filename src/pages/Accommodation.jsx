import { useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import data from "../data.json";
import "../assets/styles/Accommodation.sass";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Accommodation() {
  const { id } = useParams();
  const accommodation = data.find(item => item.id === id);

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);

  if (!accommodation) {
    return <div>Accommodation not found</div>;
  }

  const [firstName, lastName] = accommodation.host.name.split(' ');

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={i < rating ? 'star-filled' : 'star-empty'}
        />
      );
    }
    return stars;
  };

  return (
    <div>
      <Banner />
      <main className="accommodation">
        <img src={accommodation.cover} alt={accommodation.title} />
        <div className="accommodation-details">
          <div>
            <h1>{accommodation.title}</h1>
            <p>{accommodation.location}</p>
          </div>
          <div className="host-details">
            <div className="host-name">
              <p>{firstName}</p>
              <p>{lastName}</p>
            </div>
            <img src={accommodation.host.picture} alt={accommodation.host.name} />
          </div>
        </div>
        <div className="tags-rating">
          <div className="tags">
            {accommodation.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
          <div className="rating">
            {renderStars(accommodation.rating)}
          </div>
        </div>
        <div className="dropdowns">
          <div className="dropdown">
            <div className="dropdown-header" onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}>
              <h2>Description</h2>
              <FontAwesomeIcon icon={isDescriptionOpen ? faChevronUp : faChevronDown} />
            </div>
            {isDescriptionOpen && <p>{accommodation.description}</p>}
          </div>
          <div className="dropdown">
            <div className="dropdown-header" onClick={() => setIsEquipmentsOpen(!isEquipmentsOpen)}>
              <h2>Équipements</h2>
              <FontAwesomeIcon icon={isEquipmentsOpen ? faChevronUp : faChevronDown} />
            </div>
            {isEquipmentsOpen && (
              <ul>
                {accommodation.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Accommodation;