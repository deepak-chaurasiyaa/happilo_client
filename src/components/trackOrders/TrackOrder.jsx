import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Typography, ImageListItem, Box, Toolbar, TextField, InputAdornment, Button, Radio, FormControl, RadioGroup, FormControlLabel, AppBar } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const TrackOrders = () => {
  const centerBoxStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '2px solid yellow',
    padding: '1px', // Add some spacing around the content
  };

  const [selectedOption, setSelectedOption] = useState('orderID');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const initialValues = {
    trackOrder: '',
  };
  const { brandDetails } = useSelector((state) => state.brand);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ margin: '10px 0px 10px 10px' }}>
          {<ImageListItem>
            <Link to='/'>
              <img
                className='brand-logo'
                src={`${process.env.REACT_APP_API_URL}/uploads/${brandDetails?.name}`}
                alt={`${brandDetails?.original_name}`}
              />
            </Link>
          </ImageListItem>
          }
        </Toolbar>
      </AppBar>
      <Box className='search-track-box'>
        <Box sx={{ display:'flex'}}>
          <Box sx={{margin:'8px 0px 0px 15px'}}>
            <Typography >Search By: </Typography>
          </Box>
          <Box sx={{marginLeft:'10px'}}>
            <FormControl component="fieldset" >
              <RadioGroup
                aria-label="option"
                name="option"
                value={selectedOption}
                onChange={handleOptionChange}
                row
              >
                <FormControlLabel
                
                  value="orderID"
                  control={<Radio style={{color:'yellow'}}/>}
                  label="Order ID"
                />
                <FormControlLabel
                  value="trackID"
                  // control={<LocalShippingIcon />}
                  control={<Radio style={{color:'yellow'}}/>}
                  label="Track ID"
                />
              </RadioGroup>
            </FormControl>
          </Box>

        </Box>

        <Box sx={centerBoxStyle}>
            <TextField sx={{ width: '77%'}}
              id="track-order"
              placeholder='Enter your order ID'
              InputProps={{
                style: { height: '44px' },
                startAdornment: (
                  <InputAdornment position="start">
                    <LocalShippingIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button sx={{ marginLeft: '-2px' }}
              className='track-button'
              type='submit'
            >
              Track Your Order
            </Button>
        </Box>

        <Box sx={{ marginLeft: '18px' }}>
          <Typography>Check current status of your shipment.</Typography>
        </Box>
      </Box>
      <Box className='footer-track'>
        <Box>
        <Typography>Email us: care@happilo.com</Typography>
        <Typography>Call us: 1800-270-4300</Typography>
        <Typography>(10AM to 6 PM Monday to Saturday)</Typography>
        </Box>
        <Box>
        <Typography>Logo1 Logo2 Logo3 Logo4</Typography>
        </Box>
        <Box>
        <Typography>© 2023 All rights reserved | Powered By @Coding</Typography>
        </Box>
        

      </Box>
    </>
  );
};

export default TrackOrders;
