import React from 'react';

import { Box, Toolbar, Typography } from '@mui/material';
import { FOOTER_TEXT } from '../../shared/constant';

function SubFooter() {
  return (
    <Box sx={{ width: '97%', margin: 'auto' }}>
      <Box>
        <img
          alt=''
          src='/111.png'
          style={{ width: '100%'}}
        />
      </Box>
      <Toolbar
        className='bg-green'
        sx={{ minHeight: '38px !important', width: '100%' }}
      >
        <Typography className='text-center'>
          {FOOTER_TEXT.COPYRIGHT_MESSAGE}
        </Typography>
      </Toolbar>
    </Box>
  );
}

export default SubFooter;
