import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Drawer from '@mui/material/Drawer';
import { IconButton } from '@mui/material';
import { ToggleCartDrawer } from "../../reducer/cart.reducer";

function CartDrawer() {
  const dispatch = useDispatch();
  const isCartDrawerOpen = useSelector((state) => state.cart.isCartDrawerOpen);

  const handleCartButtonClick = () => {
    dispatch(ToggleCartDrawer());
  };

  return (
    <>
      <IconButton
        className='cart-cartButton'
        onClick={handleCartButtonClick}
      >
        <p>Hello</p>
      </IconButton>
      <Drawer
        className='cart-drawer'
        classes={{ paper: 'cart-drawerPaper'}}
        open={isCartDrawerOpen}
        onClose={handleCartButtonClick}
        anchor="right"
        transitionDuration={{ enter: 300, exit: 200 }}
      >
        <div>Cart Items Go Here</div>
      </Drawer>
    </>
  );
}

export default CartDrawer;

