import { delay, select, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { ApiService } from "../../services/api.service";
import { ApiActions } from "../actions/api.action";
import types from "../types";
import getJwt from "./jwt.saga";
import { reset } from 'redux-form';
import contractService from "../../services/contract.service";
import ipfsService from "../../services/ipfs.service";

function* callGetMintedTokens(data) {
  try {
    const { payload } = data;
    const { getMintedTokens, getIpfsDataWithhash } = ApiService;
    const res = yield call(getMintedTokens, payload, {});
    if (res) {
      const { savegetMintedTokens } = ApiActions;
      let { data: { data: { logs } } } = res;
      logs = logs.map(async (row) => {
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

// ---------------------------- callCheckLoginOrRegister function-------------------------------------

function* callCheckLoginOrRegister(actionData) {
  try {
    const { payload, history } = actionData;
    const { checkUserExists, getDetails } = ApiService;
    const response = yield call(checkUserExists, payload, {});
    const { data } = response;

    if (data && data.status == "200" && data.token) {
      yield call(getDetails, { jwt: data.token }, {});
      yield put({ type: types.saga.persist.CALL_SAVE_IS_LOGGED_IN, payload: true })
      yield put({ type: types.saga.persist.CALL_SAVE_WALLET_ADDRESS, payload: { address: payload.walletAddress } })
      yield put({ type: types.reducer.persist.SAVE_JWT_TOKEN, payload: data.token })

      if (history && history.push) {
        history.push('/marketplace/collections');
      }
    }
  } catch (error) {
    console.log('Check login or register api error', error);
  }
}
// ---------------------------- callGetCollections function -------------------------------------

export function* callGetCollections(props) {
  try {
    const { payload } = props;
    const { getCollections } = ApiService;
    const { saveCollection } = ApiActions
    let jwt = yield getJwt(); //The result of yield take(pattern) is an action object being dispatched.
    //call creates a plain object describing the function call. The redux-saga middleware takes care of 
    // executing the function call and resuming the generator with the resolved response.

    const res = yield call(getCollections, payload, jwt, {});
    if (res) {
      const { data: { data } } = res;
      yield put(saveCollection({ collections: data }));
    }
  }

  catch (error) {
    console.log({ CALL_GET_COLLECTIONS: error });
  }
}

// ---------------------------- callCreateCollections function -------------------------------------


export function* callCreateCollections(props) {
  try {
    const state = yield select();
    const jwt = yield getJwt();
    const { payload, history } = props;
    const { createCollections, uploadFile } = ApiService;

    payload.payoutWalletAddress = state.persist.address

    let bannerUpload = new FormData();
    let logoUpload = new FormData();

    bannerUpload.append('file', payload.banner);
    logoUpload.append('file', payload.logo);

    const bannerResponse = yield call(uploadFile, bannerUpload, jwt, {});
    const logoResponse = yield call(uploadFile, logoUpload, jwt, {});

    if (bannerResponse.data && logoResponse.data && bannerResponse.data.status === "200" &&
      logoResponse.data.status === "200" && bannerResponse.data.data && logoResponse.data.data) {
      payload.banner = bannerResponse.data.data.file
      payload.logo = logoResponse.data.data.file
    }

    // *** The result of yield take(pattern) is an action object being dispatched. ***
    // call creates a plain object describing the function call. The redux-saga middleware takes care of 
    // executing the function call and resuming the generator with the resolved response.

    const response = yield call(createCollections, payload, jwt, {});
    const { data } = response;
    if (data && data.status == "200") {
      // do something
      yield put(reset('Createcollection'));  // requires form name
      if (history && history.push) {
        history.push('/marketplace/collections');
      }
    }
  }
  catch (error) {
    console.log({ CALL_CREATE_COLLECTION: error })
  }
}

// ---------------------------- getNft function -------------------------------------------------------


export function* callGetNft(props) {
  try {
    const { payload } = props;
    const { getNftCollection } = ApiService;
    const { saveNft } = ApiActions
    let jwt = yield getJwt();
    const res = yield call(getNftCollection, payload, jwt, {});
    if (res) {
      const { data: { data } } = res;
      yield put(saveNft({ nft: data }));
    }
  }
  catch (error) {
    console.log({ CALL_GET_NFT: error });
  }
}

// ---------------------------- getCollectionById function -------------------------------------------------------


export function* callGetCollectionsById(props) {
  try {
    const { payload } = props;
    const { getItemsByCollectionId } = ApiService;
    const { saveCollectionById } = ApiActions

    let jwt = yield getJwt();
    const res = yield call(getItemsByCollectionId, payload, jwt, {});
    if (res) {
      const { data: { data } } = res;
      yield put(saveCollectionById({ collectionsById: data }));
    }
  }
  catch (error) {
    console.log({ CALL_GET_COLLECTIONS_BY_ID: error });
  }
}



// ---------------------------- getNftDetails function -------------------------------------------------------


export function* callGetNftDetails(props) {
  try {
    const { payload } = props;
    const { getNft } = ApiService;
    const { saveNftDetails } = ApiActions

    let jwt = yield getJwt();
    const res = yield call(getNft, payload, jwt, {});
    if (res) {
      const { data: { data } } = res;
      yield put(saveNftDetails({ nftDetails: data }));
    }
  }
  catch (error) {
    console.log({ CALL_GET_NFT_DETAILS: error });
  }
}

// ------------------------------ createNft function------------------------------------------------------------

export function* createNft(props) {
  try {
    const jwt = yield getJwt();
    const { payload, history } = props;
    // console.log("PAYLOAD", payload)
    const { createNft , getIpfsDataWithhash} = ApiService;

    // createNft

    const { uploadToIpfsAndGenerateHash } = ipfsService
    const ipsfData = yield put(uploadToIpfsAndGenerateHash , payload.file);
    const uri = yield put (getIpfsDataWithhash(ipsfData.path))

    console.log("URI", uri)

    // getIpfsDataWithhash


  }
  catch (error) {
    console.log({ CALL_CREATE_NFT: error })
  }
}

// ---------------------------- apiSaga function ---------------------------------------------------------

function* apiSaga() {
  // Each time an action is dispatched to the store. And if this action matches pattern, takeLatest starts a new saga task in the background. 
  // If a saga task was started previously (on the last action dispatched before the actual action), and if this task is still running, 
  // the task will be cancelled.
  yield takeLatest(types.saga.api.CALL_GET_MINTED_TOKENS, callGetMintedTokens);
  yield takeLatest(types.saga.api.CALL_CHECK_LOGIN_OR_REGISTER, callCheckLoginOrRegister);
  yield takeLatest(types.saga.api.CALL_GET_COLLECTIONS, callGetCollections);
  yield takeLatest(types.saga.api.CALL_CREATE_COLLECTION, callCreateCollections);
  yield takeLatest(types.saga.api.CALL_GET_COLLECTIONS_BY_ID, callGetCollectionsById);
  yield takeLatest(types.saga.api.CALL_GET_NFT, callGetNft);
  yield takeLatest(types.saga.api.CALL_CREATE_NFT, createNft);
}

export default apiSaga;
