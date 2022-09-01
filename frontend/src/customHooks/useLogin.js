/* eslint-disable consistent-return */
import { useState } from 'react';
import axios from '../service/axiosInstance';

const useLogin = () => {
  const [error, setError] = useState({});

  const login = async user => {
    try {
      setError({});
      const response = await axios.post('auth/login', user);
      return response;
    } catch (err) {
      setError(err);
    }
  };
  return { login, error };
};

export default useLogin;
