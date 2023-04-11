import React from 'react';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  Rating,
} from '@mui/material';

import { Link } from 'react-router-dom';
import { PRODUCT_LABEL_BACKGROUND } from '../../shared/constant';
import { AddToCart } from '../../reducer/cart.reducer';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#00523b'),
  padding: '-20px !important',
  backgroundColor: '#00523b',
  '&:hover': {
    backgroundColor: 'black',
  },
}));

const OtherProductCard = ({ product }) => {

  const dispatch = useDispatch();
  const HandleAddToCart = (product) => {
    dispatch(AddToCart(product));
  };
  return (
    <Card className='image-card'>
      <CardActionArea
        sx={{
          width: 255,
        }}
      >
        {product.product_label && (
          <Typography
            className='product-label'
            sx={{
              backgroundColor:
                PRODUCT_LABEL_BACKGROUND[`${product.product_label}`],
            }}
          >
            {product.product_label}
          </Typography>
        )}
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
          <Link
            className='link'
            to={`/product/${product.product_id}`}
            underline='hover'
          >
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

        <ColorButton
          onClick={() => HandleAddToCart(product)}
          variant='contained'
          sx={{ width: '100%' }}
        >
          {product.product_title}
        </ColorButton>
      </CardActionArea>
    </Card>
  );
};

export default OtherProductCard;
