import types from "../types"
import packageJson from '../../../package.json'


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
});

const resetStore = () => ({
    type: types.reducer.persist.RESET_STORE
});

const versionManager = () => {
    try {
        const version = packageJson.version;
        const react_version = localStorage.getItem('react_version');
        if (react_version && version !== react_version) {
            localStorage.clear();
            window.location.reload();
        }
        if (!react_version) {
            localStorage.setItem('react_version', version);
        }
    } catch (error) {
        console.log(error)
    }
}


export const PersistActions = {
    saveWalletAddress,
    callSaveWalletAddress,
    callSaveIsLoggedIn,
    resetStore,
    versionManager
}