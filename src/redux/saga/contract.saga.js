import { call, takeLatest, select } from "redux-saga/effects";
import types from "../types";
import IpfsService from '../../services/ipfs.service';
import { toast } from "../../components/Toast/Toast";
import ContractService from "../../services/contract.service";
import { ApiService } from "../../services/api.service";
import { Enviroments } from "../../constants/env.constant";
import Web3Service from "../../services/web3.service";

const getState = state => state;

function* callUploadFile(image) {
  const { uploadFile } = ApiService;

  const formdata = new FormData();
  formdata.append("file", image);
  return yield call(uploadFile, formdata, {});
}

function createMetaDataorPayload(data) {
  const metadata = Object.create({});
  metadata.nftAddress = data.nftAddress;
  metadata.name = data.name;
  metadata.fileType = data.fileType;
  metadata.fileHash = data.fileHash;
  metadata.externalLink = data.externalLink;
  metadata.description = data.description;
  metadata.supply = data.supply;
  metadata.royality = data.royality;
  metadata.collectiondb  = data.collectiondb;
  metadata.networkId = data.networkId;
  if (data.events) metadata.tokenId = data.events.MintToken.returnValues.tokenId;
  if (data.tokenUri) metadata.tokenUri = data.tokenUri;
  if (data.transactionHash) metadata.transactionHash = data.transactionHash;
  
  return metadata;
}

function* callMintTokens(data) {
  try {
    const state = yield select(getState);
    const { persist: { address, jwtToken } } = state;
    const { uploadToIpfsAndGenerateHash } = IpfsService;
    const { createNft } = ApiService;
    const { getNetworkId } = Web3Service;
    const { payload } = data;
    const { IPFS_URL, MARKETPLACE_CONTRACT_ADDRESS } = Enviroments;

    const networkId = yield call(getNetworkId);
    let addFileToIpfs = yield call(uploadToIpfsAndGenerateHash, payload['file']);

    if (addFileToIpfs.path) {
      addFileToIpfs = { 
        ...payload,
        fileType: payload['file']['type'],
        fileHash: `${IPFS_URL}/${addFileToIpfs['path']}`,
        nftAddress: MARKETPLACE_CONTRACT_ADDRESS,
        networkId
      };
      
      addFileToIpfs = createMetaDataorPayload({ ...addFileToIpfs });
      let addMetaDataToIpfs = yield call(uploadToIpfsAndGenerateHash, JSON.stringify(addFileToIpfs));
      addMetaDataToIpfs = addMetaDataToIpfs['path'];
      const { mintTokens } = ContractService;
      const tx = yield call(mintTokens, address, addMetaDataToIpfs, payload['royality']);
      if (tx.transactionHash) {
        const data = createMetaDataorPayload({ ...addFileToIpfs, ...tx, tokenUri: `${IPFS_URL}/${addMetaDataToIpfs}` });
        const apiRes = yield call(createNft, data, {jwt: jwtToken});
        if (apiRes) {
            payload.setNftDetails(data);                      
            payload.showPreview();
        }
      }
    }
  } catch (error) {
    toast.error(`Error: ${error}`);
  }
}


function* contractSaga() {
  yield takeLatest(types.saga.contract.CALL_MINT_TOKENS, callMintTokens);
}

export default contractSaga;
