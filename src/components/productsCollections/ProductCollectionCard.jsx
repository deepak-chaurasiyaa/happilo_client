import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  Box,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';

const ColorButton = styled(Button)(({ theme }) => ({
  padding: '-20px !important',
  backgroundColor: '#fbaf5d',
  '&:hover': {
    backgroundColor: 'black',
    color: 'white',
  },
}));

const ProductCollectionCard = ({ product }) => {
  const HandleAddToCart = (event) => {
    event.preventDefault();
  };
  return (
    <Card className='thiner-box-shadow'>
      <CardActionArea
        sx={{
          width: 255,
        }}
      >
        {console.log("first",product)}
        <div className='rotate-image'>
          <CardMedia
            component='img'
            height='220px'
            image={`${process.env.REACT_APP_API_URL}/uploads/${product?.files[0]?.name}`}
            alt='green iguana'
            sx={{
              padding: '10px',
            }}
          />
        </div>

        <CardContent className='text-center'>
          <Link to={`/product/${product.product_id}`} underline='hover'>
            <Typography>{product.short_discription}</Typography>
          </Link>

          <Typography>₹ {product?.variants?.[0]?.price}</Typography>
        </CardContent>

        <Box className='flex-space-between'>
          <ColorButton
            onClick={(e) => HandleAddToCart(e)}
            variant='contained'
            sx={{ width: '70%' }}
          >
            Add to Cart
          </ColorButton>
          <ColorButton variant='contained' sx={{ width: '20%' }}>
            <VisibilityIcon />
          </ColorButton>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default ProductCollectionCard;
