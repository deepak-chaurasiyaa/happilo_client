import { useState } from 'react';

import { ThemeProvider } from '@mui/material/styles';
import { Box, Switch, CssBaseline } from '@mui/material';
import { darkTheme, lightTheme } from './shared/theme/Theme';

import Header from './components/Header/Header';
import OtherProduct from './components/products/OtherProduct';
import NewLaunchProduct from './components/products/Product';

import { OTHER_PRODUCTS, PRODUCTS } from './shared/constant';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box>
        <Switch checked={darkMode} onChange={handleDarkModeChange} />
      </Box>
      <Box>
        <Header />
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
