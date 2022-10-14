import { FORM_TYPE } from "./statusType";

export const INITIAL_STATE = {
  title: "",
  desc: "",
  price: 0,
  category: "",
  tags: [],
  quantity: 0,
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case FORM_TYPE.CHANGE_INPUT:
      return { ...state, [action.payload.name]: action.payload.value };
    case FORM_TYPE.ADD_TAG:
      return { ...state, tags: [...state.tags, action.payload] };
    case FORM_TYPE.REMOVE_TAG:
      return {
        ...state,
        tags: state.tags.filter((tag) => tag !== action.payload),
      };
    case FORM_TYPE.INCREASE:
      return {
        ...state,
        quantity: state.quantity !== 99 ? state.quantity + 1 : 99,
      };
    case FORM_TYPE.DECREASE:
      return {
        ...state,
        quantity: state.quantity !== 0 ? state.quantity - 1 : 0,
      };
    default:
      return state;
  }
};
