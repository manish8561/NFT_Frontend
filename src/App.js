import React, { useEffect } from "react";
import "./App.scss";
import "./services/web3.service";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./services/ipfs.service";
import Application from "./Application";
import { useDispatch } from "react-redux";
import { PersistActions } from "./redux/actions/persist.action";


const App = () => {

  const dispatch = useDispatch();

  const connectMetamask = async () => {
    const { ethereum } = window;
    const { callSaveWalletAddress } = PersistActions;
   
    let address = await ethereum.request({ method: 'eth_requestAccounts' });
    address = address[0];
    dispatch(callSaveWalletAddress({ address }));
  }

  useEffect(() => {
    connectMetamask();
  }, []);

  return (
      <Application />
  );
}

export default App;
