import { Box } from '@mui/system';
import React, { useState } from 'react';
import Header from '../header/Header';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
const itemData = [
  {
    img: 'https://cdn.shopify.com/s/files/1/0569/6867/5527/products/1v2_bf9e06f6-cd22-4209-a932-310a869534c0_720x.png?v=1632846581',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0569/6867/5527/products/back_fba9f5e6-686e-4e5b-aad9-31fffe66be68_900x.png?v=1632846581',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0569/6867/5527/products/4v2_8e1bdd96-edf1-4662-9059-9ff3bb5575da_900x.jpg?v=1632846580',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0569/6867/5527/products/3_ff429d5d-d39f-4917-8288-6c2ed49a4b24_900x.jpg?v=1632846582',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0569/6867/5527/products/5_145bf845-995e-4039-b52a-3cd15e6ec359_900x.jpg?v=1632846582',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0569/6867/5527/products/6_46cf0eb5-4ca8-42b6-854d-951ae338df56_900x.jpg?v=1632846582',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0569/6867/5527/products/7_a82ecf2c-2e9f-4983-840e-2821633c1007_900x.jpg?v=1632846581',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0569/6867/5527/products/packof2_3bd63f6e-ef0b-49d0-932f-37e8441b0d21_900x.jpg?v=1632846670',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0569/6867/5527/products/packof5_48baaae3-0970-4b46-849c-4f770d758e14_900x.jpg?v=1632846698',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0569/6867/5527/products/1v2_8fa71dc0-6ea4-4663-8967-c6049ad5da62_900x.png?v=1632846639',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0569/6867/5527/products/almondspackof4_900x.jpg?v=1679307809',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0569/6867/5527/products/610wodrIz_L._SL1000_39113a24-b7e9-4a06-bd17-88cd4bc8e520_900x.jpg?v=1679307809',
    title: 'Bike',
    author: '@southside_customs',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0569/6867/5527/products/packof2_cd522605-0e54-483a-b6bf-99c5cc6618d9_900x.jpg?v=1679307623',
    title: 'Bike',
    author: '@southside_customs',
  },
];

const ProductDescription = () => {
  const [currentImage, setCurrentImage] = useState({ ...itemData[0] });
  return (
    <>
      <Header />
      <Box sx={{ padding: '10rem 0 0 2rem', display: 'flex' }}>
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
        <Box>
          <ImageList sx={{ width: '90%', margin: 'auto' }}>
            <ImageListItem>
              <img
                className='description-image'
                style={{
                  borderRadius: '15px',
                  backgroundColor: 'white',
                  width: '70vh',
                }}
                src={currentImage.img}
                alt=''
              />
            </ImageListItem>
          </ImageList>
        </Box>
        <Box sx={{ width: '35%' }}>Hello</Box>
      </Box>
    </>
  );
};

export default ProductDescription;
