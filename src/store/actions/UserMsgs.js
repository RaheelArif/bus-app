import * as actTypes from "../ActionTypes";

export const getMsgsSuccess = messages => ({
  type: actTypes.GETMSGS_SUCCESS,
  messages
});

export const getMsgsFailed = errMess => ({
  type: actTypes.GETMSGS_FAILED,
  errMess
});

export const getMsgsLoading = () => ({
  type: actTypes.GETMSGS_LOADING
});

export const sendMsg = message => ({
  type: actTypes.SENDMSG,
  message
});
