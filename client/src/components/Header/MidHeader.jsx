import React from 'react';
import { Box, Toolbar, ImageListItem } from '@mui/material';
import { BRAND_LOGO } from './data';

function MidHeader() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <ImageListItem>
            <img src={BRAND_LOGO} alt={'Logo'} loading='lazy' />
          </ImageListItem>
          <ImageListItem>
            <img src={BRAND_LOGO} alt={'Logo'} loading='lazy' />
          </ImageListItem>
          <ImageListItem>
            <img src={BRAND_LOGO} alt={'Logo'} loading='lazy' />
          </ImageListItem>
        </Toolbar>
      </Box>
    </div>
  );
}

export default MidHeader;
