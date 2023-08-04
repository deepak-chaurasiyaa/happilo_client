import axios from 'axios';
import { BASE_URL } from '../../shared/constant';

export const getBrandLogo = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/brand`);
    return response.data;
  } catch (error) {
    throw Error(`Failed to Get Logo: ${error.message}`);
  }
};
export const getCarouselImage = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/brand/banner`);
    return response.data;
  } catch (error) {
    throw Error(`Failed to Get Banner: ${error.message}`);
  }
};
