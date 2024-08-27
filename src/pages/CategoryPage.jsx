import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress, Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';
import SubcategoryMenu from '../components/SubcategoryMenu';

// Función para transformar el slug
const transformSlug = (slug) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Mapeo de categorías principales a sus subcategorías
const categoryMap = {
  'women-clothes': ['womens-dresses', 'tops', 'womens-bags', 'womens-jewellery', 'womens-shoes'],
  'men-clothes': ['mens-shirts', 'mens-shoes'],
  'watches': ['mens-watches', 'womens-watches'],
  'beauty-care': ['beauty', 'skin-care', 'fragrances'],
  'electronics': ['laptops', 'smartphones', 'tablets', 'mobile-accessories'],
  'home-living': ['furniture', 'home-decoration', 'kitchen-accessories'],
  'sports-outdoor': ['sports-accessories', 'sunglasses'],
  'vehicles': ['vehicle', 'motorcycle'],
  'groceries': ['groceries'],
};



const CategoryPage = () => {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  const subcategories = categoryMap[slug] || [];
 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let productPromises;

        if (selectedSubcategory) {
          productPromises = [fetch(`https://dummyjson.com/products/category/${selectedSubcategory}`)];
        } else {
          productPromises = subcategories.map(subcategory => 
            fetch(`https://dummyjson.com/products/category/${subcategory}`)
          );
        }

        const productResponses = await Promise.all(productPromises);
        const productsArray = await Promise.all(productResponses.map(res => res.json()));
        const combinedProducts = productsArray.flatMap(data => data.products);

        setProducts(combinedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [slug, selectedSubcategory]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{
      padding: '1rem',
      '@media (max-width: 600px)': {
        padding: '12px',
    }
    }}>
      <Typography variant="h4" align="center" gutterBottom>
       {transformSlug(slug)}
      </Typography>

      <SubcategoryMenu 
        subcategories={subcategories}
        selectedSubcategory={selectedSubcategory}
        onSelectSubcategory={setSelectedSubcategory}
      />

      <Grid container 
      sx={{
        '@media (max-width: 600px)': {
          flexBasis: '0',
          padding: '0',
          justifyContent: 'center',
      }
    }}
      
      spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={4} md={3} key={product.id}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 600px)': {
              flexBasis: '0',
              padding: '0',
          }
          }}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryPage;
