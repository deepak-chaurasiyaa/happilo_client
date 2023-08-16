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
import { AddToCart } from '../../redux/reducer/cart.reducer';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#00523b'),
  margin:'auto',
  display:'block',
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
          width: '100%',
        }}
      >
        {/* {product.product_label && (
          <Typography
            className='product-label'
            sx={{
              backgroundColor:
                PRODUCT_LABEL_BACKGROUND[`${product.product_label}`],
            }}
          >
            {product.product_label}
          </Typography>
        )} */}
        <CardMedia
        className='rotate-image'
          component='img'
          height='220px'
          image={`${process.env.REACT_APP_API_URL}/uploads/${product?.files[0]?.name}`}
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
            {product.product_name}
          </Link>

          {/* <Rating
            name='prooduct_customer_rating'
            readOnly
            value={product.prooduct_customer_rating}
            precision={0.5}
          /> */}
         { console.error(product)}
          <Typography className='selling-price'>
            ₹ {product.variants[0].price}
          </Typography>
        </CardContent>

        <ColorButton
          onClick={() => HandleAddToCart(product)}
          variant='contained'
        >
          Add to Cart
        </ColorButton>
      </CardActionArea>
    </Card>
  );
};

export default OtherProductCard;
