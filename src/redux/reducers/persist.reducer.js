import types from "../types";

const initialState = {
  address: ""
};

const persist = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.reducer.persist.SAVE_WALLET_ADDRESS:
      return { ...state, address: payload.address };
   
    default:
      return state;
  }
}

export default persist;