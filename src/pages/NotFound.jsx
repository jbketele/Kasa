import { Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/styles/NotFound.sass";

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="not-found">
        <h1 className='number'>404</h1>
        <p>Oups! La page que vous demandez n&apos;existe pas.</p>
        <Link to="/" className="back-home">Retourner sur la page d’accueil</Link>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;