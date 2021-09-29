import { Enviroments } from "../constants/env.constant";
import { fetch } from "./Fetch";

const { API_URL } = Enviroments;

const getIpfsDataWithhash = (hash) => fetch("get", `https://ipfs.io/ipfs/${hash}`);
const getMintedTokens = (data, headers) => fetch("post", `${API_URL}/mint/getMintedTokens`, data, headers);
const uploadFile = (data, headers) => fetch("post", `${API_URL}/mint/uploadFile`, data, headers); 
const checkUserExists = (data, headers) => fetch("post", `${API_URL}/user/loginUserOrMaybeRegister`, data, headers); 
const getDetails = (jwt) => fetch("get", `${API_URL}/user/details`,{},jwt);
const getCollections = (data, jwt) => fetch("post", `${API_URL}/collection/getCollections`, data , jwt);
const createCollections = (data, jwt) => fetch("post", `${API_URL}/collection/add`, data , jwt);
const getNft = (data, jwt) => fetch("post", `${API_URL}/collection/${data.id}`, data , jwt);
const getItemsByCollectionId = (data, jwt) => fetch("post", `${API_URL}/collection/getItemsByCollectionId`, data , jwt);

export const ApiService = {
  getCollections,
  getIpfsDataWithhash,
  getMintedTokens,
  uploadFile,
  createCollections,
  checkUserExists,
  getDetails,
  getNft,
  getItemsByCollectionId
};


