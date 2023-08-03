// api.js
import axios from 'axios';

const BASE_URL = `${process.env.REACT_APP_API_URL}`;

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/signup`, userData);
    return response.data;
  } catch (error) {
    throw Error(`Failed to register user: ${error.message}`);
  }
};
