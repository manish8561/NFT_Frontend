import { delay, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { PersistActions } from "../actions/persist.action";
import types from "../types";

export function* callSaveWalletAddress(data) {
    const { saveWalletAddress } = PersistActions;
    const { payload } = data;
    yield put(saveWalletAddress(payload));

}

function* persistSaga() {
  yield takeEvery(types.saga.persist.CALL_SAVE_WALLET_ADDRESS, callSaveWalletAddress);
}

export default persistSaga;
