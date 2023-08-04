import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBrandLogo, getCarouselImage } from "../api/brand.api";


export const brandLogoAsync = createAsyncThunk('brand-logo', async () => { // Logo of the application
  const response = await getBrandLogo();
  return response.data;
});

export const carouselImageAsync = createAsyncThunk('carousel-image', async () => {  // Banner or Carousel
  const response = await getCarouselImage();
  return response.data;
});
