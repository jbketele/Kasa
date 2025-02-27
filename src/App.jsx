import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Accommodation from "./pages/Accommodation";
import NotFound from "./pages/NotFound"; // Importez le composant NotFound
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/accommodation/:id" element={<Accommodation />} />
      <Route path="*" element={<NotFound />} /> {/* Ajoutez cette ligne pour gérer les erreurs 404 */}
    </Routes>
  );
}

export default App;