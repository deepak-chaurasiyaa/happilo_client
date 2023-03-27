import React, { useState } from 'react';

import {
  Box,
  Button,
  Typography,
  ImageList,
  ImageListItem,
} from '@mui/material';

import styled from '@emotion/styled';

import Header from '../header/Header';
import { availableSizes, itemData } from '../../shared/constant';

const ColorButton = styled(Button)(({ theme }) => ({
  padding: '-20px !important',
  '&:hover': {
    backgroundColor: '#00523b',
    color: 'white',
  },
}));

const ProductDescription = () => {
  const [currentImage, setCurrentImage] = useState({ ...itemData[0] });
  const [currentPackSize, setCurrentPackSize] = useState({
    ...availableSizes[0],
  });
  return (
    <>
      <Header />
      <Box sx={{ padding: '12rem 0 0 2rem', display: 'flex' }}>
        <Box>
          <ImageList sx={{ width: 130, height: 500 }} cols={1}>
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                sx={{ width: '90%', margin: 'auto', borderRadius: 2 }}
              >
                <img
                  onClick={() => setCurrentImage(item)}
                  className='description-image'
                  src={`${item.img}`}
                  srcSet={`${item.img}`}
                  alt={item.title}
                  loading='lazy'
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        <Box sx={{ padding: ' 0 3rem' }}>
          <img
            className='description-image'
            style={{
              borderRadius: '15px',
              backgroundColor: 'white',
              width: '30rem',
            }}
            src={currentImage.img}
            alt=''
          />
        </Box>
        <Box>
          <Typography variant='h6' sx={{ fontWeight: 600 }}>
            Happilo 100% Natural Premium California Almonds
          </Typography>
          <Typography variant='h6' sx={{ fontWeight: 600 }}>
            ₹ {currentPackSize.price.toFixed(2)}
          </Typography>
          <br />
          <Box sx={{ display: 'flex' }}>
            <Typography sx={{ fontWeight: 600 }}>Size </Typography>
            <Typography sx={{ padding: '0px 10px 10px 10px' }}>
              {currentPackSize.quantity}
            </Typography>
          </Box>
          <Box sx={{ width: '40rem' }}>
            {availableSizes.map((product) => {
              return (
                <ColorButton
                  onClick={() => setCurrentPackSize(product)}
                  style={{ textTransform: 'none' }}
                  sx={{ margin: '0 6px 6px 6px', backgroundColor: 'white' }}
                  variant='contained'
                >
                  {product.quantity}
                </ColorButton>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductDescription;
