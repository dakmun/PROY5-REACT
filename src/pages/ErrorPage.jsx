import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const ErrorPage = () => {


  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Typography variant="h1" component="div" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" component="div" gutterBottom>
        Página no encontrada
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        Lo sentimos, la página que estás buscando no existe.
      </Typography>
      <Button variant="contained" color="primary"> <Link to="/">  Volver a la página principal </Link>
       
      </Button>
    </Box>
  );
};

export default ErrorPage;