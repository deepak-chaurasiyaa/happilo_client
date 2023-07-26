import React from 'react';
import { Box, Toolbar, ImageListItem, Typography } from '@mui/material';
import { SHOPING_BANNER, SHOPING_BANNER_PRODUCT } from '../../shared/constant';

function ShoppingBanner() {
  return (
    <Box sx={{ marginBottom: '-5rem' }}>
      <Box sx={{ flexGrow: 1, marginTop: 5 }}>
        <Toolbar>
          <ImageListItem>
            <img
              className='shopping-banner'
              src={SHOPING_BANNER}
              alt={'Logo'}
              loading='lazy'
            />
          </ImageListItem>
        </Toolbar>
      </Box>

      <Typography className='shopping-banner-font'>
        Hey There, <br></br> You forgot something? Dont worry,<br></br>
        we’ve saved it for you...!
      </Typography>

      <Box>
        <Toolbar>
          <ImageListItem className='shopping-banner-font'>
            <img
              className='shopping-banner-font-img'
              src={SHOPING_BANNER_PRODUCT}
              alt={'Logo'}
              loading='lazy'
            />
          </ImageListItem>
        </Toolbar>
      </Box>
    </Box>
  );
}

export default ShoppingBanner;
