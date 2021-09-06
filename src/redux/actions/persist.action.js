import types from "../types";

const saveWalletAddress = (data) => ({
    type: types.reducer.persist.SAVE_WALLET_ADDRESS,
    payload: data
})

const callSaveWalletAddress = (data) => ({
    type: types.saga.persist.CALL_SAVE_WALLET_ADDRESS,
    payload: data
});

export const PersistActions = {
    saveWalletAddress,
    callSaveWalletAddress
}