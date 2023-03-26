import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Toolbar, ImageListItem, Typography } from '@mui/material';
import {
  LocalShipping,
  Person,
  Search,
  ShoppingBag,
  Brightness7,
  Brightness4,
} from '@mui/icons-material';
import { handleDarkModeChange } from '../../reducer/theme.reducer';

function MidHeader() {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.theme);

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

            <Box onClick={() => dispatch(handleDarkModeChange())}>
              <Typography>{darkMode ? 'Light Mode' : 'Dark Mode'} </Typography>
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </Box>
          </Toolbar>
        </Toolbar>
      </Box>
    </div>
  );
}

export default MidHeader;
