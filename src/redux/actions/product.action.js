import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts, getProductByProductId, searchProduct } from "../api/product.api";

export const productsAsync = createAsyncThunk('all-products', async () => {  // Banner or Carousel
  const response = await getAllProducts();
  return response.data;
});
export const productDetailsAsync = createAsyncThunk('product-details', async (productId) => {  // Banner or Carousel
  const response = await getProductByProductId(productId);
  return response.data;
});
export const searchProductAsync = createAsyncThunk('search-product', async (query) => {  // Banner or Carousel
  const response = await searchProduct(query);
  return response.data;
});
