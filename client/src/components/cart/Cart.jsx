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
const CartSlider={'& .MuiPaper-root':{
  width:"28%",
}}

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
        open={isCartDrawerOpen}
        onClose={() => {
          dispatch(ToggleCartDrawer());
        }}
        sx={CartSlider}
        anchor='right'
        transitionDuration={{ enter: 300, exit: 200 }}
      >
        <Box sx={{border: '2px dashed grey' }}>
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
          <Box sx={{border: '2px dashed yellow', marginTop: '1rem' }}>
          <Box className='card-coupenCode'>
            <Typography >Use code: HAPPILO1 to get FLAT 35% OFF
            <br />            
             on your First Purchase</Typography>
          </Box>
          </Box>
          {/* // ? Last Button Box always in last */}
          <Box className='card-checkout'>
          <Box className='card-shipping'>
            <Typography> Shipping</Typography>
            <Typography> Calculated at checkout</Typography>
          </Box>
          <Box className='card-shipping'>
            <Typography sx={{fontWeight: 'bold'}}> SubTotal</Typography>
            <Typography sx={{fontWeight: 'bold'}}> &#x20B9; 380000</Typography>
          </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default CartDrawer;
