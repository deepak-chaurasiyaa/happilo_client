import { useEffect } from 'react';
import { Box, CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';

import Tab from './components/tab/tab';
import faq from './shared/helpers/Faq';
import Login from './components/login/Login';
import CartPage from './components/cart/Cart';
import Header from './components/header/Header';
import Display from './components/faqPage/Display';
import NotFound from './components/notFound/NotFound';
import SubFooter from './components/footer/SubFooter';
import CreateAccount from './components/signUp/SignUp';
import Jouney from './components/happiloJourney/Journey';
import CarouselSection from './components/header/Carousel';
import { darkTheme, lightTheme } from './shared/theme/Theme';
import NewLaunchProduct from './components/products/Product';
import OtherProduct from './components/products/OtherProduct';
import ForgotPassword from './components/forgotPassword/ForgotPassword';
import ProductDescription from './components/products/ProductDescription';
import ProductCollections from './components/productsCollections/ProductCollections';

import {
  brandLogoAsync,
  carouselImageAsync,
} from './redux/actions/brand.action';

function App() {
  const { darkMode } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { products, collections } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(brandLogoAsync());
    dispatch(carouselImageAsync());
  }, []);
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
                Product={collections}
                ShowBanner={false}
                MainTitle={'NEW LAUNCHES'}
              />
              <OtherProduct
                Product={products}
                ShowBanner={true}
                MainTitle={'OUR RANGE'}
              />
              <OtherProduct
                Product={products}
                ShowBanner={false}
                MainTitle={'COMBOS'}
              />
              <br />
              <Jouney />
              <br />
              <Display questions={faq} />
              <SubFooter />
            </Box>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<CreateAccount />} />
        <Route path='/product/:product_id' element={<ProductDescription />} />
        <Route path='/reset-password' element={<ForgotPassword />} />
        <Route path='/collections/:category' element={<ProductCollections />} />
        <Route path='/tab' element={<Tab />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
