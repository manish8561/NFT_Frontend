import types from "../types";

const initialState = {
  address: "",
  isLoggedIn: false,
  jwtToken: ""
};

const persist = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.reducer.persist.SAVE_WALLET_ADDRESS:
      return { ...state, address: payload.address };
    case types.reducer.persist.SAVE_IS_LOGGED_IN:
      return { ...state, isLoggedIn: true };
    case types.reducer.persist.SAVE_JWT_TOKEN:
      return { ...state, jwtToken: payload };
    case types.reducer.persist.RESET_STORE:
      return initialState;
    default:
      return state;
  }
}

export default persist;