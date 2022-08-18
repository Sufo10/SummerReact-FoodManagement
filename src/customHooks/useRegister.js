/* eslint-disable consistent-return */
import { useState } from 'react';
import axios from 'axios';

const useRegister = () => {
  const [error, setError] = useState({});

  const register = async user => {
    try {
      setError({});
      const response = await axios.post('register', user, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response;
    } catch (err) {
      const errorObj = {};
      if (err.response) {
        error.response.data.details.forEach(e => {
          const key = e.message.split(' ').slice(1, -1);
          errorObj[key] = e.message;
        });
      }
      setError(errorObj);
    }
  };
  return { register, error };
};

export default useRegister;
