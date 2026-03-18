import { Box, Container, Typography, Grid } from '@mui/material';
import { motion, type Variants } from 'framer-motion';

const MotionBox = motion(Box);

// Voici les données tirées de ton PDF
const servicesData = [
  {
    title: "Architecture Résidentielle",
    description: "Appartements, maisons, villas. Nous repensons vos lieux de vie pour un confort absolu.",
    // Images temporaires d'architecture d'intérieur très élégantes
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Espaces Commerciaux",
    description: "Bureaux, boutiques, restaurants. Une identité forte pour sublimer votre marque.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Modélisation 3D",
    description: "Des rendus réalistes époustouflants pour vous projeter dans votre futur intérieur.",
    image: "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Conseil en Décoration",
    description: "Choix minutieux du mobilier, des matériaux et harmonie des couleurs.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop"
  }
];

const Services = () => {
  // Animation du conteneur parent : il dit à ses enfants d'apparaître un par un (stagger)
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2 // 0.2 seconde entre l'apparition de chaque carte
      }
    }
  };

  // Animation individuelle de chaque carte au scroll
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: 'easeOut' } 
    }
  };

  return (
    <Box id="services"
      component="section" 
      sx={{ 
        py: { xs: 10, md: 15 },
        backgroundColor: '#EBE7DF' // Un fond très légèrement différent pour séparer les sections
      }}
    >
      <Container maxWidth="xl"> {/* Container plus large pour les cartes */}
        
        {/* EN-TÊTE DE LA SECTION */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h6" color="primary.main" sx={{ mb: 2, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.85rem' }}>
            Nos Domaines d'Expertise
          </Typography>
          <Typography variant="h2" sx={{ color: 'text.primary' }}>
            Nos Services
          </Typography>
        </Box>

        {/* LA GRILLE DE CARTES */}
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid container spacing={4}>
            {servicesData.map((service, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                
                {/* LA CARTE INTERACTIVE */}
                <MotionBox
                  variants={cardVariants}
                  sx={{
                    position: 'relative',
                    height: '500px', // Cartes hautes et élégantes
                    borderRadius: '4px',
                    overflow: 'hidden', // Empêche l'image de déborder quand elle zoome
                    cursor: 'pointer',
                    // --- LA MAGIE CSS DU SURVOL (HOVER) EST ICI ---
                    '&:hover .bg-image': {
                      transform: 'scale(1.08)', // Le fameux zoom de l'image
                    },
                    '&:hover .overlay': {
                      backgroundColor: 'rgba(0, 0, 0, 0.2)', // Le voile s'éclaircit
                    },
                    '&:hover .description': {
                      opacity: 1, // Le texte devient visible
                      transform: 'translateY(0)', // Le texte remonte à sa place
                    }
                  }}
                >
                  {/* 1. L'IMAGE DE FOND */}
                  <Box
                    className="bg-image" // Classe utilisée pour le ciblage CSS au-dessus
                    sx={{
                      position: 'absolute',
                      top: 0, left: 0, right: 0, bottom: 0,
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transition: 'transform 0.7s ease-in-out', // Transition très douce
                    }}
                  />

                  {/* 2. LE VOILE SOMBRE */}
                  <Box
                    className="overlay"
                    sx={{
                      position: 'absolute',
                      top: 0, left: 0, right: 0, bottom: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Sombre par défaut
                      transition: 'background-color 0.5s ease-in-out',
                    }}
                  />

                  {/* 3. LE CONTENU TEXTUEL */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0, left: 0, right: 0,
                      p: 4, // Padding
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      height: '100%',
                      zIndex: 2, // Toujours au-dessus de l'image et du voile
                    }}
                  >
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        color: '#ffffff', 
                        mb: 2, 
                        fontFamily: '"Playfair Display", serif',
                        fontWeight: 400
                      }}
                    >
                      {service.title}
                    </Typography>
                    
                    <Typography 
                      className="description" // Classe pour le ciblage au survol
                      variant="body2"
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.9)', 
                        fontFamily: '"Montserrat", sans-serif',
                        lineHeight: 1.6,
                        opacity: 0, // Invisible par défaut
                        transform: 'translateY(20px)', // Décalé vers le bas par défaut
                        transition: 'all 0.4s ease-in-out',
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Box>

                </MotionBox>

              </Grid>
            ))}
          </Grid>
        </MotionBox>

      </Container>
    </Box>
  );
};

export default Services;