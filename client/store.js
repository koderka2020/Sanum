import React, { createContext, useReducer } from 'react';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  imageUrl: '',
  loginRedirect: false,
  totalIntake: 0,
  caloriesBurnt: 0,
  goal: 0,
  userId: '',
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    let newState;
    console.log('state>>>>>>>>>', state)
    switch (action.type) {
      case 'SET_USER':
        newState = {
          ...state,
          firstname: action.payload.firstname,
          lastname: action.payload.lastname,
          email: action.payload.email,
          imageUrl: action.payload.imageUrl,
          loginRedirect: action.payload.loginRedirect,
          userId: action.payload.userId,
        };
        return newState;

      case 'SET_CALORIC_GOAL':
        newState = {
          ...state,
          goal: action.payload.goal,
        };
        return newState;

      default:
        return state;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
