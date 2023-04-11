import React, {useState} from 'react';
import { ShoppingBag, Close } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, Button, Drawer, Typography } from '@mui/material';
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
const CartSlider = {
  '& .MuiPaper-root': {
    width: "28%",
  }
}

function CartDrawer() {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleRemoveQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
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
        <Box sx={{ border: '2px dashed grey' }}>

          <Box sx={{ border: '2px dashed red' }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Typography> Cart Item </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton onClick={() => dispatch(ToggleCartDrawer())}>
                <Close />
              </IconButton>
            </Box>
          </Box>

          <Box sx={{marginTop: '1rem' }}>
            <Box className='card-coupenCode'>
              <Typography >Use code: HAPPILO1 to get FLAT 35% OFF
                <br />
                on your First Purchase</Typography>
            </Box>
          </Box>

          {/* // ? Cart Items Here */}
          {/* <Box sx={{ border: '2px dashed cyan'}}>
            <Box className='card-items'>
            <Typography >All Cart Items Shows Here</Typography>
            <Typography >All Cart Items Shows Here</Typography>
            <Typography >All Cart Items Shows Here</Typography>
            <Typography >All Cart Items Shows Here</Typography>
            <Typography >All Cart Items Shows Here</Typography>
              <Typography >All Cart Items Shows Here</Typography>
              <Typography >All Cart Items Shows Here</Typography>
              <Typography >All Cart Items Shows Here</Typography>

            </Box>
          </Box> */}
          <Box display="flex" alignItems="center" marginBottom={2}>
      <Box marginRight={2}>
        <img src='https://cdn.shopify.com/s/files/1/0569/6867/5527/products/1v2_bf9e06f6-cd22-4209-a932-310a869534c0_720x.png?v=1632846581' alt='Name' width={50} />
      </Box>
      <Box flexGrow={1}>
        <Typography variant="subtitle1">TestOne</Typography>
        <Typography variant="body2" color="textSecondary">
          Description
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <IconButton size="small" >
          <RemoveIcon />
        </IconButton>
        <Typography variant="body1" style={{ margin: '0 8px' }}>
          {quantity}
        </Typography>
        <IconButton size="small" >
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
          <Box>
            <Button>Add an optional note</Button>
          </Box>

          {/* // ? Last Button Box always in last */}
          <Box className='card-checkout'>
            
            <Box className='card-shipping'>
              <Typography> Shipping</Typography>
              <Typography> Calculated at checkout</Typography>
            </Box>
            
            <Box className='card-shipping'>
              <Typography sx={{ fontWeight: 'bold' }}> SubTotal</Typography>
              <Typography sx={{ fontWeight: 'bold' }}> &#x20B9; 380000</Typography>
            </Box>
            
            <Box>
              <Button className='checkout-button'>Checkout</Button>
            </Box>
            
            <Box>
              <Button className='continue-shopping' onClick={() => dispatch(ToggleCartDrawer())}>Or continue shopping</Button>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default CartDrawer;
