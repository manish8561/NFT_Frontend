import types from "../types";

const initialState = {
  mintedLogs: []
};

const api = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.reducer.api.SAVE_GET_MINTED_TOKENS:
      return { ...state, mintedLogs: payload.logs };
   
    default:
      return state;
  }
}

export default api;