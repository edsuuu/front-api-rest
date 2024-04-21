import * as types from '../types';

const initialState = {
     isLoggedIn: false,
     token: false,
     user: {},
     isLoading: false,
}

export default function authReducer(state = initialState, action) {
     switch (action.type) {
          case types.LOGIN_REQUEST_SUCCESS: {
               const newState = { ...state };
               newState.isLoggedIn = true;
               newState.token = action.payload.token;
               newState.user = action.payload.user;
               newState.isLoading = false;
               return newState;
          }
          case types.LOGIN_REQUEST_FAILURE: {
               
               const newState = { ...initialState };
               newState.isLoading = false;
               return newState;
          }

          case types.LOGIN_REQUEST_REQUEST: {
               const newState = { ...initialState };
               newState.isLoading = true;
               return newState;
          }

          default: {
               return state;
          }
     }
}
