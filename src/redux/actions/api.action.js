import types from "../types"

const savegetMintedTokens = (data) => ({
    type: types.reducer.api.SAVE_GET_MINTED_TOKENS,
    payload: data
});

const callGetMintedTokens = (data) => ({
    type: types.saga.api.CALL_GET_MINTED_TOKENS,
    payload: data
});

const callCheckLoginOrRegister = (data, history) => ({
    type: types.saga.api.CALL_CHECK_LOGIN_OR_REGISTER,
    payload: data,
    history
});

const saveCollection = (data) => ({
    type: types.reducer.api.SAVE_GET_COLLECTIONS,
    payload: data
});

const callGetCollection = (data) => ({
    type: types.saga.api.CALL_GET_COLLECTIONS,
    payload: data
})

const callCreateCollection = (data, history) => ({
    type: types.saga.api.CALL_CREATE_COLLECTION,
    payload: data,
    history
})

const callGetNft = (data) => ({
    type: types.saga.api.CALL_GET_NFT,
    payload: data
});

const saveNft= (data) => ({
    type: types.reducer.api.SAVE_GET_NFT,
    payload: data
});

const callGetCollectionById = (data) => ({
    type: types.saga.api.CALL_GET_COLLECTIONS_BY_ID,
    payload: data
});

const saveCollectionById= (data) => ({
    type: types.reducer.api.SAVE_GET_COLLECTIONS_BY_ID,
    payload: data
});

export const ApiActions = {
    callGetMintedTokens,
    savegetMintedTokens,
    callCheckLoginOrRegister,
    callCreateCollection,
    saveCollection,
    callGetCollection,
    callGetNft,
    saveNft,
    callGetCollectionById,
    saveCollectionById
}