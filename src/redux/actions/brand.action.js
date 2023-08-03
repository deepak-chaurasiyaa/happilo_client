import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBrandLogo } from "../api/brand.api";


export const brandLogoAsync = createAsyncThunk('brandlogo', async () => {
  const response = await getBrandLogo();
  return response.data;
});
