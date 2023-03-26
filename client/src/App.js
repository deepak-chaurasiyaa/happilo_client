import { Box } from '@mui/system';
import Header from './components/Header/Header';
import OtherProduct from './components/products/OtherProduct';
import NewLaunchProduct from './components/products/Product';
import HappiloLogin from './components/Login/Login';
import CreateAccount from './components/SignUp/SignUp';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import { OTHER_PRODUCTS, PRODUCTS } from './shared/constant';

function App() {
  return (
    <Box>
      <Header />
      {/* <NewLaunchProduct
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
      /> */}
      {/* <HappiloLogin /> */}
      {/* <CreateAccount /> */}
      <ForgotPassword />
      <br />
    </Box>
  );
}

export default App;
