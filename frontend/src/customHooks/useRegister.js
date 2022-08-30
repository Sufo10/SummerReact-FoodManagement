/* eslint-disable consistent-return */
import { useState } from 'react';
import axios from 'axios';

const useRegister = () => {
  const [error, setError] = useState({});

  const register = async user => {
    try {
      setError({});
<<<<<<< HEAD
      const response = await axios.post('http://localhost:4000/register', user);
=======
      const response = await axios.post('/auth/register', user, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
>>>>>>> 662c4b2565efcfa1bcb128a66f04c27587bcc115
      return response;
    } catch (err) {
      const errorObj = {};
      if (err.response) {
<<<<<<< HEAD
        // err.response.data.details.forEach(e => {
        //   const key = e.message.split(' ').slice(1, -1);
        //   errorObj[key] = e.message;
        // });
        console.log(err.response.data.details);
=======
        console.log(err.response);
        err.response.data.details.forEach(e => {
          const key = e.message.split(' ')[0].slice(1, -1);
          errorObj[key] = e.message;
        });
>>>>>>> 662c4b2565efcfa1bcb128a66f04c27587bcc115
      }
      setError(errorObj);
    }
  };
  return { register, error };
};

export default useRegister;
