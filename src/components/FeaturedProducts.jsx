import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, CircularProgress } from '@mui/material';
import Slider from 'react-slick';
import ProductCard from './ProductCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetchProducts from '../hooks/useFetchProducts';

const FeaturedProducts = () => {
  const { products, loading } = useFetchProducts(); // Llama al hook dentro del componente funcional

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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Box 
      className="featured-products-slider" 
      sx={{ 
        padding: '0 3rem', 
        backgroundColor: '#333',
        paddingBottom: '8rem',
        '@media (max-width: 600px)': {
          padding: '0 1rem',
          paddingBottom: '4rem',
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
              '@media (max-width: 600px)': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }
            }}
          >
            <ProductCard 
              product={product}
              className='product-card-featured'
              style={{  
                margin: '10px',  
                textAlign: 'center', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'flex-start', 
                alignItems: 'center',
                '@media (max-width: 600px)': {
                  maxWidth: '350px',
                  margin: '0',
                },
              }}
            />
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
