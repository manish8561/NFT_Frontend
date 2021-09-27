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

const callSaveCollection = (data) => ({
    // The Redux store doesn't care what the actual text of the action.type field is. 
    // However, your own code will look at action.type to see if an update is needed.
    type: types.reducer.api.SAVE_GET_COLLECTIONS,
    //We normally put any extra data needed to describe what's happening into the action.payload field.
    //  This could be a number, a string, or an object with multiple fields inside.
    payload: data
})

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
    callSaveCollection,
    callGetCollection
}