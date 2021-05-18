import { UserService } from "../../services/UserService";

const LOGIN = "auth/LOGIN";

export const USER_STATUS_UPDATE = "/USER_STATUS_UPDATE";
const initialState = {
  jwtToken: undefined
};

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN:
      return { ...state };
    default:
      return state;
  }
}
export const login = user => {
  console.log("LOGIN DATA", user);
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      UserService.login(user)
        .then(res => {
          resolve(res);
        })
        .catch(ex => {
          reject(ex);
        });
    });
  };
};
