import React from 'react';
import { Typography, Box, Toolbar } from '@mui/material';

import ShoppingBanner from './ShoppingBanner';
import { Link } from 'react-router-dom';
import OtherProductCard from './OtherProductCard';

export default function OtherProduct({ Product, ShowBanner, MainTitle }) {
  return (
    <Box sx={{ width: '90%', margin: 'auto' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box></Box>
          <Box>
            <Typography variant='h5' className='main-title'>
              {MainTitle}
            </Typography>
          </Box>
          <Box></Box>
        </Toolbar>
      </Box>

      {ShowBanner && <ShoppingBanner />}
      <Box className='display-grid '>
        {Product &&
          Product.map((product) => {
            return (
              <Link
                to={`/product/${product.product_id}`}
                className='underline-none card-container-padding'
              >
               
                  <OtherProductCard product={product} />
             
              </Link>
            );
          })}
      </Box>
    </Box>
  );
}
