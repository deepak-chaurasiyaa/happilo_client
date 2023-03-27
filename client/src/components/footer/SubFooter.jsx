import React from 'react';

import { Box, Toolbar, Typography } from '@mui/material';
import { FOOTER_TEXT } from '../../shared/constant';

function SubFooter() {
  return (
    <Box sx={{ flexGrow: 1, height: 38 }}>
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
