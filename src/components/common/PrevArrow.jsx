// PrevArrow.jsx
import React from 'react';
import { KeyboardArrowLeft } from '@mui/icons-material';

export function PrevArrow(props) {
  const { className, style, onClick, currentSlide } = props;
  const showArrow = currentSlide > 0;

  return (
    <KeyboardArrowLeft
      className={`${className} custom-arrow prev-arrow arrow-carousel 
      `}
      onClick={onClick}
    />
  );
}
