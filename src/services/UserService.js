import { fetch } from "./Fetch";
import { API_HOST } from "../constant";

const login = user => {
  return fetch("post", `${API_HOST}user/signin`, user);
};
const getIp = () => {
  return fetch("get", "https://jsonip.com");
};
const forgetPassword = user => {
  return fetch("post", `${API_HOST}users/user/forgotPassword`, user);
};

const userKyc = options => {
  return fetch(
    "get",
    `${API_HOST}users/user/kyc
  `,
    {},
    options
  );
};

const changePassword = (user, options) => {
  return fetch("post", `${API_HOST}users/user/resetPassword`, user, options);
};

export const UserService = {
  login,
  getIp,
  forgetPassword
};
