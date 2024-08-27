import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress, Grid } from '@mui/material';
import ProductCardCategory from '../components/ProductCardCategory';
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
    <>
      <style>{`
        /* Estilos específicos para ProductCard en CategoryPage */
        .category-product-card .css-ci2o3a-MuiPaper-root-MuiCard-root {
          aspect-ratio: auto; 
          height: auto; 
          padding: 10px; /* Añadir padding para evitar superposición */
          max-width: 70%; /* Asegura que no se extiendan más allá del contenedor */
        }

        /* Cambiar font-size del título del producto */
        .category-product-card .MuiTypography-h5 {
          font-size: 0.9rem; /* Ajusta el tamaño según tus necesidades */
        }

        /* Añadir margen entre las tarjetas de producto */
        .category-product-card {
          margin-bottom: 16px;
        }
      `}</style>

      <Box sx={{
        position: 'relative',
        top: '5rem',
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

        <Grid container spacing={2}
          sx={{
            justifyContent: 'center',
            '@media (max-width: 600px)': {
              justifyContent: 'center',
              textAlign: '-webkit-center', // Alinear el contenido al centro en pantallas pequeñas
            }
          }}
        >
          {products.map((product) => (
            <Grid item xs={6} sm={4} md={3} key={product.id}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0 8px', // Añadir padding lateral para evitar superposición
                '@media (max-width: 600px)': {
                  padding: '0 4px', // Padding más ajustado en pantallas pequeñas
                  justifyContent: 'inherit',
                }
              }}
            >
              {/* Añadimos la clase personalizada "category-product-card" */}
              <Box className="category-product-card">
                <ProductCardCategory product={product} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default CategoryPage;
