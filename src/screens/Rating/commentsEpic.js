import { baseUrl } from "../../shared";
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
      alert(res.message);
    })
    .catch(err => alert(err.message));
};
