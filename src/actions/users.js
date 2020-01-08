export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILED = "GET_USERS_FAILED";

// Get users success action
export const getUsersSuccess = payload => ({
  type: GET_USERS_SUCCESS,
  payload
});

// Get users failed action
export const getUsersFailed = payload => ({
  type: GET_USERS_FAILED,
  payload
});
