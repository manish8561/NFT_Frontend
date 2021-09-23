const reducer = { 
    persist: {
        SAVE_WALLET_ADDRESS: "[REDUCER] SAVE_WALLET_ADDRESS",
        SAVE_IS_LOGGED_IN: "[REDUCER] SAVE_IS_LOGGED_IN",
        SAVE_JWT_TOKEN: "[REDUCER] SAVE_JWT_TOKEN",
        RESET_STORE: "[REDUCER] RESET_STORE"
    },
    api: {
        SAVE_GET_MINTED_TOKENS: "[REDUCER] SAVE_GET_MINTED_TOKENS",
        SAVE_CHECK_LOGIN_OR_REGISTER: "[REDUCER] SAVE_CHECK_LOGIN_OR_REGISTER",
    }
}

const saga = {
    persist: {
        CALL_SAVE_WALLET_ADDRESS: "[ACTION] CALL_SAVE_WALLET_ADDRESS",
        CALL_SAVE_IS_LOGGED_IN : "[ACTION] CALL_SAVE_IS_LOGGED_IN"
    },
    contract: {
        CALL_MINT_TOKENS: "[ACTION] CALL_MINT_TOKENS"
    },
    api: {
        CALL_GET_MINTED_TOKENS: "[ACTION] CALL_GET_MINTED_TOKENS",
        CALL_CHECK_LOGIN_OR_REGISTER: "[ACTION] CALL_CHECK_LOGIN_OR_REGISTER",
        CALL_CREATE_COLLECTION: "[ACTION] CALL_CREATE_COLLECTION"
    }
}

export default { reducer, saga };


