import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import data from "../data.json";

function Accommodation() {
  const { id } = useParams();
  const accommodation = data.find(item => item.id === id);

  if (!accommodation) {
    return <div>Accommodation not found</div>;
  }

  return (
    <div>
      <Banner />
      <img src={accommodation.cover} alt={accommodation.title} />
      <h1>{accommodation.title}</h1>
      <p>{accommodation.location}</p>
      <p>{accommodation.host.name}</p>
      {/* Add more accommodation details here */}
    </div>
  );
}

export default Accommodation;