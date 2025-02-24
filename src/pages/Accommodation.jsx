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

  const renderStars = (rating) =