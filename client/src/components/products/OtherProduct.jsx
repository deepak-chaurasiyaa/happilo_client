import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Link, Rating } from '@mui/material';

import { Box, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
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
        <Box></Box>
      </Box>
      {ShowBanner && <ShoppingBanner />}
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {Product &&
          Product.map((product) => {
            return (
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea sx={{ width: 255 }}>
                  <CardMedia
                    component='img'
                    height='175'
                    image={product.product_img}
                    alt='green iguana'
                  />
                  <CardContent className='bg-pink'>
                    <Typography variant='a' className='center-text'>
                      <Link href='#' underline='hover'>
                        {product.short_discription}
                      </Link>
                    </Typography>
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
