import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configureValidators from "./validators/validators";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/history";
import { PersistGate } from "redux-persist/lib/integration/react";
import configureStore from "./redux/store";

let { store, persistor } = configureStore();
configureValidators();

ReactDOM.render(
    <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
    </>
    , document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
