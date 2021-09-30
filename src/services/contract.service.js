import Web3Service from "./web3.service";
import { Enviroments } from "../constants/env.constant";
import MarketPlaceABI from "../assets/ABI/marketPlace.abi.json";
import NftABI from "../assets/ABI/createNft.abi.json";
import ipfsService from "./ipfs.service";
import web3Service from "./web3.service";

class ContractService {
  constructor() {}
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

  nftTokens = async (file , address , royality) => {
    const { REACT_APP_NFT_CONTRACT_ADDRESS } = Enviroments;
    const nftContract = await Web3Service.initContract(
      NftABI,
      REACT_APP_NFT_CONTRACT_ADDRESS
    );
    
    const tokenUri = await ipfsService.uploadToIpfsAndGenerateHash(file)
    const estimatedGas = await nftContract.methods.mintToken(tokenUri.path, royality).
    estimateGas({ from: address, value: 0 });

    const contractDetails = await nftContract.methods
      .mintToken(tokenUri , royality)
      .send({ from: address, value: 0, gas: estimatedGas });
    
    const networkId =  await web3Service.getNetworkId()
    const data =  {contractDetails : contractDetails , tokenUri, tokenUri , networkId : networkId }
    return data
  };
}

export default new ContractService();
