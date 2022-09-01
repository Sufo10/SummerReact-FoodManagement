import { createContext, useReducer, useEffect } from 'react';

export const UserContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return { token: action.payload };
    case 'LOGOUT':
      return { token: null };
    default:
      return state;
  }
};

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, { token: null });
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch({
        type: 'ADD_USER',
        payload: JSON.parse(localStorage.getItem('token')),
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
