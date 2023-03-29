import React, { useState } from 'react';
import {
  Typography,
  Box,
  Toolbar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Slider,
  Input,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

import ProductCollectionCard from './ProductCollectionCard';
function valuetext(value) {
  return `${1990}°C`;
}

const minDistance = 10;
export default function ProductView({ Product, MainTitle }) {
  const [value1, setValue1] = React.useState([20, 37]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  const [value2, setValue2] = React.useState([20, 37]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 500 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
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
                <Box >
                  <Input className='price-filter-input' type='number'></Input>
                  <Input className='price-filter-input' type='number'></Input>
                </Box>
                <Box></Box>
                <Box>
                  <Slider
                    getAriaLabel={() => 'Minimum distance'}
                    value={value1}
                    onChange={handleChange1}
                    valueLabelDisplay='auto'
                    getAriaValueText={valuetext}
                    disableSwap
                    min={2}
                    step={10}
                    max={300}
                  />
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
