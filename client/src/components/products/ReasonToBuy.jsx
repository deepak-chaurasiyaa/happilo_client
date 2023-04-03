import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ReasonToBuy = ({ reason_details }) => {
  console.log({ reason_details });
  const reason = (data) => {
    return data.map((obj, index) => {
      return (
        <>
          <br />
          <Box sx={{ display: '-webkit-box' }}>
            <Typography sx={{ fontWeight: 600 }}>
              {obj.reason_title} : &nbsp;
              <Typography component='span' variant='body1'>
                {obj.reason}
              </Typography>
            </Typography>{' '}
          </Box>
        </>
      );
    });
  };

  return reason_details && reason(reason_details);
};

export default ReasonToBuy;
