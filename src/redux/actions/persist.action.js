import types from "../types";

const saveWalletAddress = (data) => ({
    type: types.reducer.persist.SAVE_WALLET_ADDRESS,
    payload: data
})

const callSaveWalletAddress = (data) => ({
    type: types.saga.persist.CALL_SAVE_WALLET_ADDRESS,
    payload: data
});

const callSaveIsLoggedIn = (bool) => ({
    type: types.saga.persist.CALL_SAVE_IS_LOGGED_IN,
    payload: bool
})

const resetStore = () => ({
    type: types.reducer.persist.RESET_STORE
})

export const PersistActions = {
    saveWalletAddress,
    callSaveWalletAddress,
    callSaveIsLoggedIn,
    resetStore
}