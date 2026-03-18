import { Box, Container, Typography, Grid, IconButton, Divider } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import EmailIcon from '@mui/icons-material/Email';
import LogoMyrma from './LogoMyrma';

// 1. ON DÉFINIT NOS LIENS COMME DANS LA NAVBAR
const footerLinks = [
  { label: 'Accueil', id: 'accueil' },
  { label: 'Le Studio', id: 'studio' },
  { label: 'Nos Services', id: 'services' },
  { label: 'Notre Approche', id: 'approche' }
];

const Footer = () => {
  
  // 2. LA FONCTION DE SCROLL
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box 
      id="contact" 
      component="footer" 
      sx={{ 
        backgroundColor: '#231F1C', 
        color: '#ffffff',
        pt: { xs: 8, md: 12 },
        pb: 4
      }}
    >
      <Container maxWidth="lg">
        
        <Box sx={{ textAlign: 'center', mb: 10, maxWidth: '800px', mx: 'auto' }}>
          <Typography variant="h4" sx={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontWeight: 400, lineHeight: 1.5, color: 'primary.main', mb: 3 }}>
            "Nous travaillons ensemble pour transformer vos idées en espaces uniques, où élégance et confort se rencontrent."
          </Typography>
          <Box sx={{ width: '40px', height: '2px', backgroundColor: 'primary.main', mx: 'auto' }} />
        </Box>

        <Grid container spacing={6} sx={{ mb: 8 }}>
          
          <Grid size={{ xs: 12, md: 4 }}>
            {/* Au clic sur le logo du footer, on remonte tout en haut */}
            <Box onClick={() => handleScrollTo('accueil')} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3, cursor: 'pointer' }}>
              <LogoMyrma sx={{ fontSize: 40, color: '#ffffff' }} />
              <Typography variant="h6" sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 600, letterSpacing: '0.1em' }}>
                MYRMA
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 1 }}>Studio d'Architecture d'Intérieur</Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 3 }}>Dakar, Sénégal</Typography>
            <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 500 }}>contact@myrmadesign.com</Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ mb: 3, fontFamily: '"Playfair Display", serif' }}>Navigation</Typography>
            
            {/* 3. ON UTILISE NOTRE LISTE DE LIENS AVEC LE ONCLICK */}
            {footerLinks.map((item) => (
              <Typography 
                key={item.id} 
                variant="body2" 
                onClick={() => handleScrollTo(item.id)} // L'action de scroll
                sx={{ 
                  color: 'rgba(255,255,255,0.7)', 
                  mb: 1.5, 
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                  '&:hover': { color: 'primary.main' }
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ mb: 3, fontFamily: '"Playfair Display", serif' }}>Suivez-nous</Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 3 }}>Découvrez nos inspirations et nos dernières réalisations sur nos réseaux.</Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton sx={{ color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)', '&:hover': { backgroundColor: 'primary.main', borderColor: 'primary.main' } }}><InstagramIcon /></IconButton>
              <IconButton sx={{ color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)', '&:hover': { backgroundColor: 'primary.main', borderColor: 'primary.main' } }}><PinterestIcon /></IconButton>
              <IconButton href="mailto:contact@myrmadesign.com" sx={{ color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)', '&:hover': { backgroundColor: 'primary.main', borderColor: 'primary.main' } }}><EmailIcon /></IconButton>
            </Box>
          </Grid>

        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 3 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>© 2026 Myrma Design. Tous droits réservés.</Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', cursor: 'pointer', '&:hover': { color: '#ffffff' } }}>Mentions légales & Politique de confidentialité</Typography>
        </Box>

      </Container>
    </Box>
  );
};

export default Footer;