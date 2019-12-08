import * as actTypes from "../ActionTypes";

export default (
  state = {
    isLoading: true,
    errMess: null,
    messages: []
  },
  action
) => {
  switch (action.type) {
    case actTypes.GETMSGS_LOADING:
      return { isLoading: true, errMess: null, messages: [] };
    case actTypes.GETMSGS_FAILED:
      return { isLoading: false, errMess: action.errMess, messages: [] };
    case actTypes.GETMSGS_SUCCESS:
      return { isLoading: false, errMess: null, messages: action.messages };
    case actTypes.SENDMSG:
      return { ...state, messages: [...state.messages, action.message] };
    default:
      return state;
  }
};
