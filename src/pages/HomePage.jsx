import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import FeaturedProducts from '../components/FeaturedProducts';
import Categories from '../components/Categories';
import useFetchProducts from '../hooks/useFetchProducts';
import useFetchCategories from '../hooks/useFetchCategories';
import { Box, CircularProgress } from '@mui/material';

const HomePage = () => {
  const { products, loading: productsLoading } = useFetchProducts();

  



  return (
   <>
    <Box sx={{
      position: 'relative',
      top: '56px',
      backgroundColor: '#333'}}> 
      <HeroCarousel  />
      </Box>

      <Box
  sx={{
    position: 'relative',
    top: '3rem',
zIndex: 1,
    backgroundColor: '#333',

    overflow: 'visible',
    //  backgroundColor: '#333',

    paddingBottom: '5rem',

  }}
>
  <FeaturedProducts products={products} loading={productsLoading} />
</Box>


    </> 
  );
};

export default HomePage;