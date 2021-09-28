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


export const ApiActions = {
    callGetMintedTokens,
    savegetMintedTokens,
    callCheckLoginOrRegister,
    callCreateCollection,
    saveCollection,
    callGetCollection
}