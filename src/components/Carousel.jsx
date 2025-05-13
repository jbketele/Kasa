import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "../assets/styles/Carousel.sass";
import PropTypes from "prop-types";

function Carousel({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === pictures.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel">
      <button
        type="button"
        onClick={handlePrevSlide}
        className="carousel-arrow carousel-arrow-prev"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="carousel-slide">
        <img
          src={pictures[currentSlide]}
          alt={`Slide ${currentSlide}`}
        />
        {pictures.length > 1 && (
          <div className="carousel-indicator">
            {`${currentSlide + 1}/${pictures.length}`}
          </div>
        )}
      </div>
      <button
        type="button"
        onClick={handleNextSlide}
        className="carousel-arrow carousel-arrow-next"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}
Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
