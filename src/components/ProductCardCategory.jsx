import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

// Función para transformar el slug
const transformSlug = (product) => {
  return product.category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const ProductCardCategory = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
      <Card 
        className='category-product-card-container'
        sx={{ 
          maxWidth: 345, 
          margin: '10px', 
          textAlign: 'center', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          '&:hover': {
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
            transform: 'scale(1.05)',
            transition: 'all 0.3s',
          },
          '@media (max-width: 600px)': {
            margin: '0',
            width: '100%', // Ocupa todo el ancho disponible
          },
        }}
      >
        <CardMedia
          sx={{ width: '100%', height: 'auto', textAlign: 'center', maxHeight: '200px', minHeight: '200px'}}
          component="img"
          image={product.images[0]}
          alt={product.title}
          className='category-product-img'        
        />
   
        <CardContent sx={{padding: '0px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>  

          <Typography variant="h6" color="#333" 
            sx={{ marginBottom: 2 , fontSize: '0.8rem', color: '#333', opacity: '0.7' }}
          >
            {transformSlug(product)}
          </Typography>
   
          <Typography 
            className='category-product-title'
            gutterBottom 
            variant="h6"  
            sx={{ 
              color: '#333', 
              opacity: 0.8, 
              textDecoration: 'none', 
              '&:hover': { 
                color: 'orange', 
                textDecoration: 'underline' 
              },
              '@media (max-width: 600px)': {
                fontSize: '0.8rem', // Ajusta el tamaño para pantallas pequeñas
              },
            }}
          >
            {product.title.slice(0, 20)}
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
            <Typography 
              variant="h5"  
              sx={{ 
                margin: 0, 
                color: '#333', 
                opacity: '0.7', 
                fontWeight: 'bold',
                '@media (max-width: 600px)': {
                  fontSize: '1rem',
                },
              }} 
            >
              ${(product.price - (product.price * product.discountPercentage / 100)).toFixed(2)}
            </Typography>

            <Typography 
              variant="h6"  
              sx={{ 
                margin: 0, 
                textDecoration: 'line-through',
                color: '#333', 
                opacity: '0.7', 
                fontWeight: 'bold',
                '@media (max-width: 600px)': {
                  flexDirection: 'column',
                  fontSize: '0.7rem',
                },
              }} 
            >
              ${product.price.toFixed(2)}
            </Typography>
          </Box>
         
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Rating 
              size='small'
              name="read-only" 
              value={product.rating} 
              readOnly 
            />
            <Typography 
              variant="body1" 
              sx={{ 
                marginLeft: 1, 
                color: '#333', 
                opacity: '0.7', 
                fontSize: '0.8rem',
                '@media (max-width: 600px)': {
                  display: 'none',
                },
              }}
            >
              {`(${product.reviews.length} Reviews)`}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCardCategory;
