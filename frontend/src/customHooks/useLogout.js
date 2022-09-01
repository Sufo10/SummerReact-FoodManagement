import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const useLogout = () => {
  const { dispatch } = useContext(UserContext);

  const logout = () => {
    localStorage.removeItem('token');
    dispatch({
      type: 'LOGOUT',
    });
  };
  return { logout };
};

export default useLogout;
