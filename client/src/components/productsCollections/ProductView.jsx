import React, { useState } from 'react';
import {
  Typography,
  Box,
  Toolbar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

import ProductCollectionCard from './ProductCollectionCard';

export default function ProductView({ Product, MainTitle }) {
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
