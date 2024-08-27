import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress, Card, CardContent, Rating, Button, Avatar, IconButton, Grid, Container, Chip } from '@mui/material';
import { Facebook, Twitter, Instagram} from '@mui/icons-material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import styled from 'styled-components';

// const Thumbnail = styled.div`
//   width: 90px;
//   height: 90px;
//   margin: 0 5px;
//   cursor: pointer;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   transition: border 0.3s;
//   flex-wrap: wrap;

//   &:hover {
//     border: 1px solid #333;


//   }

//   @media (max-width: 600px) {
//   .product-img-thumbnail {
//     width: 50px;
//     height: 50px;
// }
// }






// `;

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
                setSelectedImage(data.images[0]);
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    if (!product) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Typography variant="h5">Producto no encontrado</Typography>
            </Box>
        );
    }

    return (
        <>
<style> {`

.product-img-thumbnail {

    width: 90px;
    height: 90px;
    margin: 0 5px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 8px;
  
    flex-wrap: wrap;
}

.product-img-thumbnail:hover {
    border: 2px solid #ff8c00;
    border-radius: 8px;
}



@media (max-width: 600px) {
    .product-img-thumbnail {
        width: 50px;
        height: 50px;
    }
}
`} </style>

        <Box sx={{ padding: 4,
        position: 'relative',
        top: '5rem',
            
         }}>
            <Card sx={{ display: 'flex', flexDirection: 'row', padding: 4 ,
                '@media (max-width: 600px)': {
                    padding: '0',
                },
            }}>
                <Grid container spacing={2}>
                
                    <Grid item xs={12} md={6}>
               
                        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',
                              '@media (max-width: 600px)': {
                                display: 'none',
                            }
                         }}>
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' ,
                                
                            }}>
                                <img src={selectedImage} alt="Producto" style={{ width: '100%', height: 'auto' }} />
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2, flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap',
                              
                             }}>
                                {product.images.map((image, index) => (
                                    <Box
                                        key={index}
                                        onMouseEnter={() => { setSelectedImage(image) }}
                                        sx={{ 
                                          

                                        }}
                                    >
                                        <img
                                        className='product-img-thumbnail'
                                            key={index}
                                            src={image}
                                            alt={`thumbnail-${index}`}
                                           
                                            
                                            onClick={() => setSelectedImage(image)}
                                        />
                                    </Box>
                                ))}
                            </Box>
                        </Container>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CardContent>

                            <Typography color="#333" gutterBottom variant="h4" component="div">
                                {product.title}
                            </Typography>
                            <Typography variant="body1" color="#333" sx={{ marginTop: 2 }}>
                             {product.brand}
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Rating name="read-only" value={product.rating} readOnly />
                            <Typography variant="body1" color="#333" sx={{ marginLeft: 1 }}>
                            {/* {`(${product.reviews.length} Reviews)`} */}
                            {product.rating}/5.0
                            </Typography>
                            </Box>

                         <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' , gap: 2 }}>

                     
                            <Typography variant="h5" color="#333" sx={{ marginTop: 2 }}>
                                ${(product.price - (product.price * product.discountPercentage / 100)).toFixed(2)}
                            </Typography>

              

                            <Typography variant="h5" color="#333" sx={{ marginTop: 2, textDecoration: 'line-through' }}>
                                ${product.price.toFixed(2)}
                            </Typography>

                            </Box>

                            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',
                                   '@media (min-width: 600px)': {
                                    display: 'none',
                                }
                             }}>
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' ,
                               
                            }}>
                                <img src={selectedImage} alt="Producto" style={{ width: '100%', height: 'auto' }} />
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2, flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap',
                              
                             }}>
                                {product.images.map((image, index) => (
                                    <Box
                                        key={index}
                                        onMouseEnter={() => { setSelectedImage(image) }}
                                        sx={{ 
                                          

                                        }}
                                    >
                                        <img
                                        className='product-img-thumbnail'
                                            key={index}
                                            src={image}
                                            alt={`thumbnail-${index}`}
                                           
                                            
                                            onClick={() => setSelectedImage(image)}
                                        />
                                    </Box>
                                ))}
                            </Box>
                        </Container>
               
                            
                            <Typography variant="body1" color="#333" sx={{ marginTop: 2 ,
                            '@media (max-width: 600px)': {
                                fontSize: '0.8rem',
                            },
                            }}>
                               {product.description}
                            </Typography>
                                
                     
                    
                          
                         
                         
                          
                         
                            <Typography variant="body1" color="#333" sx={{ marginTop: 2 ,    '@media (max-width: 600px)': {
                                fontSize: '0.8rem',
                            },}}>
                                SKU: {product.sku}
                            </Typography>
                            <Typography variant="body1" color="#333" sx={{ marginTop: 2,    '@media (max-width: 600px)': {
                                fontSize: '0.8rem',
                            }, }}>
                                Categoría: {product.category}
                            </Typography>

                          
                
                            <Typography variant="body1" color="#333" sx={{ marginTop: 2,    '@media (max-width: 600px)': {
                                fontSize: '0.8rem',
                            }, }}>
                            {product.stock > 0 ? `${product.stock} In Stock` : 'Out of Stock'}
                            </Typography>
                            <Box sx={{ display: 'flex', marginTop: 2 }}>
                                <Button variant="contained" color="primary" startIcon={<AddShoppingCartIcon />} sx={{ marginRight: 2,    '@media (max-width: 600px)': {
                                fontSize: '0.8rem',
                            }, }}>
                                    Añadir al Carrito
                                </Button>
                                <Button variant="contained" color="secondary" sx={{ color: 'white',    '@media (max-width: 600px)': {
                                fontSize: '0.8rem',
                            }, }}>
                                    Comprar Ahora
                                </Button>
                            </Box>
                            <Box sx={{ display: 'flex', marginTop: 2 }}>
                                <IconButton color="primary">
                                    <Facebook />
                                </IconButton>
                                <IconButton color="primary">
                                    <Twitter />
                                </IconButton>
                                <IconButton color="primary">
                                    <Instagram />
                                </IconButton>
                            </Box>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        </Box>
        </>
    );
};

export default ProductPage;
