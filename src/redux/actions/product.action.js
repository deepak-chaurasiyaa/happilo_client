import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts } from "../api/product.api";

export const productsAsync = createAsyncThunk('all-products', async () => {  // Banner or Carousel
  const response = await getAllProducts();
  return response.data;
});
