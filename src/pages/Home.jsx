import Banner from "../components/Banner";
import Background from "../components/Background";
import Card from "../components/Card";
import "../assets/styles/Home.sass";
import data from "../data.json";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Banner />
      <Background />
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