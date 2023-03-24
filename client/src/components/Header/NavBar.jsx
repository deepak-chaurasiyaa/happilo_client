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
        <Box>
          <Typography>Nuts</Typography>
          <KeyboardArrowDown />
        </Box>

        <Box>
          <Typography>Dried Fruits</Typography>
          <KeyboardArrowDown />
        </Box>

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
