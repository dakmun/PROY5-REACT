import React from 'react';
import { Box, MenuItem, Select, FormControl, InputLabel, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SubcategoryMenu = ({ subcategories, selectedSubcategory, onSelectSubcategory }) => {
  return (
    <Box sx={{ marginBottom: 4 }}>
      <style> {`      
.css-1a29ihy-MuiPaper-root-MuiPopover-paper-MuiMenu-paper {
            background-color: #1A1A1A;
            color: #FFF;
          }

.css-amyjbz-MuiButtonBase-root-MuiMenuItem-root:hover {
            background-color: orange;
            color: #FFF;
          }


 .css-a2d4cr {
            background-color: #1A1A1A;
            color: #FFF;

          }

..css-1jrpx8b:hover {
            background-color: orange;
            color: #FFF;
          }
      `}
      </style>



      <FormControl 
        fullWidth
        sx={{


          '& .MuiInputBase-root': {
            backgroundColor: '#1A1A1A', // Fondo oscuro
            color: '#FFF', // Texto blanco
            borderColor: '#FF8C00', // Borde naranja
          },
          '& .MuiInputLabel-root': {
            color: '#FF8C00', // Etiqueta color naranja
            zIndex: 1, // Corregir superposición de texto
            backgroundColor: '#1A1A1A', // Fondo para el texto de la etiqueta
            padding: '0 4px', // Añadir espacio a los lados del texto
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FF8C00', // Borde naranja cuando no está enfocado
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FF8C00', // Borde naranja al pasar el mouse
          },
   legend: { display: 'none' }, // Ocultar el título del campo
        }}
      >

        <Select
          labelId="subcategory-select-label"
          value={selectedSubcategory}
          displayEmpty
          label="Seleccionar Subcategoría"
          onChange={(e) => onSelectSubcategory(e.target.value)}
          sx={{
            '& .MuiMenuItem-root': {
              color: '#000', // Texto negro por defecto
            },
            '& .MuiMenuItem-root:hover': {
              backgroundColor: 'rgba(255, 140, 0, 0.8)', // Fondo naranja con mayor opacidad al hacer hover
              color: '#FFF', // Texto blanco al hacer hover
            },
            '& .MuiMenuItem-root.Mui-selected': {
              backgroundColor: 'rgba(255, 140, 0, 0.8)', // Fondo naranja con mayor opacidad cuando está seleccionado
              color: '#FFF', // Texto blanco cuando está seleccionado
            },
          }}
        >
          <MenuItem value="">
            <Typography sx={{ color: selectedSubcategory ? '#FF8C00' : '#AAA' }}>
              {selectedSubcategory ? 'Ver Todos' : 'Selecciona una subcategoría'}
            </Typography>
          </MenuItem>
          {subcategories.map((subcategory) => (
            <MenuItem  key={subcategory} value={subcategory}> 
                {subcategory.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

SubcategoryMenu.propTypes = {
  subcategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedSubcategory: PropTypes.string.isRequired,
  onSelectSubcategory: PropTypes.func.isRequired,
};

export default SubcategoryMenu;

