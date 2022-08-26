import { del, get, post, put } from "./NetworkUtils";
import { BASE_URL } from "./config";

// get api - use the mode to create new api functions
export const getUserList = pageNos => {
  const isAuthenticated = true;
  const URL = `/users?page=${pageNos}`;
  return get(BASE_URL, URL, isAuthenticated);
};

export const addNewUser = PAYLOAD => {
  const isAuthenticated = true;
  const multiPathConfig = true;
  const URL = `/users`;
  return post(BASE_URL, URL, PAYLOAD, isAuthenticated, multiPathConfig);
};
export const getUser = id => {
  const isAuthenticated = true;
  const URL = `/users/${id}`;
  return get(BASE_URL, URL, isAuthenticated);
};
export const updateUser = (id, PAYLOAD) => {
  const isAuthenticated = true;
  const multiPathConfig = true;
  const URL = `/users/${id}`;
  return put(BASE_URL, URL, PAYLOAD, isAuthenticated, multiPathConfig);
};
export const deleteUser = id => {
  const isAuthenticated = true;
  const URL = `/users/${id}`;
  return del(BASE_URL, URL, isAuthenticated);
};
