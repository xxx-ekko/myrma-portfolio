import { Box, type BoxProps } from '@mui/material';
// On importe notre nouvelle image ! 
import logoImg from '../assets/logo_gold.png';

// On utilise BoxProps pour pouvoir lui passer des styles (sx) depuis la Navbar ou le Footer
const LogoMyrma = (props: BoxProps) => {
  return (
    <Box
      component="img"
      src={logoImg}
      alt="Myrma Design"
      {...props} // On injecte les propriétés reçues (très important pour la taille)
      sx={{
        // On s'assure que l'image garde toujours ses proportions
        objectFit: 'contain',
        ...props.sx 
      }}
    />
  );
};

export default LogoMyrma;