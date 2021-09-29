import types from "../types";

// Reducers are functions that take the current state and an action as arguments, and return a new state result.
// In other words, (state, action) => newState.

// Every reducer needs some initial state.
// Then, we can write an outline for the logic inside the reducer function:

const initialState = {
  mintedLogs: [],
  collections: [],
  nft:[],
};

const api = (state = initialState, {type, payload}) => {
  // The reducer normally looks at the action type field to decide what happens
  switch (type) {
    // Do something here based on the different types of actions
    case types.reducer.api.SAVE_GET_MINTED_TOKENS:
      return { ...state, mintedLogs: payload.logs };

    case types.reducer.api.SAVE_GET_NFT:
        return { ...state, nft: payload.nft };

    case types.reducer.api.SAVE_GET_COLLECTIONS:
      return { ...state, collections: payload.collections };
    
    default:
      return state;
  }
}

export default api;