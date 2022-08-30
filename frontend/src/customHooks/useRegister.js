/* eslint-disable consistent-return */
import { useState } from 'react';
import axios from 'axios';

const useRegister = () => {
  const [error, setError] = useState({});

  const register = async user => {
    try {
      setError({});
      const response = await axios.post('http://localhost:4000/register', user);
      return response;
    } catch (err) {
      const errorObj = {};
      if (err.response) {
        // err.response.data.details.forEach(e => {
        //   const key = e.message.split(' ').slice(1, -1);
        //   errorObj[key] = e.message;
        // });
        console.log(err.response.data.details);
      }
      setError(errorObj);
    }
  };
  return { register, error };
};

export default useRegister;
