import { delay, select, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { ApiService } from "../../services/api.service";
import IpfsService from "../../services/ipfs.service";
import { ApiActions } from "../actions/api.action";
import types from "../types";
import { PersistActions } from "../actions/persist.action";
import web3Service from "../../services/web3.service";

export const getProject = (state) => state.persist;

function* callGetMintedTokens(data) {
  try {
    const { payload } = data;
    const { getMintedTokens, getIpfsDataWithhash } = ApiService;
    const res = yield call(getMintedTokens, payload, {});
  
    if (res) {
      const { savegetMintedTokens } = ApiActions;
      let { data: { data: { logs } } } = res;

      logs = logs.map( async (row) => {
        const { data } = await getIpfsDataWithhash(row['tokenUri']);
        return { ...data };
      });
      logs = yield Promise.all(logs);
      yield put(savegetMintedTokens({ logs }));
    }
  } catch (error) {
    console.log({ CALL_GET_MINTED_ERROR: error });
  }
}

function* callCheckLoginOrRegister(actionData) {
  try {
    const { payload, history } = actionData;
    const { checkUserExists } = ApiService;

    const response = yield call(checkUserExists, payload, {});
    const { data } = response;

    if(data && data.status == "200" && data.token && data.data && data.data.user && data.data.user.walletAddress) {
      yield put({ type: types.saga.persist.CALL_SAVE_IS_LOGGED_IN, payload: true})
      yield put({type: types.saga.persist.CALL_SAVE_WALLET_ADDRESS, payload: {address: data.data.user.walletAddress}})
      yield put({type: types.reducer.persist.SAVE_JWT_TOKEN, payload : data.token})
      if(history && history.push) {
        history.push('/marketplace/my-collection');
      }
    }
  } catch(error) {
    console.log('Check login or register api error', error);
  }
}

function* apiSaga() {
  yield takeLatest(types.saga.api.CALL_GET_MINTED_TOKENS, callGetMintedTokens);
  yield takeLatest(types.saga.api.CALL_CHECK_LOGIN_OR_REGISTER, callCheckLoginOrRegister);
}

export default apiSaga;
