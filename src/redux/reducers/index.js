import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import user from "./user";
import loading from "./loading";
export const history = createBrowserHistory();
const appReducer = combineReducers({
  user: user,
  loading: loading,
  form: formReducer,
  router: connectRouter(history)
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_USERS_PERSIST") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
