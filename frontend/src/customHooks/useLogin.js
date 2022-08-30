/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import axios from 'axios';

const useLogin = () => {
  const [error, setError] = useState({});
  const login = user => {
    try {
      setError({});
      const response = axios.post('login', user, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response;
    } catch (err) {
      const errorObj = {};
      if (err.response) {
        err.response.data.details.forEach(e => {
          const key = e.message.split(' ').slice(1, -1);
          errorObj[key] = e.message;
        });
      }
      setError(errorObj);
    }
  };
  return { login };
};

export default useLogin;
