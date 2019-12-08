import { SET_CURRENT_USER, REGISTER } from "../actions/types";
import isEmpty from "../../utils/isEmpty";

const initialState = {
  isAuthenticated: false,
  user: {},
  register: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case REGISTER:
      return {
        ...state,
        register: action.payload
      };
    default:
      return state;
  }
}
