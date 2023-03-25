import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  Link,
  Rating,
  Box,
  Toolbar,
} from '@mui/material';

import ShoppingBanner from './ShoppingBanner';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#00523b'),
  padding: '-20px !important',
  backgroundColor: '#00523b',
  '&:hover': {
    backgroundColor: 'black',
  },
}));

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
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {Product &&
          Product.map((product) => {
            return (
              <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                  border: '1px solid #ccc',
                  transition: 'box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.4)',
                  },
                }}
              >
                <CardActionArea
                  sx={{
                    width: 255,
                  }}
                >
                  <Typography>Trending</Typography>
                  <CardMedia
                    component='img'
                    height='220px'
                    image={product.product_img}
                    alt='green iguana'
                    sx={{
                      padding: '10px',
                    }}
                  />

                  <CardContent className='bg-pink'>
                    <Link className='link' href='#' underline='hover'>
                      {product.short_discription}
                    </Link>

                    <Rating
                      name='prooduct_customer_rating'
                      readOnly
                      value={product.prooduct_customer_rating}
                      precision={0.5}
                    />
                    <Typography className='selling-price'>
                      ₹ {product.product_selling_price}
                    </Typography>
                  </CardContent>

                  <ColorButton variant='contained' sx={{ width: '100%' }}>
                    {product.product_title}
                  </ColorButton>
                </CardActionArea>
              </Card>
            );
          })}
      </Box>
    </Box>
  );
}
