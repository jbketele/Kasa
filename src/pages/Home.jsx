import Header from "../components/Header";
import Card from "../components/Card";
import "../assets/styles/Home.sass";
import data from "../data.json";
import Footer from "../components/Footer";
import "../assets/styles/Banner.sass";
import backgroundImg from "../assets/images/background-img.png"; // Import direct


const Home = () => {
  const Banner = () => {
    return (
      <div className="banner">
        <img
          src={backgroundImg} // Utilisation de l'image importée directement
          alt="banner-image"
          className="banner-image"
        />
        <div className="background-text">Chez vous,<br /> partout et ailleurs</div> {/* Texte statique */}
      </div>
    );
  };
  return (
    <>
      <Header />
      <div className="banner-container">
      <Banner />
      </div>
      <main>
        <div className="grid">
          {data.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} cover={item.cover} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;