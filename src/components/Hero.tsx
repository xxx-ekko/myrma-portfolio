import { Box, Typography, Button, Container, } from '@mui/material';
import { motion, type Variants } from 'framer-motion';

// On crée des versions animées de nos composants MUI
const MotionTypography = motion.create(Typography);
const MotionButton = motion.create(Button);

const Hero = () => {
// --- CHORÉGRAPHIE FRAMER MOTION ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut' } 
    },
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box id="accueil"
      sx={{
        position: 'relative',
        height: '100vh', // Prend 100% de la hauteur de l'écran
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // Image de fond temporaire (on remplacera par un rendu 3D de tes amies !)
        backgroundImage: 'url(https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&::before': {
          // Un voile sombre par-dessus l'image pour que le texte blanc soit lisible
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)', 
          zIndex: 1,
        },
      }}
    >
      <Container 
        maxWidth="md" 
        sx={{ 
          position: 'relative', 
          zIndex: 2, // Pour que le texte soit au-dessus du voile sombre
          textAlign: 'center',
          color: '#ffffff' // Texte en blanc
        }}
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <MotionTypography 
          variant="h1" 
          variants={itemVariants}
          sx={{ 
            color: '#ffffff', // On force le blanc par-dessus le thème beige pour cette section
            fontSize: { xs: '3rem', md: '5rem' },
            letterSpacing: '0.05em',
            mb: 2,
            textShadow: '2px 4px 10px rgba(0,0,0,0.3)' // Petite ombre pour faire ressortir le texte
          }}
        >
          Myrma Design
        </MotionTypography>

        <MotionTypography 
          variant="h5" 
          variants={itemVariants}
          sx={{ 
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 300,
            letterSpacing: '0.2em', // Lettres très espacées, très chic
            textTransform: 'uppercase',
            mb: 5,
            fontSize: { xs: '1rem', md: '1.2rem' }
          }}
        >
          Horizon d'élégance, priorité confort
        </MotionTypography>

        <MotionButton 
          variants={itemVariants}
          variant="outlined" 
          onClick={() => handleScrollTo('studio')}
          sx={{
            color: '#ffffff',
            borderColor: '#ffffff',
            padding: '12px 30px',
            fontSize: '1rem',
            borderWidth: '1px',
            '&:hover': {
              borderWidth: '1px',
              backgroundColor: '#ffffff',
              color: 'primary.main', // Au survol, le bouton devient blanc et le texte prend la couleur beige/travertin du logo
            }
          }}
        >
          Découvrir le Studio
        </MotionButton>
      </Container>
    </Box>
  );
};

export default Hero;