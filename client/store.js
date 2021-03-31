import React, { createContext, useReducer } from 'react';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  imageUrl: '',
  loginRedirect: false
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {

    switch(action.type) {
      case 'SET_USER':
        const newState = {
          firstname: action.payload.firstname,
          lastname: action.payload.lastname,
          email: action.payload.email,
          imageUrl: action.payload.imageUrl,
          loginRedirect: action.payload.loginRedirect
        }
        return newState;
  
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }