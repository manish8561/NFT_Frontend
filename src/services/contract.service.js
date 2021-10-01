import Web3Service from "./web3.service";
import { Enviroments } from "../constants/env.constant";
import MarketPlaceABI from "../assets/ABI/marketPlace.abi.json";

class ContractService {

  // eslint-disable-next-line no-useless-constructor
  constructor() { }

  mintTokens = async (address, tokenUri, royality) => {
    const { MARKETPLACE_CONTRACT_ADDRESS } = Enviroments;
    const marketPlaceContract = await Web3Service.initContract(
      MarketPlaceABI,
      MARKETPLACE_CONTRACT_ADDRESS
    );

    const estimatedGas = await marketPlaceContract.methods
      .mintToken(tokenUri, royality)
      .estimateGas({ from: address, value: 0 });

    return await marketPlaceContract.methods
      .mintToken(tokenUri, royality)
      .send({ from: address, value: 0, gas: estimatedGas });
  };

}

export default new ContractService();
