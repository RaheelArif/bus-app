import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/authReducer";
import errorReducer from "./reducers/errorReducer";
import UserMsgs from "./reducers/UserMsgs";
import Comments from "./reducers/Comments";

const middleware = [thunk];

const rootreducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  UserMsgs,
  Comments
});

const store = createStore(rootreducer, {}, applyMiddleware(...middleware));

export default store;
