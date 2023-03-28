import { Box } from '@mui/material';
import { OTHER_PRODUCTS } from '../../shared/constant';
import CarouselSection from '../header/Carousel';
import Header from '../header/Header';
import ProductView from './ProductView';

function ProductCollections() {
  return (
    <Box>
      <Header></Header>
      <CarouselSection />
      <ProductView
        Product={OTHER_PRODUCTS}
        MainTitle={'Buy Healthy Dry Fruit and Nut Bar Online Hassle-Free'}
      />
    </Box>
  );
}

export default ProductCollections;
