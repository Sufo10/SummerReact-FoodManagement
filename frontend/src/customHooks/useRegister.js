/* eslint-disable consistent-return */
import { useState } from 'react';
import axios from '../service/axiosInstance';

const useRegister = () => {
  const [error, setError] = useState({});

  const register = async user => {
    try {
      setError({});
      const response = await axios.post('auth/register', user);
      return response;
    } catch (err) {
      setError(err);
    }
  };
  return { register, error };
};

export default useRegister;
