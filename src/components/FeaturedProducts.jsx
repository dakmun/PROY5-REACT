import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, CircularProgress } from '@mui/material';
import Slider from 'react-slick';
import ProductCard from './ProductCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetchProducts from '../hooks/useFetchProducts';

const FeaturedProducts = () => {
  const { products, loading } = useFetchProducts();

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  // Seleccionar 9 productos aleatorios
  const randomProducts = products
    .sort(() => 0.5 - Math.random())
    .slice(0, 9);

  // Configuración del carrusel
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {breakpoint: 900,
        settings: {
          slidesToShow: 3,  // Mostrar solo 2 slides en pantallas medianas
          slidesToScroll: 1,
          arrows: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,  // Mostrar solo 1 slide en pantallas pequeñas
          slidesToScroll: 1,
          arrows: true,
        }
      }
    ]
  };

  return (
    <Box 
      className="featured-products-slider" 
      sx={{ 
        padding: '0 4rem', // Padding para la versión de escritorio
        backgroundColor: '#333',
        paddingBottom: '8rem',
        '@media (max-width: 1024px)': {
          padding: '0 2rem', // Reduce padding en pantallas medianas
        },
        '@media (max-width: 600px)': {
          padding: '0 1rem', // Ajuste en pantallas pequeñas
          paddingBottom: '4rem',
        },
        '.slick-prev, .slick-next': {
          zIndex: 2, // Asegura que las flechas estén por encima del contenido
          top: '50%', // Centra verticalmente las flechas
          transform: 'translateY(-50%)',
          width: '40px',
          height: '40px',
          backgroundColor: 'orange', // Color de fondo
          borderRadius: '50%', // Hace el fondo de las flechas redondo
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '&::before': {
            fontSize: '20px', // Tamaño del icono de flecha
            color: '#fff', // Color de la flecha
            lineHeight: '1', // Asegura que la flecha esté centrada verticalmente
            textAlign: 'center',
          }
        },
        '.slick-prev': {
          left: '10px', // Ajusta la posición de la flecha izquierda dentro de la tarjeta
        },
        '.slick-next': {
          right: '10px', // Ajusta la posición de la flecha derecha dentro de la tarjeta
        },
      }}
    >
      <Typography variant="h4" align="center" sx={{ color: '#fff', marginBottom: 4 }}>
        Productos Destacados
      </Typography>

      <Slider {...settings} className='slider-featured-products'>
        {randomProducts.map((product) => (
          <Box
            key={product.id}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              maxWidth: { xs: '100%', sm: '90%', md: '90%' }, // Ajuste del ancho máximo en diferentes pantallas
              margin: '0 auto',
              padding: '0',
              '@media (max-width: 600px)': {
                maxWidth: '90%', // Asegura que ocupe casi todo el ancho disponible en pantallas pequeñas
              },
            }}
          >
            <ProductCard product={product} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

FeaturedProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default FeaturedProducts;
