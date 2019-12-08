import {
    GET_COMMENTS_FAILED,
    GET_COMMENTS_LOADING,
    GET_COMMENTS_SUCCESS,
    UPDATE_COMMENTS
  } from "../ActionTypes";
  
  export const getCommentsSuccess = comments => ({
    type: GET_COMMENTS_SUCCESS,
    comments
  });
  
  export const getCommentsFailed = errMess => ({
    type: GET_COMMENTS_FAILED,
    errMess
  });
  
  export const getCommentsLoading = () => ({
    type: GET_COMMENTS_LOADING
  });
  export const updateComments = (comment)=>({
      type:UPDATE_COMMENTS,
      comment
  })