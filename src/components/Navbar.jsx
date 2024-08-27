import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Drawer, List, ListItem, ListItemText, Divider, useTheme, useMediaQuery, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import StoreIcon from '@mui/icons-material/Store';


const categories = [
    {name: 'Women clothes' , slug: 'women-clothes'},
    { name: 'Men clothes', slug: 'men-clothes' },
    { name: 'Watches', slug: 'watches' },
    { name: 'Beauty & Care', slug: 'beauty-care' },
    { name: 'Electronics', slug: 'electronics' },
    { name: 'Home & Living', slug: 'home-living' },
    { name: 'Sports & Outdoor', slug: 'sports-outdoor' },
    { name: 'Vehicles', slug: 'vehicles' },
    { name: 'Groceries', slug: 'groceries' },
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleMouseEnter = () => {
    setMenuOpen(true);

  };

  const handleMouseLeave = () => {
    setMenuOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 250, backgroundColor: '#202020', height: '100%' }}>
      <Toolbar>
      <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center' , padding: '0.5rem', borderRadius: '0.5rem' , opacity: '1' , color: 'orange' }}>
<StoreIcon/> LOGO
</Typography>
      </Toolbar>
      <Divider />
      <List>
        {categories.map((category) => (
          <ListItem button 
          onClick={toggleDrawer(false)}
          component={Link} to={`/category/${category.slug}`}  reloadDocument
          key={category.name}>
            <ListItemText primary={category.name} sx={{ color:'#fff', '&:hover': { color: 'orange', textDecoration: 'underline' } }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (


    <>

        

    
    <AppBar position="static" sx={{ backgroundColor: '#1b1b1b', color: '#fff' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {isMobile && (
           <>
          <IconButton 
          sx={{  '&:focus': { outline: 'none' }, 'focus-visible': { outline: 'none' } ,color: '#fff' }}
          edge="start" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center' , padding: '0.5rem', borderRadius: '0.5rem' , opacity: '1' , color: 'orange' }}>
          <StoreIcon/> LOGO
</Typography>
         </>
        )}
           
    
        {!isMobile && (
<>
<Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center' , padding: '0.5rem', borderRadius: '0.5rem' , opacity: '1' , color: 'orange' }}>
<StoreIcon/> LOGO
</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
             

              <Typography 
                component={Link} to="/"
            sx={{ 
        
                '&:hover': {   color: 'orange',
                    textDecoration: 'underline', textDecorationColor: 'orange', textDecorationThickness: '2px', textDecorationStyle: 'solid'
                 } , color: '#fff', textDecoration: 'none', opacity: '0.95', padding: '0.5rem', borderRadius: '0.5rem'
         }}

            variant="h6" >
             Home
            </Typography>

          <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
          className="categories-item">
            <style> {`
                .categories-item {
                    height: 64px;
                    display: flex;
                    align-items: center;
                    }

             .categories-item:hover .categories-button {
                    
                        color: orange;
          text-decoration: underline;
          font-weight: bold;
          font-size: 1rem;
                    text-underline-position: under;
                  
                }

                `}
            </style>
            <Button 
            onClick={handleMouseLeave}
            component={Link} to='/categories'
         
            sx={{ 
        
                '&:hover': {   color: 'orange',
                    textDecoration: 'underline', textDecorationColor: 'orange', textDecorationThickness: '2px', textDecorationStyle: 'solid', backgroundColor: 'transparent'
                 } , color: '#fff', textDecoration: 'none', opacity: '0.95', padding: '0.5rem', borderRadius: '0.5rem'
         }}

      
            > Categorías </Button>
  
            {menuOpen && (
             <Box
             className='categories-menu'
             sx={{
               position: 'absolute',
               top: 64, 
               left: 0,
               padding: '1.5rem',
               backgroundColor: theme.palette.background.black,
               display: 'flex',
                 flexDirection: 'column',
                 flexWrap: 'wrap',
                 gap: '1rem',
                 zIndex: '1000',
                 maxHeight: '50vh',
                 width: '-webkit-fill-available',
                 alignContent: 'space-evenly',
         
             }}
           >
       
             {categories.map((category) => (
               <Typography 
                onClick={handleMouseLeave}
                 component={Link} to={`/category/${category.slug}`} reloadDocument
               key={category.name} sx={{ fontSize: '1.5rem', cursor: 'pointer', color: '#fff', display: 'inline-flex', textDecoration: 'none', width: 'fit-content' , '&:hover': { color: 'orange', textDecoration: 'underline' } }}>
                 {category.name}
               </Typography>
             ))}
           </Box>
            )}
          </Box>
        </Box>
        </>
        )}
        <Box>
        <IconButton sx={{ color: '#fff' }}>
          <SearchIcon />
        </IconButton>
        <IconButton sx={{color: '#fff' }}>
          <ShoppingCartIcon />
        </IconButton>
        </Box>
      </Toolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)} onClick={toggleDrawer(false)}>
        {drawer}
      </Drawer>
    </AppBar>
    </>
  );
};

export default Navbar;
