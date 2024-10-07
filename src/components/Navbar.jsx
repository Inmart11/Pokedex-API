import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pokedex
        </Typography>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
