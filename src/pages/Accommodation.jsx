import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import data from "../data.json";
import "../assets/styles/Accommodation.sass";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Accommodation() {
  const { id } = useParams();
  const accommodation = data.find(item => item.id === id);

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
      </main>
      <Footer />
    </div>
  );
}

export default Accommodation;