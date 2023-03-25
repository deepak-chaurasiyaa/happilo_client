import { Box } from '@mui/material';
import React from 'react';
import Anouncement from './Anouncement';
import IndividualIntervalsExample from './Carousel';
import MidHeader from './MidHeader';
import NavBar from './NavBar';

function Header() {
  return (
    <Box>
      <Anouncement />
      <MidHeader />
      <NavBar />
      <IndividualIntervalsExample />
    </Box>
  );
}

export default Header;
