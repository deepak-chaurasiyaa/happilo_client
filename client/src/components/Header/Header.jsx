import { Box, AppBar } from '@mui/material';
import React from 'react';
import Anouncement from './Anouncement';
import MidHeader from './MidHeader';
import NavBar from './NavBar';
function Header() {
  return (
    <AppBar>
      <Box>
        <Anouncement />
        <MidHeader />
        <NavBar />
      </Box>
    </AppBar>
  );
}

export default Header;
