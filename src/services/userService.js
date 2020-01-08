import axios from "./api";

/**
 * Get Users API call
 * @param {object} data
 */
export const getUsers = data => axios.get(`/?results=${data.count}`);
