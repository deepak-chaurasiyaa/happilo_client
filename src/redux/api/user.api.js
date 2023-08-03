// api.js
import axios from 'axios';
import { BASE_URL } from '../../shared/constant';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/signup`, userData);
    return response.data;
  } catch (error) {
    throw Error(`Failed to register user: ${error.message}`);
  }
};
