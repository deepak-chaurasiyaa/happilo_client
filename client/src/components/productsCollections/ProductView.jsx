import React from 'react';
import { Typography, Box, Toolbar } from '@mui/material';

import { Link } from 'react-router-dom';

import ProductCollectionCard from './ProductCollectionCard';

export default function ProductView({ Product, MainTitle }) {
  return (
    <Box sx={{ width: '90%', margin: 'auto'}}>
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
      <Box className='display-grid'>
        {Product &&
          Product.map((product) => {
            return (
              <Link
                to={`/product/${product.product_id}`}
                className='underline-none card-container-padding'
              >
                <ProductCollectionCard product={product} />
              </Link>
            );
          })}
      </Box>
    </Box>
  );
}
