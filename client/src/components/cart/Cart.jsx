import React from 'react';
import { ShoppingBag, Close } from '@mui/icons-material';
import { Box, Drawer, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import { ToggleCartDrawer } from '../../reducer/cart.reducer';

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

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
        <Typography style={{ marginTop: '10px' }}>Cart</Typography>

        <IconButton aria-label="cart">
          <StyledBadge badgeContent={2} color="secondary">
            <ShoppingBag />
          </StyledBadge>
        </IconButton>
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
        <Box sx={{ minWidth: '400px !important', border: '2px dashed grey' }}>
          <Box sx={{border: '2px dashed red' }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Typography> Cart Item </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton onClick={() => dispatch(ToggleCartDrawer())}>
                <Close />
              </IconButton>
            </Box>
          </Box>
          <Box>
            <p>add your cart items here</p>
            <p>add your cart items here</p>
            <p>add your cart items here</p>
            <p>add your cart items here</p>
            <p>add your cart items here</p>
            <p>add your cart items here</p>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default CartDrawer;
