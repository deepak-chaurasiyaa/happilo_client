import { ShoppingBag } from '@mui/icons-material';
import { Box, Drawer, Typography } from '@mui/material';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ToggleCartDrawer } from '../../reducer/cart.reducer';

function CartDrawer() {
  const dispatch = useDispatch();
  const isCartDrawerOpen = useSelector((state) => state.cart.isCartDrawerOpen);

  return (
    <>
      <Box
        className='cart-cartButton'
        onClick={() => {
          dispatch(ToggleCartDrawer());
        }}
        style={{ display: 'flex' }}
      >
        <Typography>Cart</Typography>

        <ShoppingBag />
      </Box>
      <Drawer
        className='cart-cartButton'
        open={isCartDrawerOpen}
        onClose={() => {
          dispatch(ToggleCartDrawer());
        }}
        anchor='right'
        transitionDuration={{ enter: 300, exit: 200 }}
      >
        <Box sx={{ minWidth: '300px !important' }}>
          <Box>Close</Box>
        </Box>
      </Drawer>
    </>
  );
}

export default CartDrawer;
