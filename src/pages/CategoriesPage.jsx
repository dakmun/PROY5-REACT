import React from 'react';
import { Box, Typography, Grid, Paper, CircularProgress } from '@mui/material';
import Categories from '../components/Categories';
import useFetchCategories from '../hooks/useFetchCategories';


const CategoriesPage = () => {
    const { categories, loading } = useFetchCategories();
    
    return (
        <Categories categories={categories} loading={loading} />
    );
    };

export default CategoriesPage;