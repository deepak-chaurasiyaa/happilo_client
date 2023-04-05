import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Toolbar, ImageListItem, Typography } from '@mui/material';
import {
  LocalShipping,
  Person,
  Brightness7,
  Brightness4,
} from '@mui/icons-material';
import { handleDarkModeChange } from '../../reducer/theme.reducer';
import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import CartDrawer from '../cart/Cart';

function MidHeader() {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <ImageListItem>
            <Link to='/'>
              <img className='brand-logo' src='/logohappilo.png' alt='Logo' />
            </Link>
          </ImageListItem>
          <ImageListItem />
          <Toolbar className='mid-header' sx={{ display: 'flex' }}>
            <Box>
              <SearchBar />
              {/* <Search sx={{ marginLeft: '-3ch' }} /> */}
            </Box>
            <Box>
              <Link to='' style={{ display: 'flex' }}>
                <Typography>Track Order </Typography>
                <LocalShipping />
              </Link>
            </Box>
            <Box>
              <Link to='/login' style={{ display: 'flex' }}>
                <Typography>Sign in | Sign up </Typography>
                <Person />
              </Link>
            </Box>

            <Link>
              <CartDrawer />
            </Link>

            <Box onClick={() => dispatch(handleDarkModeChange())}>
              <Link to='' style={{ display: 'flex' }}>
                <Typography>
                  {darkMode ? 'Light Mode' : 'Dark Mode'}{' '}
                </Typography>
                {darkMode ? <Brightness7 /> : <Brightness4 />}
              </Link>
            </Box>
          </Toolbar>
        </Toolbar>
      </Box>
    </div>
  );
}

export default MidHeader;
