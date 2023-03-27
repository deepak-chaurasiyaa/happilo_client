import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ReasonToBuy = ({ reason_details }) => {
  console.log({ reason_details });
  const reason = (data) => {
    return data.map((obj, index) => {
      console.log({ obj });
      const [key, value] = Object.entries(obj)[0];
      return (
        <>
          <br />
          <Box sx={{ display: '-webkit-box' }}>
            <Typography sx={{ fontWeight: 600 }}>
              {key} :{' '}
              <Typography component='span' variant='body1'>
                {value}
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
