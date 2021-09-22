import { delay, select, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import types from "../types";
import IpfsService from '../../services/ipfs.service';
import { toast } from "../../components/Toast/Toast";
import ContractService from "../../services/contract.service";
import { ApiService } from "../../services/api.service";

function* callUploadFile(image) {
  const { uploadFile } = ApiService;

  const formdata = new FormData();
  formdata.append("file", image);
  return yield call(uploadFile, formdata, {});
}

function* callGetIpfsData(file, title, description, address) {
  const ipfsData = Object.create({});
  ipfsData.image = file;
  ipfsData.title = title;
  ipfsData.description = description;
  ipfsData.user = address;
  return ipfsData;
}


function* callMintTokens(data) {
  try {
    const { uploadToIpfsAndGenerateHash } = IpfsService;
    const { payload: { image, title, amount, description, address } } = data;

    const uploadedFile = yield call(callUploadFile, image);
    if (uploadedFile) {
      const { data: { data: { file } } } = uploadedFile;
      const ipfsData = yield call(callGetIpfsData, file, title, description, address);
      const uploadedToIpfs = yield call(uploadToIpfsAndGenerateHash, JSON.stringify(ipfsData));
      
    
      if (uploadedToIpfs) {
        const { mintTokens } = ContractService;
        const _mint = yield call(mintTokens, address, 0, amount, uploadedToIpfs.path);
        if (_mint) window.location.reload();
      }
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
