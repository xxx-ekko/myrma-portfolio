import { Fab, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';

const ScrollFeatures = () => {
  // Magie Framer Motion : récupère l'avancement du scroll (de 0 à 1)
  const { scrollYProgress } = useScroll();
  const [showButton, setShowButton] = useState(false);

  // Écouteur pour afficher le bouton seulement si on a un peu descendu
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400); // Apparaît après 400px de descente
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. LA BARRE DE PROGRESSION EN HAUT */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          transformOrigin: '0%', // L'animation part de la gauche
          backgroundColor: '#8C7A6B', // La couleur Beige/Travertin de ton thème
          height: '4px',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999, // Reste au-dessus de TOUT
        }}
      />

      {/* 2. LE BOUTON FLOTTANT RETOUR EN HAUT */}
      <Zoom in={showButton}>
        <Fab
          color="primary"
          size="medium"
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: { xs: 16, md: 32 },
            right: { xs: 16, md: 32 },
            zIndex: 1000,
            color: '#ffffff',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
            '&:hover': {
              backgroundColor: 'text.primary', // Devient gris foncé au survol
            }
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </>
  );
};

export default ScrollFeatures;