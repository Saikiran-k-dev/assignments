import axios from 'axios';

export const userDetails = async () => {
  axios.get('https://dummyjson.com/users')
    .then(response => {
       
        return response.data
    })
};

