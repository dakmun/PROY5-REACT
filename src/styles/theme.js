import { createTheme } from '@mui/material/styles';
import '@fontsource/montserrat';

const theme = createTheme({

  typography: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 16,
    h1: { fontSize: '2.5rem' },
    h2: { fontSize: '2rem' },
    h3: { fontSize: '1.75rem' },
    h4: { fontSize: '1.5rem' },
    h5: { fontSize: '1.25rem' },
    h6: { fontSize: '1rem' },

  },


components: {
MuiButton: {

    styleOverrides: {
      root: {
        textTransform: 'none',
        borderRadius: 0,
        ':focus-visible': { outline: 'none' },
        ':focus': { outline: 'none' },
  
 

  
      },
    },

      variants: [

        {
          props: { variant: 'contained', color: 'primary' },
          style: {
                  textTransform: 'none',
                  borderRadius: 0,
                  ':focus-visible': { outline: 'none' },
                  ':focus': { outline: 'none' },
                  ":hover": { backgroundColor: '#FF8C00' },
                  },
        },

        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
                  textTransform: 'none',
                  borderRadius: 0,
                  ':focus-visible': { outline: 'none' },
                  ':focus': { outline: 'none' },
                  ":hover": { backgroundColor: '#333' },
                  },
        },
      ],
    },

    MuiCard: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            border: '1px solid #333',
            borderRadius: 0,
          },
        },
      ],
    },
  },

    MuiCardMedia: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            borderRadius: 0,
          },
        },
      ],
    },

    MuiPaper: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            borderRadius: 0,
          },
        },
      ],
    },

    MuiTypography: {
      root: {
        fontFamily: 'Montserrat, sans-serif',
      },
    },


  palette: {
  

   

    primary: {
      main: '#FF8C00',
    },

    secondary: {
      main: '#333',
    },

    error: {
      main: '#f44336',
    },

    warning: {
      main: '#ff9800',
    },

    info: {
      main: '#2196f3',
    },

    success: {
      main: '#4caf50',
    },

    divider: '#f2f2f2',

    text: {
      primary: '#fff',
      secondary: '#fff',
      disabled: '#ccc',
      hint: '#ccc',
    },

  typography: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 16,
    h1: { fontSize: '2.5rem' },
    h2: { fontSize: '2rem' },
    h3: { fontSize: '1.75rem' },
    h4: { fontSize: '1.5rem' },
    h5: { fontSize: '1.25rem' },
    h6: { fontSize: '1rem' },
  },

 background: {
   default: '#fff',
    paper: '#f2f2f2',
    black: '#333',
  },

  shape: {  
    borderRadius: 0,
  },

  shadows: [
    'none',
    '0 6px 18px rgba(0,0,0,0.3)',
  ],

  spacing: 8,

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },

  },

});






export default theme;
