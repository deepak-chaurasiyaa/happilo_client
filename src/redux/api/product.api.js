import axios from 'axios';
import { BASE_URL } from '../../shared/constant';

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/product`);
    return response.data;
  } catch (error) {
    throw Error(`Failed to Get Data : ${error.message}`);
  }
};
export const getProductByProductId = async (productId) => {
  try {
    const response = await axios.get(`${BASE_URL}/product/${productId}`);
    return response.data;
  } catch (error) {
    throw Error(`Failed to Get Data : ${error.message}`);
  }
};
export const searchProduct = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/product/search-product?query=${query}`);
    console.log({first:response.data})
    return response.data;
  } catch (error) {
    throw Error(`Failed to Get Data : ${error.message}`);
  }
};
