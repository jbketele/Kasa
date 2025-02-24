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
<<<<<<< HEAD
            <Card key={item.id} id={item.id} title={item.title} cover={item.cover} />
=======
            <Card key={item.id} title={item.title} cover={item.cover} />
>>>>>>> 3c233d9dc41cafabfa8460c39aa9190e8ca0a7d0
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;