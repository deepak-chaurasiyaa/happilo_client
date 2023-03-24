import { Box } from '@mui/system';
import Header from './components/Header/Header';
import Product from './components/products/Product';

function App() {
  return (
    <Box>
      <Header />
      <Product />
      <Product />
      <Product />
    </Box>
  );
}

export default App;
