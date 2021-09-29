const reducer = { 
    persist: {
        SAVE_WALLET_ADDRESS: "[REDUCER] SAVE_WALLET_ADDRESS",
        SAVE_IS_LOGGED_IN: "[REDUCER] SAVE_IS_LOGGED_IN",
        SAVE_JWT_TOKEN: "[REDUCER] SAVE_JWT_TOKEN",
        RESET_STORE: "[REDUCER] RESET_STORE"
    },
    form: {
        SAVE_CREATE_ITEM_FORM_VALUES: '[FORM] SAVE_CREATE_ITEM_FORM_VALUES'
    },
    api: {
        SAVE_GET_MINTED_TOKENS: "[REDUCER] SAVE_GET_MINTED_TOKENS",
        SAVE_CHECK_LOGIN_OR_REGISTER: "[REDUCER] SAVE_CHECK_LOGIN_OR_REGISTER",
        SAVE_GET_COLLECTIONS : "[REDUCER] SAVE_GET_COLLECTIONS",
        SAVE_GET_NFT : "[REDUCER] SAVE_GET_NFT",
    },
}

const saga = {
    persist: {
        CALL_SAVE_WALLET_ADDRESS: "[ACTION] CALL_SAVE_WALLET_ADDRESS",
        CALL_SAVE_IS_LOGGED_IN : "[ACTION] CALL_SAVE_IS_LOGGED_IN",
        CALL_SAVE_JWT: "[ACTION] CALL_SAVE_JWT"
    },
    contract: {
        CALL_MINT_TOKENS: "[ACTION] CALL_MINT_TOKENS"
    },
    form: {
        CALL_CREATE_ITEM_FORM_VALUES: '[FORM] CALL_CREATE_ITEM_FORM_VALUES'
    },
    api: {
        CALL_GET_MINTED_TOKENS: "[ACTION] CALL_GET_MINTED_TOKENS",
        CALL_CHECK_LOGIN_OR_REGISTER: "[ACTION] CALL_CHECK_LOGIN_OR_REGISTER",
        CALL_GET_COLLECTIONS : "[ACTION] CALL_GET_COLLECTIONS",
        CALL_CREATE_COLLECTION: "[ACTION] CALL_CREATE_COLLECTION",
        CALL_GET_NFT : "[ACTION] CALL_GET_NFT"
    },
}

export default { reducer, saga };


