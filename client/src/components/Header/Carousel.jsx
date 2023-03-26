import { Box } from '@mui/system';

import Carousel from 'react-bootstrap/Carousel';

import { CAROUSEL_IMAGE } from '../../shared/constant';

export default function CarouselSection() {
  return (
    <Box sx={{ width: '97%', margin: 'auto', marginTop: '9.2rem' }}>
      <Carousel>
        {CAROUSEL_IMAGE &&
          CAROUSEL_IMAGE.map((image) => {
            return (
              <Carousel.Item interval={2000} >
                <img
                  style={{ height: 430 }}
                  className='d-block w-100'
                  src={image.url}
                  alt='Third slide'
                />
                {/* <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption> */}
              </Carousel.Item>
            );
          })}
      </Carousel>
    </Box>
  );
}
