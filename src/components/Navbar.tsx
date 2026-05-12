import { useState, useEffect } from 'react';
import { 
  AppBar, Toolbar, Button, Box, Container, 
  IconButton, Drawer, List, ListItem, ListItemButton, ListItemText 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
// IMPORT DU ROUTEUR
import { useNavigate, useLocation } from 'react-router-dom'; 
import LogoMyrma from './LogoMyrma';

const MotionAppBar = motion.create(AppBar);

const navItems = [
  { label: 'Accueil', id: 'accueil' },
  { label: 'Le Studio', id: 'studio' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Nos Services', id: 'services' },
  { label: 'Notre Approche', id: 'approche' },
  { label: 'Contact', id: 'contact' }
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); 

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // NOUVEAU : On détecte si on est sur la page portfolio
  const isPortfolioPage = location.pathname === '/portfolio';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleScrollTo = (id: string) => {
    setMobileOpen(false);

    if (id === 'portfolio') {
      navigate('/portfolio');
      window.scrollTo(0, 0);
      return; 
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // NOUVEAU : On crée une condition combinée pour le style
  // Si on a scrollé OU si on est sur la page portfolio, on applique le style sombre
  const useDarkStyle = scrolled || isPortfolioPage;

  return (
    <>
      <MotionAppBar
        position="fixed"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        sx={{
          backgroundColor: useDarkStyle ? 'rgba(245, 242, 235, 0.95)' : 'transparent',
          boxShadow: useDarkStyle ? '0px 4px 20px rgba(0, 0, 0, 0.05)' : 'none',
          backdropFilter: useDarkStyle ? 'blur(10px)' : 'none',
          transition: 'all 0.4s ease-in-out',
          paddingTop: useDarkStyle ? '0px' : '15px',
          paddingBottom: useDarkStyle ? '0px' : '15px',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            
            {/* LOGO */}
            <Box onClick={() => handleScrollTo('accueil')} sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <LogoMyrma 
                sx={{ 
                  height: { xs: 110, md: 110 }, 
                  transition: 'all 0.4s ease-in-out',
                }} 
              />
            </Box>

            {/* LIENS DESKTOP */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  sx={{
                    color: useDarkStyle ? 'text.primary' : '#ffffff',
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    position: 'relative',
                    backgroundColor: 'transparent',
                    transition: 'color 0.4s ease-in-out',
                    '&::after': {
                      content: '""', position: 'absolute', width: '0%', height: '1px', bottom: 0, left: '50%', transform: 'translateX(-50%)',
                      backgroundColor: useDarkStyle ? 'primary.main' : '#ffffff',
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

            {/* BOUTON MENU HAMBURGER MOBILE */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ 
                display: { md: 'none' },
                color: useDarkStyle ? 'text.primary' : '#ffffff',
                transition: 'color 0.4s ease-in-out'
              }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>

          </Toolbar>
        </Container>
      </MotionAppBar>

      {/* LE TIROIR MOBILE (DRAWER) */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 250,
            backgroundColor: '#F5F2EB',
            color: '#231F1C'
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: 'text.primary' }}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Box>
        
        <List sx={{ pt: 5 }}>
          {navItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton 
                onClick={() => handleScrollTo(item.id)}
                sx={{ textAlign: 'center', py: 2 }}
              >
                <ListItemText 
                  primary={item.label} 
                  primaryTypographyProps={{ 
                    fontFamily: '"Montserrat", sans-serif', 
                    fontSize: '1.1rem',
                    fontWeight: 500
                  }} 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;