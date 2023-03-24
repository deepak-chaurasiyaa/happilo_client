import { Box } from '@mui/system';
import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Box sx={{ width: '97%', margin: 'auto' }}>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            style={{ height: 430 }}
            className='d-block w-100'
            src='https://cdn.shopify.com/s/files/1/0569/6867/5527/files/Marvel-desk_1728x.png?v=1675406416'
            alt='First slide'
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            style={{ height: 430 }}
            className='d-block w-100'
            src='https://cdn.shopify.com/s/files/1/0569/6867/5527/files/NEWLY_UPDATED_ipl_desktop_banner_2260x.jpg?v=1679574409'
            alt='Second slide'
          />
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            style={{ height: 430 }}
            className='d-block w-100'
            src='https://cdn.shopify.com/s/files/1/0569/6867/5527/collections/Happilo_Website_Banners_11112022_Chocolate_Spread_1512X515_88a2608e-f6e5-49bd-a547-c85270cdbdf3.jpg?v=1675085062'
            alt='Third slide'
          />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </Box>
  );
}

export default IndividualIntervalsExample;
