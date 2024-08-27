// Footer.jsx
import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#1b1b1b', color: '#fff', py: 6 }}
    component="footer">

      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        ¡Gracias por visitarnos!
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Link href="https://www.facebook.com" target="_blank" sx={{ mx: 1 }}>
          Facebook
        </Link>
        <Link href="https://www.twitter.com" target="_blank" sx={{ mx: 1 }}>
          Twitter
        </Link>
        <Link href="https://www.instagram.com" target="_blank" sx={{ mx: 1 }}>
          Instagram
        </Link>
      </Box>
      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
        {'© '}
        {new Date().getFullYear()}
        {' LOGO. Todos los derechos reservados.'}
      </Typography>
    </Box>
  );
};

export default Footer;

