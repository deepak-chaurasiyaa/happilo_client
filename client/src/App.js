import { useSelector } from 'react-redux';
import { Box, CssBaseline, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import Header from './components/Header/Header';
import CarouselSection from './components/Header/Carousel';
import OtherProduct from './components/products/OtherProduct';
import NewLaunchProduct from './components/products/Product';

import { darkTheme, lightTheme } from './shared/theme/Theme';
import { OTHER_PRODUCTS, PRODUCTS } from './shared/constant';

function App() {
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box>
        <Header />
        <CarouselSection />
        <NewLaunchProduct
          Product={PRODUCTS}
          ShowBanner={false}
          MainTitle={'NEW LAUNCHES'}
        />
        <OtherProduct
          Product={OTHER_PRODUCTS}
          ShowBanner={true}
          MainTitle={'OUR RANGE'}
        />
        <OtherProduct
          Product={OTHER_PRODUCTS}
          ShowBanner={false}
          MainTitle={'COMBOS'}
        />
        <br />
      </Box>
    </ThemeProvider>
  );
}

export default App;
