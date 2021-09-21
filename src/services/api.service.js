import { Enviroments } from "../constants/env.constant";
import { fetch } from "./Fetch";

const { API_URL } = Enviroments;

const getIpfsDataWithhash = (hash) => fetch("get", `https://ipfs.io/ipfs/${hash}`);
const getMintedTokens = (data, headers) => fetch("post", `${API_URL}/mint/getMintedTokens`, data, headers);
const uploadFile = (data, headers) => fetch("post", `${API_URL}/mint/uploadFile`, data, headers); 
const checkUserExists = (data, headers) => fetch("post", `${API_URL}/user/loginUserOrMaybeRegister`, data, headers); 

export const ApiService = {
  getIpfsDataWithhash,
  getMintedTokens,
  uploadFile,
  checkUserExists
};
