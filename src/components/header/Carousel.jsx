import Carousel from 'react-bootstrap/Carousel';

import { Box } from '@mui/system';
import { useSelector } from 'react-redux';

import { notIsEmptyArray } from '../../shared/common';

export default function CarouselSection() {
  const { carouselImages } = useSelector((state) => state.brand);

  return (
    <Box sx={{ width: '97%', margin: 'auto', marginTop: '9.2rem' }}>
      <Carousel>
        {notIsEmptyArray(carouselImages) &&
          carouselImages.map((image) => {
            return (
              <Carousel.Item interval={2000}>
                <img
                  style={{ height: 430 }}
                  className='d-block w-100'
                  src={`${process.env.REACT_APP_API_URL}/uploads/${image?.name}`}
                  alt={`${image?.original_name}`}
                />
              </Carousel.Item>
            );
          })}
      </Carousel>
    </Box>
  );
}
