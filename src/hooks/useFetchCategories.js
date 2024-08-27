import { useState, useEffect } from 'react';

const useFetchCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/categories');
        const data = await response.json();

        const categoriesWithImages = await Promise.all(
          data.map(async (category) => {
            const categoryResponse = await fetch(`https://dummyjson.com/products/category/${category.slug}`);
            const categoryData = await categoryResponse.json();
            const imageUrl = categoryData.products[0]?.images[0] || ''; // Obtener la imagen del primer producto
            return {
              slug: category.slug,
              name: category.name,
              imageUrl,
            };
          })
        );

        setCategories(categoriesWithImages);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading };
};

export default useFetchCategories;