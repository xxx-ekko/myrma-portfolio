import { Box, Container, Typography, Grid } from '@mui/material';
import { motion, type Variants } from 'framer-motion';

const MotionBox = motion.create(Box);

// Les 4 étapes tirées du PDF
const stepsData = [
  {
    number: "01",
    title: "Écouter le client",
    description: "Comprendre ses besoins, son mode de vie et ses attentes pour poser les fondations du projet."
  },
  {
    number: "02",
    title: "Créer un concept",
    description: "Concevoir sur mesure des espaces à la fois esthétiques et parfaitement fonctionnels."
  },
  {
    number: "03",
    title: "Visualiser en 3D",
    description: "Modéliser l'espace pour que le client puisse se projeter pleinement dans son futur intérieur."
  },
  {
    number: "04",
    title: "Accompagner",
    description: "Suivi du projet jusqu'à la réalisation, avec conseils et ajustements pour un résultat parfait."
  }
];

const Approche = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      }
    }
  };

  const stepVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut' } 
    }
  };

  return (
    <Box id="approche"
      component="section" 
      sx={{ 
        py: { xs: 10, md: 15 },
        backgroundColor: 'background.paper'
      }}
    >
      <Container maxWidth="lg">
        
        {/* EN-TÊTE DE LA SECTION */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h6" color="primary.main" sx={{ mb: 2, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.85rem' }}>
            Notre Méthodologie
          </Typography>
          <Typography variant="h2" sx={{ color: 'text.primary' }}>
            Notre Approche
          </Typography>
        </Box>

        {/* LA GRILLE DES ÉTAPES */}
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Attention, nouvelle syntaxe MUI v6 ! */}
          <Grid container spacing={4}>
            {stepsData.map((step, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                
                <MotionBox
                  variants={stepVariants}
                  sx={{
                    position: 'relative',
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    // On ajoute une petite ligne décorative en haut de chaque bloc
                    borderTop: '2px solid',
                    borderColor: 'primary.main',
                  }}
                >
                  {/* LE NUMÉRO EN FILIGRANE (WATERMARK) */}
                  <Typography
                    sx={{
                      position: 'absolute',
                      top: '-20px', // Le numéro déborde légèrement vers le haut
                      left: '10px',
                      fontSize: '8rem',
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: 700,
                      color: 'primary.main',
                      opacity: 0.08, // Très transparent !
                      zIndex: 0,
                      lineHeight: 1,
                      userSelect: 'none', // Empêche de sélectionner le numéro avec la souris
                    }}
                  >
                    {step.number}
                  </Typography>

                  {/* LE CONTENU DE L'ÉTAPE */}
                  <Box sx={{ position: 'relative', zIndex: 1, mt: 4 }}>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        fontFamily: '"Playfair Display", serif',
                        fontWeight: 600,
                        color: 'text.primary',
                        mb: 2 
                      }}
                    >
                      {step.title}
                    </Typography>
                    
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'text.secondary', 
                        lineHeight: 1.8,
                        fontSize: '0.95rem'
                      }}
                    >
                      {step.description}
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

export default Approche;