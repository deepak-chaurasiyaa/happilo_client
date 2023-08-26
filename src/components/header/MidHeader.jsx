import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Toolbar, ImageListItem, Typography } from '@mui/material';
import {
  LocalShipping,
  Person,
  Brightness7,
  Brightness4,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import CartDrawer from '../cart/Cart';
import { handleDarkModeChange } from '../../redux/reducer/theme.reducer';

function MidHeader() {
  const dispatch = useDispatch();
  const { brandDetails } = useSelector((state) => state.brand);
  const { products } = useSelector((state) => state.products);
  console.log('Br', brandDetails);
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {
            <ImageListItem>
              <Link to='/'>
                <img
                  className='brand-logo'
                  src={`${process.env.REACT_APP_API_URL}/uploads/${brandDetails?.name}`}
                  alt={`${brandDetails?.original_name}`}
                />
              </Link>
            </ImageListItem>
          }
          <ImageListItem />
          <Toolbar className='mid-header' sx={{ display: 'flex' }}>
           
              <SearchBar products = {products}/>
              {/* <Search sx={{ marginLeft: '-3ch' }} /> */}
            
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
