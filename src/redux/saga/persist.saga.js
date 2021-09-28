import { delay, call,select, put, takeEvery, takeLatest } from "redux-saga/effects";
import { PersistActions } from "../actions/persist.action";
import types from "../types";

export function* callSaveWalletAddress(data) {
    const { saveWalletAddress } = PersistActions;
    const { payload } = data;
    yield put(saveWalletAddress(payload));
}

export function* callSaveIsLoggedIn(data) {
  const { payload } = data;
  yield put({ type: types.reducer.persist.SAVE_IS_LOGGED_IN, payload});
}

export function* getJwt () {
    let state = yield select();
    const jwt = {jwt : state.persist.jwtToken}
    return jwt ;
}

function* persistSaga() {
  yield takeEvery(types.saga.persist.CALL_SAVE_WALLET_ADDRESS, callSaveWalletAddress);
  yield takeEvery(types.saga.persist.CALL_SAVE_IS_LOGGED_IN, callSaveIsLoggedIn);
  yield takeEvery(types.saga.persist.CALL_SAVE_JWT, callSaveIsLoggedIn);
}

export default persistSaga;
