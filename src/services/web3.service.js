import Web3 from "web3";

class Web3Service {

    web3;

    constructor() { }

    initializeWeb3 = async () => {
        try {
            const { ethereum, web3 } = window;
            if ((ethereum) && (ethereum.isMetaMask)) {
                return new Web3(ethereum);
            } else if (web3) {
                return new Web3(window.web3.currentProvider);
            }
        } catch (error) {
            console.log("Web3 Error:", error);
        }
    }

    initContract = async (abi, address) => {
        const web3 = await this.initializeWeb3();
        return new web3.eth.Contract(abi, address);
    }
}

export default new Web3Service();