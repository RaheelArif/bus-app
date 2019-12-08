import {
  GET_COMMENTS_FAILED,
  GET_COMMENTS_LOADING,
  GET_COMMENTS_SUCCESS,
  UPDATE_COMMENTS
} from "../ActionTypes";

export default (
  state = {
    isLoading: false,
    errMess: null,
    comments: []
  },
  action
) => {
  switch (action.type) {
    case GET_COMMENTS_LOADING:
      return { isLoading: true, errMess: null, comments: [] };
    case GET_COMMENTS_FAILED:
      return { isLoading: false, errMess: action.errMess, comments: [] };
    case GET_COMMENTS_SUCCESS:
      return { isLoading: false, errMess: null, comments: action.comments };
    case UPDATE_COMMENTS:
      return { ...state, comments: [action.comments, ...state.comment] };
    default:
      return state;
  }
};
