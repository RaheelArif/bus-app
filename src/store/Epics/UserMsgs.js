import {
  getMsgsFailed,
  getMsgsSuccess,
  getMsgsLoading
} from "../actions/UserMsgs";
import { baseUrl } from "../../shared";
import axios from "axios";
export const getMessages = userId => dispatch => {
  console.log("test", userId);
  dispatch(getMsgsLoading());
  axios
    .get(baseUrl + "messages/" + userId)
    .then(res => {
      console.log(res);
      if (res.data.success) {
        dispatch(getMsgsSuccess(res.data.messages));
        return;
      }
      const err = new Error(res.status + " : " + res.statusText);
      throw err;
    })
    .catch(err => dispatch(getMsgsFailed(err.message)));
};
