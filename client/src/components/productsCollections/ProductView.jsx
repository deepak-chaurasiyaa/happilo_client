import React from 'react';
import {
  Typography,
  Box,
  Toolbar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { useState } from 'react';
import Slider from '@mui/material/Slider';
import Input from '@mui/material/Input';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

import ProductCollectionCard from './ProductCollectionCard';

export default function ProductView({ Product, MainTitle }) {
  const [range, setRange] = useState([0, 600]);

  const handleSliderChange = (event, newValue) => {
    setRange(newValue);
  };

  const handleInputChange = (event, inputIndex) => {
    const value = Number(event.target.value);
    const newRange = [...range];
    newRange[inputIndex] = value;
    setRange(newRange);
  };

  const handleBlur = (event, inputIndex) => {
    const value = Number(event.target.value);
    if (value < 0) {
      setRange([0, range[1]]);
    } else if (value > 100) {
      setRange([range[0], 100]);
    } else {
      const newRange = [...range];
      newRange[inputIndex] = value;
      setRange(newRange);
    }
  };

  return (
    <Box sx={{ width: '90%', margin: 'auto' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar className='MuiAutocomplete-endAdornment'>
          <Box></Box>
          <Box>
            <Typography variant='h5' className='main-title'>
              {MainTitle}
            </Typography>
          </Box>
          <Box></Box>
        </Toolbar>
      </Box>
      <Box className='product-collection-product-view'>
        <Box className='thiner-box-shadow padding-top-none'>
          <div>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography>COLLECTION</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel2a-content'
                id='panel2a-header'
              >
                <Typography>VENDOR</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel2a-content'
                id='panel2a-header'
              >
                <Typography>PRICE</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box className='flex-space-between'>
                  <Input
                    value={range[0]}
                    margin='dense'
                    sx={{
                      width: '45%',
                      marginBottom: '10px',
                    }}
                    onChange={(event) => handleInputChange(event, 0)}
                    onBlur={(event) => handleBlur(event, 0)}
                    // inputProps={{
                    //   step: 1,
                    //   min: 0,
                    //   max: 100,
                    //   type: 'number',
                    // }}
                  />
                  <Input
                    value={range[1]}
                    margin='dense'
                    sx={{
                      width: '45%',
                      
                      marginBottom: '10px',
                    }}
                    onChange={(event) => handleInputChange(event, 1)}
                    onBlur={(event) => handleBlur(event, 1)}
                    inputProps={{
                      step: 1,
                      min: 0,
                      max: 100,
                      type: 'number',
                    }}
                  />
                </Box>
                <Slider
                  sx={{ color: '#3e8e41' }}
                  value={range}
                  onChange={handleSliderChange}
                  min={30}
                  step={0.1}
                  max={4000}
                  valueLabelDisplay='auto'
                />
                <Box>
                  <Typography variant='span'>Min</Typography>

                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    Max
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel2a-content'
                id='panel2a-header'
              >
                <Typography>AVAILABILITY</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel2a-content'
                id='panel2a-header'
              >
                <Typography>READY TO SHIP</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel2a-content'
                id='panel2a-header'
              >
                <Typography>SIZE</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
          </div>
        </Box>
        <Box className='col-size-four'>
          {Product &&
            Product.map((product) => {
              return (
                <Link
                  to={`/product/${product.product_id}`}
                  className='underline-none card-container-padding-size-four'
                >
                  <ProductCollectionCard product={product} />
                </Link>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
}
