import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Presentation from './components/Presentation';
import Services from './components/Services';
import Approche from './components/Approche';
import Footer from './components/Footer';
import ScrollFeatures from './components/ScrollFeatures';

function App() {
  return (
    <>
      <ScrollFeatures />
      
      <Navbar />
      <Hero />
      <Presentation />
      <Services />
      <Approche />
      <Footer />
    </>
  );
}

export default App;