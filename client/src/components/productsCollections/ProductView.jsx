import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  Box,
  Toolbar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Input,
  Slider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  getUniqueAvailableQuantity,
  getUniqueAvilability,
  getUniqueSubCollections,
  getUniqueVendors,
  minMaxValueOfKeyFromArrayOfObject,
  notIsEmptyArray,
} from '../../shared/common';

import CircularLoader from '../common/Loader';
import ProductCollectionCard from './ProductCollectionCard';

export default function ProductView({ Product, MainTitle }) {
  const [timerId, setTimerId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [productDetails, setproductDetails] = useState([...Product]);
  const price = minMaxValueOfKeyFromArrayOfObject(
    'product_selling_price',
    productDetails
  );
  const [range, setRange] = useState([price.min, price.max]);

  const vendorList = getUniqueVendors(Product);
  const avilabilityList = getUniqueAvilability(Product);
  const subCollectionsArray = getUniqueSubCollections(productDetails);
  const uniqueAvailableQuantity = getUniqueAvailableQuantity(productDetails);

  let filterProductByPrice = (data) => {
    const [min, max] = data;
    setLoading(true);
    const product = Product.filter((product) => {
      return (
        product.product_selling_price >= min &&
        product.product_selling_price <= max
      );
    });
    setproductDetails(product);
    setLoading(false);
  };

  const handleSliderChange = (event, newValue) => {
    setRange(newValue);
  };

  const handleSliderChangeCommitted = (event, newValue) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    setLoading(true);
    setTimerId(
      setTimeout(() => {
        filterProductByPrice(newValue);
        setLoading(false);
      }, 1000)
    );
  };
  const handleInputChange = (event, inputIndex) => {
    setLoading(true);
    const value = Number(event.target.value);
    const newRange = [...range];
    newRange[inputIndex] = value;
    setRange(newRange);

    filterProductByPrice(newRange);
    setLoading(false);
  };
  const handleBlur = (event, inputIndex) => {
    setLoading(true);
    const value = Number(event.target.value);
    if (value < 0) {
      setRange(['', range[1]]);
    } else {
      const newRange = [...range];
      newRange[inputIndex] = value;
      setRange(newRange);
      filterProductByPrice(newRange);
      setLoading(false);
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
          <Box>
            {notIsEmptyArray(subCollectionsArray) && (
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <Typography>COLLECTION</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {subCollectionsArray.map(({ subCollection, count }) => {
                    return (
                      <Box>
                        <Typography variant='span'>
                          <input
                            type='checkbox'
                            onClick={(e) => {
                              alert(e.target.checked);
                            }}
                          />
                        </Typography>
                        <Typography variant='span' padding='0 0 0 5px'>
                          {subCollection}
                        </Typography>
                        <Typography
                          variant='span'
                          padding='0 0 0 5px'
                          sx={{ float: 'right' }}
                        >
                          ({count})
                        </Typography>
                      </Box>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            )}
            {notIsEmptyArray(vendorList) && (
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel2a-content'
                  id='panel2a-header'
                >
                  <Typography>VENDOR</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {vendorList.map(({ vendor, count }) => {
                    return (
                      <Box>
                        <Typography variant='span'>
                          <input type='checkbox' />
                        </Typography>
                        <Typography variant='span' padding='0 0 0 5px'>
                          {vendor}
                        </Typography>
                        <Typography
                          variant='span'
                          padding='0 0 0 5px'
                          sx={{ float: 'right' }}
                        >
                          ({count})
                        </Typography>
                      </Box>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            )}
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
                    type='number'
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
                    type='number'
                  />
                </Box>
                <Slider
                  sx={{ color: '#3e8e41' }}
                  value={range}
                  onChange={handleSliderChange}
                  min={100}
                  step={100}
                  max={1000}
                  marks
                  valueLabelDisplay='auto'
                  onChangeCommitted={handleSliderChangeCommitted}
                />
                <Box>
                  <Typography variant='span'>{100}</Typography>

                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    {10000}
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
            {notIsEmptyArray(avilabilityList) && (
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel2a-content'
                  id='panel2a-header'
                >
                  <Typography>AVAILABILITY</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {avilabilityList.map(({ avilability, count }) => {
                    return (
                      <Box>
                        <Typography variant='span'>
                          <input type='checkbox' />
                        </Typography>
                        <Typography variant='span' padding='0 0 0 5px'>
                          {avilability}
                        </Typography>
                        <Typography
                          variant='span'
                          padding='0 0 0 5px'
                          sx={{ float: 'right' }}
                        >
                          ({count})
                        </Typography>
                      </Box>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            )}
            {notIsEmptyArray(uniqueAvailableQuantity) && (
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel2a-content'
                  id='panel2a-header'
                >
                  <Typography>SIZE</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {uniqueAvailableQuantity.map(({ avilability, count }) => {
                    return (
                      <Box>
                        <Typography variant='span'>
                          <input type='checkbox' />
                        </Typography>
                        <Typography variant='span' padding='0 0 0 5px'>
                          {avilability}
                        </Typography>
                        <Typography
                          variant='span'
                          padding='0 0 0 5px'
                          sx={{ float: 'right' }}
                        >
                          ({count})
                        </Typography>
                      </Box>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            )}
          </Box>
        </Box>
        {!loading && productDetails && productDetails.length === 0 && (
          <Typography
            variant='h2'
            sx={{ textAlign: 'center', padding: '15rem 0' }}
          >
            No Product Found ...
          </Typography>
        )}
        {loading ? (
          <>
            <CircularLoader />
          </>
        ) : (
          <Box className='col-size-four'>
            {notIsEmptyArray(productDetails) &&
              productDetails.map((product) => {
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
        )}
      </Box>
    </Box>
  );
}
