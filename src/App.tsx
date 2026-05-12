import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Presentation from './components/Presentation';
import Services from './components/Services';
import Approche from './components/Approche';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio'; 

// 1. ON CRÉE UN COMPOSANT "ACCUEIL" QUI REGROUPE LES SECTIONS DE LA PAGE PRINCIPALE
const Home = () => {
  return (
    <>
      <Hero />
      <Presentation />
      <Services />
      <Approche />
    </>
  );
};

// 2. LE COMPOSANT APP DEVIENT LE "ROUTEUR" (L'aiguilleur)
function App() {
  return (
    // On ajoute le basename ici !
    <Router basename="/myrma-portfolio">
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>

      <Footer /> 
    </Router>
  );
}

export default App;