import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Drawer, List, ListItem, ListItemText, Divider, useTheme, useMediaQuery, Button, Slide } from '@mui/material';
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
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Scroll down
        setShowNavbar(false);
      } else {
        // Scroll up
        setShowNavbar(true);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        <Link to="/" style={{ textDecoration: 'none' }}>
      <Typography variant="h6"  sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center' , padding: '0.5rem', borderRadius: '0.5rem' , opacity: '1' , color: 'orange' }}>
<StoreIcon/> LOGO
</Typography>
</Link>
      </Toolbar>
      <Divider />
      <List>
        {categories.map((category) => (
          <ListItem button 
            onClick={() => {
              toggleDrawer(false);
              window.location.reload();
            }}
            key={category.name}>
            <Link to={`/category/${category.slug}`}>
              <ListItemText primary={category.name} sx={{ color:'#fff', '&:hover': { color: 'orange', textDecoration: 'underline' } }} />
            </Link> 
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
<style>{`
.categories-button-link, .categories-links {
  color: #fff;
  text-decoration: none;
  opacity: 0.95;
  padding: 0.5rem;
}

.categories-button-link:hover, .categories-links:hover {
  color: orange;
  text-decoration: underline;

}

}`}</style>





      <Slide in={showNavbar} direction="down">
        <AppBar position="fixed" sx={{ backgroundColor: '#1b1b1b', color: '#fff', transition: '0.3s' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {isMobile && (
              <>
                <IconButton 
                  sx={{  '&:focus': { outline: 'none' }, 'focus-visible': { outline: 'none' } ,color: '#fff' }}
                  edge="start" aria-label="menu" onClick={toggleDrawer(true)}>
                  <MenuIcon />
                </IconButton>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Typography variant="h6" sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center' , padding: '0.5rem', borderRadius: '0.5rem' , opacity: '1' , color: 'orange' }}>
                    <StoreIcon/> LOGO
                  </Typography>
                </Link>
              </>
            )}
            {!isMobile && (
              <>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Typography variant="h6"  sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center' , padding: '0.5rem', borderRadius: '0.5rem' , opacity: '1' , color: 'orange' }}>
                    <StoreIcon/> LOGO
                  </Typography>
                </Link>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    <Typography 
                      sx={{ 
                        '&:hover': { color: 'orange', textDecoration: 'underline', textDecorationColor: 'orange', textDecorationThickness: '2px', textDecorationStyle: 'solid' }, 
                        color: '#fff', 
                        textDecoration: 'none', 
                        opacity: '0.95', 
                        padding: '0.5rem', 
                        borderRadius: '0.5rem'
                      }}
                      variant="h6">
                      Home
                    </Typography>
                  </Link>
                  <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="categories-item">
                    <Button 
                      onClick={handleMouseLeave}
                      sx={{ '&:hover': { color: 'orange', textDecoration: 'underline', textDecorationColor: 'orange', textDecorationThickness: '2px', textDecorationStyle: 'solid', backgroundColor: 'transparent' }, color: '#fff', textDecoration: 'none', opacity: '0.95', padding: '0.5rem', borderRadius: '0.5rem' }}>
                      <Link className='categories-button-link' onClick={handleMouseLeave} to="/categories" >
                        Categorías 
                      </Link> 
                    </Button> 
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
                        }}>
                        {categories.map((category) => (
                          <Link 
                            className='categories-links'
                      
                            onClick={() => {
                              toggleDrawer(false);
                              window.location.reload();
                              handleMouseLeave(true);
                            }}

                            key={category.slug} 
                            sx={{ fontSize: '1.5rem', cursor: 'pointer', color: '#fff', display: 'inline-flex', textDecoration: 'none', width: 'fit-content', '&:hover': { color: 'orange', textDecoration: 'underline' } }}
                            to={`/category/${category.slug}`} 
                            style={{ textDecoration: 'none' }}>
                            <Typography>
                              {category.name}
                            </Typography>
                          </Link>
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
              <IconButton sx={{ color: '#fff' }}>
                <ShoppingCartIcon />
              </IconButton>
            </Box>
          </Toolbar>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)} onClick={toggleDrawer(false)}>
            {drawer}
          </Drawer>
        </AppBar>
      </Slide>
    </>
  );
};

export default Navbar;
