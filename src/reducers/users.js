import { GET_USERS_SUCCESS, GET_USERS_FAILED } from "../actions/users";

// Initial values
const initialState = {
  results: [],
  info: {},
  error: ""
};

// Users Reducer
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    // Set users data on success
    case GET_USERS_SUCCESS:
      return {
        ...state,
        error: "",
        results: action.payload.results,
        info: action.payload.info
      };
    // Set error message on failed
    case GET_USERS_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default usersReducer;
