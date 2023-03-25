import React from 'react';
import {
  Box,
  Toolbar,
  ImageListItem,
  Typography,
} from '@mui/material';
import {
  LocalShipping,
  Person,
  Search,
  ShoppingBag,
} from '@mui/icons-material';

function MidHeader() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <ImageListItem>
            <img className='brand-logo' src='./logohappilo.png' alt='Logo' />
          </ImageListItem>
          <ImageListItem />
          <Toolbar className='mid-header' sx={{ display: 'flex' }}>
            <Box>
              <Typography>Search</Typography>
              <Search />
            </Box>
            <Box>
              <Typography>Track Order </Typography>
              <LocalShipping />
            </Box>
            <Box>
              <Typography>Sign in | Sign up </Typography>
              <Person />
            </Box>
            <Box>
              <Typography>Sign in | Sign up </Typography>
              <ShoppingBag />
            </Box>
          </Toolbar>
        </Toolbar>
      </Box>
    </div>
  );
}

export default MidHeader;
