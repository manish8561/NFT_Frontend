import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { history } from "../history";
import { connectRouter } from "connected-react-router";
import loading from "./loading";
import persist from "./persist.reducer";
import api from "./api.reducer";

const appReducer = combineReducers({
  persist: persist,
  api: api,
  loading: loading,
  form: formReducer,
  router: connectRouter(history)
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
