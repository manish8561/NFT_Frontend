import Web3Service from "./web3.service";
import { Enviroments } from "../constants/env.constant";
import MarketPlaceABI from "../assets/ABI/marketPlace.abi.json";
import NftABI from "../assets/ABI/createNft.abi.json";
import ipfsService from "./ipfs.service";

class ContractService {
  constructor() {
  }
  mintTokens = async (address, tokenId, tokenAmount, tokenUri) => {
    const { MARKETPLACE_CONTRACT_ADDRESS } = Enviroments;
    const marketPlaceContract = await Web3Service.initContract(
      MarketPlaceABI,
      MARKETPLACE_CONTRACT_ADDRESS
    );

    const estimatedGas = await marketPlaceContract.methods
      .mintTokens(tokenId, tokenAmount, tokenUri)
      .estimateGas({ from: address, value: 0 });

    return await marketPlaceContract.methods
      .mintTokens(tokenId, tokenAmount, tokenUri)
      .send({ from: address, value: 0, gas: estimatedGas });
  };


  nftTokens = async (file , address) => {
    const { REACT_APP_NFT_CONTRACT_ADDRESS } = Enviroments;
    const nftContract = await Web3Service.initContract(
      NftABI,
      REACT_APP_NFT_CONTRACT_ADDRESS
    );
    
    const tokenUri = await ipfsService.uploadToIpfsAndGenerateHash(file)
    const estimatedGas = await nftContract.methods.mintToken(tokenUri.path, 1).
      estimateGas({ from: address, value: 0 });

    const contractDetails = await nftContract.methods
      .mintToken(tokenUri.path , 0)
      .send({ from: address, value: 0, gas: estimatedGas });

    return {contractDetails : contractDetails , tokenUri : tokenUri }

    
  };
}

export default new ContractService();
