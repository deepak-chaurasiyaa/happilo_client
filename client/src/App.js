import { useSelector } from 'react-redux';
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import CarouselSection from './components/header/Carousel';
import OtherProduct from './components/products/OtherProduct';
import NewLaunchProduct from './components/products/Product';
import Login from './components/login/Login';
import CreateAccount from './components/signUp/SignUp';
import ForgotPassword from './components/forgotPassword/ForgotPassword';

import { darkTheme, lightTheme } from './shared/theme/Theme';
import { OTHER_PRODUCTS, PRODUCTS } from './shared/constant';
import NotFound from './components/notFound/NotFound';
import ProductDescription from './components/products/ProductDescription';
import SubFooter from './components/footer/SubFooter';
import Jouney from './components/happiloJourney/Journey';
import ProductCollections from './components/productsCollections/ProductCollections';

function App() {
  const { darkMode } = useSelector((state) => state.theme);
  const { cart } = useSelector((state) => state.cart);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Routes>
        <Route
          exec
          path='/'
          element={
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
              <Jouney />
              <SubFooter />
            </Box>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<CreateAccount />} />
        <Route path='/product/:product_id' element={<ProductDescription />} />
        <Route path='/reset-password' element={<ForgotPassword />} />
        <Route path='/collections/:category' element={<ProductCollections />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
