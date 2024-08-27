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

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
      <Card 
        className='product-card-container'
        sx={{ 
          maxWidth: 345, 
          margin: '10px', 
          textAlign: 'webkit-center', 
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
            aspectRatio: '1/1',
            margin: '0',
          },
        }}
      >
        <CardMedia
          sx={{ width: '200px', height: 'auto', textAlign: 'webkit-center', maxHeight: '200px', minHeight: '200px'}}
          component="img"
          height="auto"     
          image={product.images[0]}
          alt={product.title}
          className='product-img'        
        />
        <style>{`
          .product-img {
            object-fit: contain;
          }

          .category-product-card .product-title {
            font-size: 0.8rem; /* Cambia el tamaño de la fuente solo en CategoryPage */
          }
          
          .product-card-container:hover .product-title {
            color: orange;
            text-decoration: underline;
            font-weight: bold;
            font-size: 1rem;
          }
        `}</style>
        <CardContent sx={{padding: '0px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>  

          <Typography variant="h6" color="#333" 
            sx={{ marginBottom: 2 , fontSize: '0.8rem', color: '#333', opacity: '0.7' }}
          >
            {transformSlug(product)}
          </Typography>
   
          <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
            <Typography 
              className='product-title'
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
                  fontSize: '1.15rem',
                },
              }}
            >
              {product.title.slice(0, 20)}
            </Typography>
          </Link>

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

export default ProductCard;
