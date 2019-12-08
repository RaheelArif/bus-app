import * as commentsAct from "../actions/Comments";
import { baseUrl } from "../../shared";

export const getComments = () => dispatch => {
    // dispatch(commentsAct.getCommentsLoading());
  fetch(baseUrl + "comments")
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      const err = new Error(res.status + " : " + res.statusText);
      throw err;
    })
    .then(res => {
      console.log(res);
      alert(res.message);
    })
    .catch(err => alert(err.message));
};

export const submitComment = com => {
  fetch(baseUrl + "comments", {
    method: "POST",
    body: JSON.stringify(com),
    headers: {
      "content-type": "application/json"
    }
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      const err = new Error("Some thing went wrong please try again later");
      throw err;
    })
    .then(res => {
      console.log(res);
      alert(res.message);
    })
    .catch(err => alert(err.message));
};
