import { types } from '../types';

const initialState = {};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        uid: action.payload.uid,
        name: action.payload.displayName,
        photoURL: action.payload.photoURL,
        isLoggedIn: true,
      };

    case types.logout:
      return initialState;

    default:
      return state;
  }
};
