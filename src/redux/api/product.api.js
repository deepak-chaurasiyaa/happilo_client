import axios from 'axios';
import { BASE_URL } from '../../shared/constant';

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/product`);
    return response.data;
  } catch (error) {
    throw Error(`Failed to Get Banner: ${error.message}`);
  }
};
