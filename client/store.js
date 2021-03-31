import React, { createContext, useReducer } from 'react';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  loginRedirect: false
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    console.log('state >>> ', state);  

    switch(action.type) {
      case 'SET_USER':
        const newState = {
          firstname: action.payload.firstname,
          lastname: action.payload.lastname,
          email: action.payload.email,
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