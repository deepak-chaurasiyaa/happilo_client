import React from 'react';
import { Box, Toolbar, ImageListItem, Typography } from '@mui/material';

function ShoppingBanner() {
  return (
    <Box sx={{ marginBottom: '-11rem' }}>
      <Box sx={{ flexGrow: 1, marginTop: 5 }}>
        <Toolbar>
          <ImageListItem>
            <img
              className='shopping-banner'
              src='https://d3nez31vakvhqn.cloudfront.net/Happilo/Up-Dynamic+banner-+sid.png'
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
              src='https://cdn.shopify.com/s/files/1/0569/6867/5527/products/1v2_bf9e06f6-cd22-4209-a932-310a869534c0.png?v=1632846581'
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
