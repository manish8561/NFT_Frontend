import React, { useEffect } from "react";
import "./App.scss";
import "./services/web3.service";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./services/ipfs.service";
import Application from "./Application";
import { useDispatch } from "react-redux";
import { PersistActions } from "./redux/actions/persist.action";

const App = () => {
  return (
      <Application />
  );
}

export default App;
