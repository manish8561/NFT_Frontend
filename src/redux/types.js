const reducer = { 
    persist: {
        SAVE_WALLET_ADDRESS: "[REDUCER] SAVE_WALLET_ADDRESS"
    },
    api: {
        SAVE_GET_MINTED_TOKENS: "[REDUCER] SAVE_GET_MINTED_TOKENS"
    }
}

const saga = {
    persist: {
        CALL_SAVE_WALLET_ADDRESS: "[ACTION] CALL_SAVE_WALLET_ADDRESS"
    },
    contract: {
        CALL_MINT_TOKENS: "[ACTION] CALL_MINT_TOKENS"
    },
    api: {
        CALL_GET_MINTED_TOKENS: "[ACTION] CALL_GET_MINTED_TOKENS"
    }
}

export default { reducer, saga };


