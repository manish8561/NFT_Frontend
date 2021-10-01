import types from "../types"

const callMintToken = (data) => ({
    type: types.saga.contract.CALL_MINT_TOKENS,
    payload: data
});

export const ContractActions = {
    callMintToken
}