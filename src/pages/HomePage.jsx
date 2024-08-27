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
    <Box sx={{backgroundColor: '#333'}}> 
      <HeroCarousel  />
      </Box>

      <Box>
      <FeaturedProducts products={products} loading={productsLoading} />  
    </Box>

    </> 
  );
};

export default HomePage;