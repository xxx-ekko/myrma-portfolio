import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import LogoMyrma from './LogoMyrma';

const MotionAppBar = motion(AppBar);

// NOUVEAU : On structure nos liens avec leur ID de destination
const navItems = [
  { label: 'Accueil', id: 'accueil' },
  { label: 'Le Studio', id: 'studio' },
  { label: 'Nos Services', id: 'services' },
  { label: 'Notre Approche', id: 'approche' },
  { label: 'Contact', id: 'contact' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // NOUVEAU : La fonction magique pour le défilement fluide
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // On fait défiler jusqu'à l'élément en douceur
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <MotionAppBar
      position="fixed"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      sx={{
        backgroundColor: scrolled ? 'rgba(245, 242, 235, 0.95)' : 'transparent',
        boxShadow: scrolled ? '0px 4px 20px rgba(0, 0, 0, 0.05)' : 'none',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.4s ease-in-out',
        paddingTop: scrolled ? '0px' : '15px',
        paddingBottom: scrolled ? '0px' : '15px',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          
          <Box 
            onClick={() => handleScrollTo('accueil')} // Clique sur le logo = retour en haut
            sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}
          >
            <LogoMyrma sx={{ fontSize: { xs: 35, md: 45 }, color: scrolled ? 'primary.main' : '#ffffff', transition: 'color 0.4s ease-in-out' }} />
            <Typography variant="h6" sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 600, letterSpacing: '0.1em', color: scrolled ? 'text.primary' : '#ffffff', transition: 'color 0.4s ease-in-out', display: { xs: 'none', sm: 'block' } }}>
              MYRMA
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => handleScrollTo(item.id)} // On attache la fonction au clic
                sx={{
                  color: scrolled ? 'text.primary' : '#ffffff',
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  position: 'relative',
                  backgroundColor: 'transparent',
                  transition: 'color 0.4s ease-in-out',
                  '&::after': {
                    content: '""', position: 'absolute', width: '0%', height: '1px', bottom: 0, left: '50%', transform: 'translateX(-50%)',
                    backgroundColor: scrolled ? 'primary.main' : '#ffffff',
                    transition: 'width 0.3s ease-in-out, background-color 0.4s ease-in-out',
                  },
                  '&:hover::after': { width: '100%' },
                  '&:hover': { backgroundColor: 'transparent' }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </MotionAppBar>
  );
};

export default Navbar;