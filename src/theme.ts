import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Un beige/brun soutenu, inspiré des ombres du logo
      main: '#8C7A6B', 
    },
    secondary: {
      // Un ton plus clair, terreux
      main: '#BCA89F', 
    },
    background: {
      // La couleur de fond globale, rappelant le travertin clair
      default: '#F5F2EB',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333', // Gris très foncé pour la lisibilité
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      color: '#8C7A6B',
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 400,
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
    },
    // On peut aussi personnaliser les boutons
    button: {
      textTransform: 'none', // Pour éviter que les boutons soient TOUT EN MAJUSCULES (trop agressif pour ce design)
      letterSpacing: '0.05em',
      fontWeight: 500,
    },
  },
  components: {
    // Ici on pourra surcharger les composants MUI plus tard si besoin
  }
});

export default theme;