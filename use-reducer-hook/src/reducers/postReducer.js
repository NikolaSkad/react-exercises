import { STATUS_TYPE } from "./statusType";

export const INITIAL_STATE = {
  loading: false,
  error: false,
  post: {},
};
// state je current state, na pocetku je to INITIAL_STATE
// action je funkcija koja update-uje state i vraca novu verziju state
export const postReducer = (state, action) => {
  switch (action.type) {
    case STATUS_TYPE.FETCH_START:
      return {
        loading: true,
        error: false,
        post: {},
      };
    case STATUS_TYPE.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload,
      };
    case STATUS_TYPE.FETCH_ERROR:
      return {
        loading: false,
        error: true,
        post: {},
      };
    default:
      return state;
  }
};
