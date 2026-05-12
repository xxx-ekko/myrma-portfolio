import { useState } from "react";
import { Box, Container, Typography, Button, Grid, Card, CardMedia } from '@mui/material';
import { motion, AnimatePresence } from "framer-motion";

const imageFiles = import.meta.glob<{ default: string }>('../assets/portfolio/*/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}', { eager: true });

// 1. On génère les données de base
let portfolioData = Object.keys(imageFiles).map((path, index) => {
  const parts = path.split('/');
  const category = parts[parts.length - 2]; 

  return {
    id: index + 1,
    category: category,
    imgUrl: imageFiles[path].default,
  };
});

// 2. L'ALGORITHME DE MÉLANGE (Fisher-Yates Shuffle) avec les "Generics" de TypeScript
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // On échange les positions
  }
  return shuffled;
};

// 3. On mélange notre tableau une seule fois au chargement du fichier !
portfolioData = shuffleArray(portfolioData);

// 4. On récupère les catégories, et on les TRIE par ordre alphabétique (.sort)
const uniqueCategories = [...new Set(portfolioData.map(item => item.category))].sort();
const portfolioCategories = ['Tout', ...uniqueCategories];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tout");

  const filteredData =
    selectedCategory === "Tout"
      ? portfolioData
      : portfolioData.filter((item) => item.category === selectedCategory);

  return (
    <Box id="portfolio" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#F5F2EB", minHeight: '100vh' }}>
      <Container maxWidth="xl">
        
        {/* EN-TÊTE */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h2" sx={{ fontFamily: '"Playfair Display", serif', mb: 2, color: "#231F1C" }}>
            Notre Portfolio
          </Typography>
          <Box sx={{ width: "60px", height: "3px", backgroundColor: "#C5A059", mx: "auto", mb: 4 }} />
          <Typography variant="body1" sx={{ color: "#231F1C", maxWidth: "600px", mx: "auto", opacity: 0.8 }}>
            Découvrez nos dernières réalisations. Chaque projet est une histoire unique, pensée pour allier esthétisme et fonctionnalité.
          </Typography>
        </Box>

        {/* FILTRES DYNAMIQUES */}
        <Box sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "center" }, gap: 2, mb: 6, overflowX: "auto", pb: 2, "&::-webkit-scrollbar": { height: "4px" }, "&::-webkit-scrollbar-thumb": { backgroundColor: "#C5A059", borderRadius: "4px" }}}>
          {portfolioCategories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              sx={{
                whiteSpace: "nowrap",
                fontFamily: '"Montserrat", sans-serif',
                color: selectedCategory === category ? "#ffffff" : "#231F1C",
                backgroundColor: selectedCategory === category ? "#C5A059" : "transparent",
                border: `1px solid ${selectedCategory === category ? "#C5A059" : "#231F1C"}`,
                borderRadius: "30px",
                px: 3,
                py: 1,
                transition: "all 0.3s ease",
                "&:hover": { backgroundColor: selectedCategory === category ? "#C5A059" : "rgba(35, 31, 28, 0.05)" },
              }}
            >
              {category}
            </Button>
          ))}
        </Box>

        {/* GRILLE D'IMAGES */}
        <Grid container spacing={4}>
          <AnimatePresence mode="popLayout">
            {filteredData.map((item) => (
              <Grid
                key={item.id}
                size={{ xs: 12, sm: 6, md: 4 }}
                component={motion.div}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Card elevation={0} sx={{ borderRadius: 2, overflow: "hidden", position: "relative", backgroundColor: "transparent", cursor: "pointer", "&:hover .overlay": { opacity: 1 }, "&:hover .image": { transform: "scale(1.05)" }}}>
                  <Box sx={{ overflow: "hidden" }}>
                    <CardMedia className="image" component="img" height="350" image={item.imgUrl} alt={`Projet ${item.category}`} sx={{ transition: "transform 0.5s ease" }} />
                  </Box>
                  
                  <Box className="overlay" sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(35, 31, 28, 0.6)", opacity: 0, transition: "opacity 0.3s ease", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", p: 3, textAlign: "center" }}>
                    <Typography variant="h6" sx={{ color: "#ffffff", fontFamily: '"Montserrat", sans-serif', textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 500 }}>
                      {item.category}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>

      </Container>
    </Box>
  );
};

export default Portfolio;