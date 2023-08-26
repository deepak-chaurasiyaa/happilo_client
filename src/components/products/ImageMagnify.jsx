import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { Box } from '@mui/material';
export const ImageMagnify = ({ currentImage }) => {
  return (
    <Box className='magnifier-container description-image'>
      <ReactImageMagnify
        {...{
          smallImage: {
            isFluidWidth: true,
            src: `${process.env.REACT_APP_API_URL}/uploads/${currentImage?.name}`,
            srcSet: `${process.env.REACT_APP_API_URL}/uploads/${currentImage?.name} 1200w`,
            sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px',
          },
          largeImage: {
            src: `${process.env.REACT_APP_API_URL}/uploads/${currentImage?.name}`,
            width: 1200,
            height: 1800,
          },
          enlargedImageContainerDimensions: {
            width: '150%',
            height: '100%',
          },
          enlargedImageContainerClassName:
            'enlarged-image-container description-image',
        }}
      />
    </Box>
  );
};

export default ImageMagnify;
