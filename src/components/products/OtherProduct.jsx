import React from 'react';
import { Typography, Box, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import OtherProductCard from './OtherProductCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ShoppingBanner from './ShoppingBanner';
import { NextArrow } from '../common/NextArrow';
import { PrevArrow } from '../common/PrevArrow';
export default function OtherProduct({ Product, ShowBanner, MainTitle }) {
  const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Provide your own NextArrow component
    prevArrow: <PrevArrow />, // Provide your own PrevArrow component

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
      <Slider {...settings}>
        {Product &&
          Product.map((product) => (
            Array.isArray(product.files) && product.files.length > 0 && <Link
              to={`/product/${product.product_id}`}
              className='underline-none card-container-padding'
              key={product.product_id}
            >
              <OtherProductCard product={product} />
            </Link>
          ))}
      </Slider>
    </Box>
  );
}
