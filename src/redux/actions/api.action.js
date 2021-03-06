import types from "../types"

const saveCreateFormDetails = (data) => ({
    type: types.reducer.form.SAVE_CREATE_ITEM_FORM_VALUES,
    payload: data
});


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

const callGetCollectionById = (data) => ({
    type: types.saga.api.CALL_GET_COLLECTIONS_BY_ID,
    payload: data
});

const saveCollectionById= (data) => ({
    type: types.reducer.api.SAVE_GET_COLLECTIONS_BY_ID,
    payload: data
});

const callGetNft = (data) => ({
    type: types.saga.api.CALL_GET_NFT,
    payload: data
});

const saveNft= (data) => ({
    type: types.reducer.api.SAVE_GET_NFT,
    payload: data
});

const callCreateNft = (data, history) => ({
    type: types.saga.api.CALL_CREATE_NFT,
    payload: data,
    history
});

const callGetNftDetails = (data) => ({
    type: types.saga.api.CALL_GET_NFT_DETAILS,
    payload: data
});

const saveNftDetails= (data) => ({
    type: types.reducer.api.SAVE_GET_NFT_DETAILS,
    payload: data
});


export const ApiActions = {
    saveCreateFormDetails,
    callGetMintedTokens,
    savegetMintedTokens,
    callCheckLoginOrRegister,
    callCreateCollection,
    saveCollection,
    callGetCollection,
    callCreateNft,
    callGetNft,
    callGetNftDetails,
    saveNftDetails,
    saveNft,
    callGetCollectionById,
    saveCollectionById
}