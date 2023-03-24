import React from 'react';
import { Box, Toolbar, Typography } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar
        className='mid-header font-ten'
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <PopupState variant='popover' popupId='demo-popup-menu'>
          {(popupState) => (
            <React.Fragment>
              <Box {...bindTrigger(popupState)}>
                <Typography>Nuts</Typography>
                <KeyboardArrowDown />
              </Box>
              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>Profile</MenuItem>
                <MenuItem onClick={popupState.close}>My account</MenuItem>
                <MenuItem onClick={popupState.close}>Logout</MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>

        <PopupState variant='popover' popupId='demo-popup-men'>
          {(popupState) => (
            <React.Fragment>
              <Box {...bindTrigger(popupState)}>
                <Typography>Dried Fruits</Typography>
                <KeyboardArrowDown />
              </Box>
              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>Profile 2</MenuItem>
                <MenuItem onClick={popupState.close}>My account 2</MenuItem>
                <MenuItem onClick={popupState.close}>Logout 2</MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
        <Box>
          <Typography>Seeds</Typography>
          <KeyboardArrowDown />
        </Box>
        <Box>
          <Typography>Dates</Typography>
          <KeyboardArrowDown />
        </Box>
        <Box>
          <Typography>Berries</Typography>
          <KeyboardArrowDown />
        </Box>
        <Box>
          <Typography>Mixes</Typography>
          <KeyboardArrowDown />
        </Box>
        <Box>
          <Typography>Gifting</Typography>
          <KeyboardArrowDown />
        </Box>
        <Box>
          <Typography>Combos</Typography>
          <KeyboardArrowDown />
        </Box>
        <Box>
          <Typography>New Launches</Typography>
          <KeyboardArrowDown />
        </Box>
        <Box>
          <Typography>Stores</Typography>
          <KeyboardArrowDown />
        </Box>
        <Box>
          <Typography>Blogs</Typography>
          <KeyboardArrowDown />
        </Box>
      </Toolbar>
    </Box>
  );
}

export default NavBar;
