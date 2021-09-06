import types from "../types"

const callMintTokens = (data) => ({
    type: types.saga.contract.CALL_MINT_TOKENS,
    payload: data
})

export const ContractActions = {
    callMintTokens
}