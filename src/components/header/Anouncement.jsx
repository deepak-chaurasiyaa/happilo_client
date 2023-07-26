import React from 'react';
import { Box, Toolbar, Typography } from '@mui/material';
import { ANOUNCEMENT_TEXT } from '../../shared/constant';

function Anouncement() {
  return (
    <Box sx={{ flexGrow: 1, height: 38 }}>
      <Toolbar className='bg-green' sx={{ minHeight: '38px !important' }}>
        <Typography className='text-center'>{ANOUNCEMENT_TEXT}</Typography>
      </Toolbar>
    </Box>
  );
}

export default Anouncement;
