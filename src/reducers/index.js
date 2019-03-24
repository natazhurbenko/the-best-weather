// @flow
import {
  REQUESTED_WHEATHER,
  SUCCESSED_WHEATHER,
  FAILED_WHEATHER
} from '../actions/actionTypes';


type State = {
  error: any,
  isLoading: boolean,
  data: Array
};

type Action = {
  type: string,
  payload: any
};


export const  INITIAL_STATE = {
  isLoading: false,
  data: null,
  error: ''
};

export const reducer = ( state: State =  INITIAL_STATE, action: Action ) => {
  switch( action.type ) {
    case REQUESTED_WHEATHER:
      return { ...state, isLoading: true, error: '', data: [] };

    case SUCCESSED_WHEATHER:
      return { ...state, isLoading: false, data: action.payload };

    case FAILED_WHEATHER:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};