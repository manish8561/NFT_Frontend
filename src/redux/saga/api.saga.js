import { delay, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { ApiService } from "../../services/api.service";
import IpfsService from "../../services/ipfs.service";
import { ApiActions } from "../actions/api.action";
import types from "../types";

function* callGetMintedTokens(data) {
  try {
    const { payload } = data;
    const { getMintedTokens,getIpfsDataWithhash } = ApiService;
    const res = yield call(getMintedTokens, payload, {});
    if (res) {
      const { savegetMintedTokens } = ApiActions;
      let { data: { data: { logs } } } = res;
      console.clear();
      logs = logs.map( async (row) => {
        const data = await getIpfsDataWithhash(row['tokenUri']);
        console.log(data); 
      })
      // yield put(savegetMintedTokens({ logs }))
    }
  } catch (error) {
    console.log({ CALL_GET_MINTED_ERROR: error });
  }
}

function* apiSaga() {
  yield takeLatest(types.saga.api.CALL_GET_MINTED_TOKENS, callGetMintedTokens);
}

export default apiSaga;
