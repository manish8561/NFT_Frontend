import { delay, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import types from "../types";
import IpfsService from '../../services/ipfs.service';
import { toast } from "../../components/Toast/Toast";
import ContractService from "../../services/contract.service";

function* callMintTokens(data) {
  try {
    const { uploadToIpfsAndGenerateHash } = IpfsService;
    const { payload: { icon, title, amount, description, address } } = data;

    const ipfsData = Object.create({});
    ipfsData.icon = icon;
    ipfsData.title = title;
    ipfsData.description = description;
    ipfsData.user = address;

    const uploadedToIpfs = yield call(uploadToIpfsAndGenerateHash, JSON.stringify(ipfsData));
    if (uploadedToIpfs) {
      const { mintTokens } = ContractService;
      const _mint = yield call(mintTokens, address, 0, amount, uploadedToIpfs.path);
      if (_mint) window.location.reload();
    }
  } catch (error) {
    toast.error(`Error: ${error}`);
    console.log({ callMintToken_Error: error });
  }
}

function* contractSaga() {
  // yield takeLatest("FETCH_USER", fetchUser);
  yield takeLatest(types.saga.contract.CALL_MINT_TOKENS, callMintTokens);
}

export default contractSaga;
