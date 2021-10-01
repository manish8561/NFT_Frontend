import { create, urlSource } from "ipfs-http-client";

class IpfsService {
    ipfs = {};
    constructor() {
        this.ipfs = create({ 
            host: 'ipfs.infura.io', 
            port: '5001', 
            protocol: 'https' 
        });
    }
    uploadToIpfsAndGenerateHash = async (data) => await this.ipfs.add(data); 


}

export default new IpfsService();