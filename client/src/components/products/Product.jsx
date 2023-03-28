import React from 'react';
import { Box, Toolbar, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import ShoppingBanner from './ShoppingBanner';
import { Link } from 'react-router-dom';
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#00523b'),
  backgroundColor: '#00523b',
  '&:hover': {
    backgroundColor: 'black',
  },
}));
function NewLaunchProduct({ Product, ShowBanner, MainTitle }) {
  console.log({ Product });
  return (
    <Box>
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
                    <Link to={`/collections/${product.collection_name}`}>
                      <CardMedia
                        component='img'
                        height='175'
                        image={product.product_img}
                        alt='green iguana'
                      />
                      <ColorButton variant='contained' sx={{ width: '100%' }}>
                        {product.product_title}
                      </ColorButton>
                    </Link>
                  </CardActionArea>
                </Card>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
}

export default NewLaunchProduct;
