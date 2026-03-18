import { Box, Container, Typography, Grid } from '@mui/material';
import { motion, type Variants } from 'framer-motion';

const MotionBox = motion(Box);
// On a retiré MotionTypography ici car on ne l'utilise pas !

const Presentation = () => {
  const textVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: 'easeOut' } 
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 } 
    }
  };

  return (
    <Box id="studio"
      component="section" 
      sx={{ 
        py: { xs: 10, md: 15 },
        backgroundColor: 'background.default' 
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          
          {/* COLONNE GAUCHE : LE TEXTE (Nouvelle syntaxe MUI v6 avec "size") */}
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Typography 
                variant="h6" 
                color="primary.main" 
                sx={{ mb: 2, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.85rem' }}
              >
                Notre Studio
              </Typography>
              
              <Typography variant="h2" sx={{ mb: 4, color: 'text.primary', lineHeight: 1.2 }}>
                Née de deux regards pour créer une signature unique.
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}>
                Myrma Design est une entreprise d'architecture d'intérieur créée par deux architectes passionnées par la transformation des espaces. Fondée au printemps 2026, notre agence est dédiée à la création d'espaces élégants, fonctionnels et confortables.
              </Typography>

              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}>
                Notre mission est de concevoir des intérieurs à la fois esthétiques, fonctionnels et intemporels. Chaque projet est une collaboration où nous mettons notre sens du détail, notre créativité et notre vision du design au service d'espaces uniques et harmonieux.
              </Typography>
            </MotionBox>
          </Grid>

          {/* COLONNE DROITE : L'IMAGE (Nouvelle syntaxe MUI v6 avec "size") */}
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              sx={{
                position: 'relative',
                height: { xs: '300px', md: '500px' },
                width: '100%',
                boxShadow: '0px 20px 40px rgba(140, 122, 107, 0.15)',
                borderRadius: '2px',
                overflow: 'hidden'
              }}
            >
              <Box 
                component="img"
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop"
                alt="Intérieur élégant"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </MotionBox>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Presentation;