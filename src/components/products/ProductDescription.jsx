import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Typography,
  ImageList,
  ImageListItem,
} from '@mui/material';
import styled from '@emotion/styled';

import Header from '../header/Header';
import ReasonToBuy from './ReasonToBuy';
import ImageMagnify from './ImageMagnify';
import { useDispatch } from 'react-redux';
import { productDetailsAsync } from '../../redux/actions/product.action';
const ColorButton = styled(Button)(({ theme }) => ({
  padding: '-20px !important',
  '&:hover': {
    backgroundColor: '#00523b',
    color: 'white',
  },
}));

const ProductDescription = () => {
  const dispatch = useDispatch();
  const [product,setProduct] = useState([])
  const [currentImage, setCurrentImage] = useState([]);
  const [addToCartQuantity, setaddToCartQuantity] = useState(0);
  const [currentPackSize, setCurrentPackSize] = useState('');
  const [productVarients, setProductVarients] = useState([]);
  const [reasonsToBuy, setReasonsToBuy] = useState([]);
  const { product_id, category_id } = useParams();
  const productIdNumber = parseInt(product_id, 10);
  // const categoryIdNumber = parseInt(category_id, 10);
  const getProductDetails = async()=>{
    const action =  await dispatch(productDetailsAsync(productIdNumber))
    const { payload, error } = action;
    console.log({payload})
    !error && setCurrentImage({...payload[0].files[0]})
    !error && setProductVarients([...payload[0].variants])
    !error && setReasonsToBuy({...payload[0].descriptions})
    !error && setCurrentPackSize({...payload[0].variants[0]})
    !error && setProduct({...payload[0]})
  }
  useEffect(() => {
    
    window.scrollTo(0, 0);
    getProductDetails()
  }, [productIdNumber]);

  return (
    <Box>
      <Header />
      <Box
        sx={{
          width: '90%',
          margin: 'auto',
          padding: '12rem 0 0 0rem',
          display: 'flex',
        }}
      >
         <Box>
          <ImageList sx={{ width: ' 10rem', height: 500 }} cols={1}>
            {product.files?.map((image) => (
              <ImageListItem
                key={image.name}
                sx={{ width: '85%', margin: 'auto', borderRadius: 2 }}
              >
                <img
                  onClick={() => setCurrentImage(image)}
                  className='description-image'
                  src={`${process.env.REACT_APP_API_URL}/uploads/${image?.name}`}
                  alt={`${image?.original_name}`}
                  srcSet={`${process.env.REACT_APP_API_URL}/uploads/${image?.name}`}
                  loading='lazy'
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>

        <Box sx={{ padding: ' 0 3rem' }}>
          <ImageMagnify currentImage={currentImage} />
        </Box>

        <Box>
          <Typography variant='h6' sx={{ fontWeight: 600 }}>
            {product.product_name}
          </Typography>
          <Typography variant='h6' sx={{ fontWeight: 600 }}>
            {console.log({currentPackSize})}
            ₹ {!!currentPackSize && currentPackSize?.price.toFixed(2)}
          </Typography>
          <br />
          <Box sx={{ display: 'flex' }}>
            <Typography sx={{ fontWeight: 600 }}>Size </Typography>
            <Typography sx={{ padding: '0px 10px 10px 10px' }}>
              {currentPackSize.quantity}
            </Typography>
          </Box>
          <Box>
            {productVarients.map((product) => {
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
          <br />
          <br />
          <Box sx={{ display: 'flex' }}>
            <ColorButton
              onClick={() =>
                addToCartQuantity > 0 &&
                setaddToCartQuantity(addToCartQuantity - 1)
              }
              style={{ textTransform: 'none' }}
              sx={{ margin: '0 15px 6px 6px', backgroundColor: 'white' }}
              variant='contained'
            >
              <Typography
                variant='h5'
                sx={{ fontSize: '15px !important', fontWeight: 500 }}
              >
                -
              </Typography>
            </ColorButton>
            <Typography variant='h5'>{addToCartQuantity}</Typography>
            <ColorButton
              onClick={() => setaddToCartQuantity(addToCartQuantity + 1)}
              style={{ textTransform: 'none' }}
              sx={{ margin: '0 15px 6px 15px', backgroundColor: 'white' }}
              variant='contained'
            >
              <Typography
                variant='h5'
                sx={{ fontSize: '15px !important', fontWeight: 500 }}
              >
                +
              </Typography>
            </ColorButton>
            <ColorButton
              // onClick={() => setaddToCartQuantity(addToCartQuantity + 1)}

              sx={{ margin: '0 15px 6px 15px', backgroundColor: '#ffd200' }}
              variant='contained'
            >
              <Typography
                variant='h5'
                sx={{ fontSize: '15px !important', fontWeight: 500 }}
              >
                Add To Cart
              </Typography>
            </ColorButton>
            <ColorButton
              // onClick={() => setaddToCartQuantity(addToCartQuantity + 1)}

              sx={{ margin: '0 15px 6px 15px', backgroundColor: '#ffd200' }}
              variant='contained'
            >
              <Typography
                variant='h5'
                sx={{ fontSize: '15px !important', fontWeight: 500 }}
              >
                Buy it now
              </Typography>
            </ColorButton>
          </Box>
          <br />
          <br />
          <Typography
            sx={{ height: '0.2px', backgroundColor: 'black' }}
          ></Typography>
          <br />
          <ReasonToBuy
            reason_details={reasonsToBuy}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDescription;
