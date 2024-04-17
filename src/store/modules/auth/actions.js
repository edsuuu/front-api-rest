import * as types from '../types';

export function loginRequest(payload) {
     return {
          type: types.LOGIN_REQUEST_REQUEST,
          payload,
     }
}
export function loginSuccess(payload) {
     return {
          type: types.LOGIN_REQUEST_SUCCESS,
          payload,
     }
}
export function loginFailure(payload) {
     return {
          type: types.LOGIN_REQUEST_FAILURE,
          payload,
     }
}



