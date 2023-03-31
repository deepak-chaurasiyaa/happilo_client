import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import CarouselSection from '../header/Carousel';
import Header from '../header/Header';
import ProductView from './ProductView';

function ProductCollections() {
  const { products } = useSelector((state) => state.products);
  return (
    <Box>
      <Header></Header>
      <CarouselSection />
      <ProductView
        Product={products}
        MainTitle={'Buy Healthy Dry Fruit and Nut Bar Online Hassle-Free'}
      />
    </Box>
  );
}

export default ProductCollections;
