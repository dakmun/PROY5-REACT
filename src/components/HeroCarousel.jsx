//../components/HeroCarousel.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import {
  Container, Typography, Button, Box,
  sliderClasses
} from '@mui/material';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const HeroCarousel = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=0')
      .then(response => response.json())
      .then(data => {
        const randomProducts = data.products.sort(() => 0.5 - Math.random()).slice(0, 9);  // Seleccionar 4 productos aleatorios
        setProducts(randomProducts);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const settings = {
    
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    customPaging: (i) => (
      <div
        style={{
          width: '12px',
          height: '12px',
          backgroundColor: '#ffbe0b',
          borderRadius: '50%',
          display: 'inline-block',
          margin: '0 4px',
          opacity: 0.6,
        }}
      />
    ),

    nextArrow:   <ArrowForwardIosIcon style={{ color: 'white' }} />,
    prevArrow:   <ArrowBackIosIcon style={{ color: 'white' }} />,
    dotsClass: 'slick-dots custom-dots',        
    
  };



  return (
    <>
    <style>{`

.slick-dots.custom-dots {
    position: absolute;
    bottom: 25%;
    width: 100%;
    list-style: none;
    text-align: center;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
   
}

.slick-dots.custom-dots li {
    width: 18px;
    height: 18px;
    background-color: #ffbe0b;
    border-radius: 50%;
    display: inline-block;
  
    opacity: 0.4;
    cursor: pointer;
    transition: opacity 0.3s;
}

.slick-dots.custom-dots li.slick-active {
    opacity: 1;
    background-color: #ffbe0b;
    transform: scale(1.1);
}

.slick-slider.custom-slider .slick-list {
    position: relative;
    height: 100vh;
 
    }

.slick-slider.custom-slider {
    position: relative;
    height: 100vh;
    background: #333;
    }

@media (max-width: 600px) {

.slick-slider.custom-slider .slick-list {
align-content: start;
    }

.slick-dots.custom-dots li {
display: none;
}

.product-img {
object-fit: contain;
}

    }





`}</style>

    <Slider {...settings}
    className='custom-slider'

    >
      {products.map(product => (
        <Box key={product.id}

     
          
          sx={{
            display: 'flex !important',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100%',           

     
            background: 'linear-gradient(90deg, #070403 0%, #c9691f 100%)',  // Gradiente de fondo
            color: 'white',
        
            height: '80vh',
            overflow: 'hidden',

           ' @media (max-width: 600px)': {
            
              height: '90vh',
              flexDirection: 'column-reverse',
              justifyContent: 'flex-end',
           },
            
          }}>
          <Box sx={{ width: '40%' ,

'@media (max-width: 600px)': {
              width: '100%',
              padding: '20px',
              textAlign: 'center',
            },

          }}>
            <Typography variant="caption" sx={{
              backgroundColor: '#ffbe0b',
              padding: '5px 10px',
              borderRadius: '20px',
              marginBottom: '10px',
              display: 'inline-block'
            }}>
              Opening Sale Discount 50%
            </Typography>
            <Typography variant="h3" 
            sx={{ fontWeight: 'bold' , 

            '@media (max-width: 600px)' : { 


  fontSize: '1.2rem' , lineHeight: '1.5', marginBottom: '10px',
}, }}>
              {product.title}


            </Typography>
            <Typography variant="body1" sx={{ marginY: 2, opacity: 0.8, 

'@media (max-width: 600px)' : { 

  display: 'none',
  height: '80vh',
  fontSize: '1.2rem' , lineHeight: '1.5', marginBottom: '10px',
},

             }}>
              {product.description.slice(0, 80)}...
            </Typography>
            <Button variant="contained" color="error" component={Link} to={`/product/${product.id}`}>
              Shop now
            </Button>
          </Box>
          <Box 
    

          
          
          sx={{
            className: 'product-img',
          '@media (max-width: 600px)': {
              width: '100%',
              height: '50vh',
              padding: '20px',
              textAlign: '-webkit-center',
            },
          
          }}>
            <img
              src={product.images[0]}
              alt={product.title}
              style={{
                width: '300px',
                
                height: '300px',
                borderRadius: '8px',
                transform: 'rotate(-10deg)',
                objectFit: 'contain',
              }}/>
          </Box>
        </Box>
      ))}
    </Slider>
    </>
  );
};

export default HeroCarousel;
