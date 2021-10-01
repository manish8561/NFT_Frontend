import types from "../types";

const initialState = {
  mintedLogs: [],
  collections: [],
  nft: [],
  nftDetails: [],
  createItemData: {},
  collectionsById: []
};

const api = (state = initialState, {type, payload}) => {
  // The reducer normally looks at the action type field to decide what happens
  switch (type) {
    // Do something here based on the different types of actions
    case types.reducer.api.SAVE_GET_MINTED_TOKENS:
      return { ...state, mintedLogs: payload.logs };

    case types.reducer.api.SAVE_GET_NFT:
        return { ...state, nft: payload.nft };

    case types.reducer.form.SAVE_CREATE_ITEM_FORM_VALUES:
        return { ...state, createItemData: payload.item }

    case types.reducer.api.SAVE_GET_COLLECTIONS:
      return { ...state, collections: payload.collections };

    case types.reducer.api.SAVE_GET_COLLECTIONS_BY_ID:
      return { ...state, collectionsById: payload.collectionsById };
    
    case types.reducer.api.SAVE_GET_NFT_DETAILS:
      return { ...state, nftDetails: payload.nftDetails };
    
    default:
      return state;
  }
}

export default api;