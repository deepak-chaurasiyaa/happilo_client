import React from 'react';
import { KeyboardArrowRight } from '@mui/icons-material';

export function NextArrow(props) {
  const { className, style, onClick, currentSlide, slideCount } = props;
  const showArrow = currentSlide < slideCount - 1;

  return (
      <KeyboardArrowRight  className={`${className} custom-arrow next-arrow arrow-carousel ${showArrow ? 'show' : 'hide'}`} onClick={onClick}/>
   
  );
}
