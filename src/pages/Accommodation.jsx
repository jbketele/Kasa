import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from "../components/Header";
import "../assets/styles/Accommodation.sass";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Collapse from "../components/Collapse";

function Accommodation() {
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        const foundAccommodation = data.find(item => item.id === id);

        if (!foundAccommodation) {
          setError("Accommodation not found");
        } else {
          setAccommodation(foundAccommodation);
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return <Navigate to="/not-found" replace />;
  }

  if (!accommodation) {
    return null;
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

  const customRenderArrowPrev = (onClickHandler, hasPrev) =>
    hasPrev && (
      <button type="button" onClick={onClickHandler} title="Previous" className="carousel-arrow carousel-arrow-prev">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    );

  const customRenderArrowNext = (onClickHandler, hasNext) =>
    hasNext && (
      <button type="button" onClick={onClickHandler} title="Next" className="carousel-arrow carousel-arrow-next">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    );

  return (
    <div>
      <Header />
      <main className="accommodation">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop={accommodation.pictures.length > 1} // Désactive la boucle infinie si une seule image
          useKeyboardArrows={accommodation.pictures.length > 1} // Désactive les flèches clavier si une seule image
          renderArrowPrev={accommodation.pictures.length > 1 ? customRenderArrowPrev : () => null} // Supprime la flèche précédente si une seule image
          renderArrowNext={accommodation.pictures.length > 1 ? customRenderArrowNext : () => null} // Supprime la flèche suivante si une seule image
        >
          {accommodation.pictures.map((picture, index) => (
            <div key={index}>
              <img src={picture} alt={`Slide ${index}`} />
              {accommodation.pictures.length > 1 && ( // Affiche l'indicateur uniquement si plusieurs images
                <div className="carousel-indicator">
                  {`${index + 1}/${accommodation.pictures.length}`}
                </div>
              )}
            </div>
          ))}
        </Carousel>
        <div className="accommodation-info">
          <div className="accommodation-details">
            <div>
              <h1>{accommodation.title}</h1>
              <p>{accommodation.location}</p>
            </div>
            <div className="tags">
              {accommodation.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
          <div className="host-rating-container">
            <div className="host-details">
              <div className="host-name">
                <p>{firstName}</p>
                <p>{lastName}</p>
              </div>
              <img src={accommodation.host.picture} alt={accommodation.host.name} />
            </div>
            <div className="rating">
              {renderStars(accommodation.rating)}
            </div>
          </div>
        </div>
        <div className="dropdowns">
          <Collapse title="Description">
            <p>{accommodation.description}</p>
          </Collapse>
          <Collapse title="Équipements">
            <ul>
              {accommodation.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Accommodation;