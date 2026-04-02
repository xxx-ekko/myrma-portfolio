import { Box, Container, Typography, Grid, IconButton, Divider, SvgIcon, type SvgIconProps } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LogoMyrma from './LogoMyrma';

// NOUVEAU : Création de l'icône TikTok personnalisée en SVG pur
const TikTokIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 448 512">
    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
  </SvgIcon>
);

// ON DÉFINIT NOS LIENS COMME DANS LA NAVBAR
const footerLinks = [
  { label: 'Accueil', id: 'accueil' },
  { label: 'Le Studio', id: 'studio' },
  { label: 'Nos Services', id: 'services' },
  { label: 'Notre Approche', id: 'approche' }
];

const Footer = () => {
  
  // LA FONCTION DE SCROLL
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

        {/* J'ai bien refermé et structuré le Grid container ici ! */}
        <Grid container spacing={6} sx={{ mb: 8 }}>
        
          <Grid size={{ xs: 12, md: 4 }}>
            {/* LOGO (Version Image PNG) */}
            <Box onClick={() => handleScrollTo('accueil')} sx={{ display: 'flex', alignItems: 'center', mb: 3, cursor: 'pointer' }}>
              <LogoMyrma sx={{ height: 80 }} /> {/* Plus grand dans le Footer */}
            </Box>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 1 }}>Studio d'Architecture d'Intérieur</Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 3 }}>Dakar, Sénégal</Typography>
            <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 500 }}>myrmadesign@gmail.com</Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ mb: 3, fontFamily: '"Playfair Display", serif' }}>Navigation</Typography>
            
            {/* ON UTILISE NOTRE LISTE DE LIENS AVEC LE ONCLICK */}
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
              <IconButton href='https://www.instagram.com/myrmadesign/' sx={{ color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)', '&:hover': { backgroundColor: 'primary.main', borderColor: 'primary.main' } }}>
                <InstagramIcon />
              </IconButton>
              
              {/* NOUVEAU : On intègre notre icône TikTok juste ici */}
              <IconButton href='https://www.tiktok.com/@myrmadesign' sx={{ color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)', '&:hover': { backgroundColor: 'primary.main', borderColor: 'primary.main' } }}>
                <TikTokIcon />
              </IconButton>
              
              <IconButton href="mailto:myrmadesign@gmail.com" sx={{ color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)', '&:hover': { backgroundColor: 'primary.main', borderColor: 'primary.main' } }}>
                <EmailIcon />
              </IconButton>
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