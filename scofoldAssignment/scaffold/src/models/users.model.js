import axios from 'axios';

export const userModel = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/users');
    // console.log(response.data)
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching user data: ${error.message}`);
  }
};
