import Web3Service from "./web3.service";
import { Enviroments } from "../constants/env.constant";
import MarketPlaceABI from "../assets/ABI/marketPlace.abi.json";

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
}

export default new ContractService();
