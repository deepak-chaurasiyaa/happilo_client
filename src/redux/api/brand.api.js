import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

export const getBrandLogo = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/brand`);
    return response.data;
  } catch (error) {
    throw Error(`Failed to register user: ${error.message}`);
  }
};
