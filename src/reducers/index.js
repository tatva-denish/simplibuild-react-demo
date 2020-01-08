import { combineReducers } from "redux";
import usersReducer from "./users";

/**
 * Combine reducers to root reducer.
 */
const rootReducer = combineReducers({
  users: usersReducer
});

export default rootReducer;
