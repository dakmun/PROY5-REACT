import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Typography, CircularProgress, Grid, Paper, CardMedia } from '@mui/material';
import PropTypes from 'prop-types';

const Categories = ({ loading: propsLoading }) => {
  const { slug } = useParams();
  const [categoriesWithImages, setCategoriesWithImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const mainCategories = [
    { name: 'Women clothes', slug: 'women-clothes', subcategories: ['womens-dresses', 'tops', 'womens-bags', 'womens-jewellery', 'womens-shoes'] },
    { name: 'Men clothes', slug: 'men-clothes', subcategories: ['mens-shirts', 'mens-shoes'] },
    { name: 'Watches', slug: 'watches', subcategories: ['mens-watches', 'womens-watches'] },
    { name: 'Beauty & Care', slug: 'beauty-care', subcategories: ['beauty', 'skin-care', 'fragrances'] },
    { name: 'Electronics', slug: 'electronics', subcategories: ['laptops', 'smartphones', 'tablets', 'mobile-accessories'] },
    { name: 'Home & Living', slug: 'home-living', subcategories: ['furniture', 'home-decoration', 'kitchen-accessories'] },
    { name: 'Sports & Outdoor', slug: 'sports-outdoor', subcategories: ['sports-accessories', 'sunglasses'] },
    { name: 'Vehicles', slug: 'vehicles', subcategories: ['vehicle', 'motorcycle'] },
    { name: 'Groceries', slug: 'groceries', subcategories: ['groceries'] },
  ];

  useEffect(() => {
    const fetchCategoryImages = async () => {
      try {
        const categoriesWithImagesPromises = mainCategories.map(async (category) => {
          const response = await fetch(`https://dummyjson.com/products/category/${category.subcategories[0]}`);
          const data = await response.json();
          const imageUrl = data.products[0]?.images[0] || ''; 
          return { ...category, imageUrl };
        });

        const results = await Promise.all(categoriesWithImagesPromises);
        setCategoriesWithImages(results);
      } catch (error) {
        console.error('Error fetching category images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryImages();
  }, []);

  if (loading || propsLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 4, backgroundColor: '#333' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: '#fff', marginTop: 4, marginBottom: 4 }}>
        Categorías
      </Typography>
      <Grid container spacing={4}>
        {categoriesWithImages.map((category) => (
          <Grid item key={category.slug} xs={6} sm={4} md={3} lg={2}>
            <Link to={`/category/${category.slug}`} style={{ textDecoration: 'none' }}>
              <Paper elevation={4} 
              sx={{ 
                aspectRatio: '1/1',
                display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 0,
                textAlign: 'center', "&:hover": { backgroundColor: '#f2f2f2' } }}> 
               <CardMedia component="img"
               sx={{ 
                
                 height: '180px', objectFit: 'contain', objectPosition: 'center',
                  position: 'unset',
                  marginBottom: 1,
                }}

               image={category.imageUrl} alt={category.name} />
                <Typography variant="h6" color="text.secondary" 
                sx={{
                  marginTop: 0,
                  marginBottom: 0,
                  color: '#333',
                }}>
                  {category.name}
                </Typography>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};


Categories.displayName = 'Categories';


Categories.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Categories;
