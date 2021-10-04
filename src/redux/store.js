import { createStore,  applyMiddleware, compose  } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/index";
import { routerMiddleware } from "connected-react-router";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { history } from './history';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
// import logger from 'redux-logger';

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["persist"]
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);


const configureStore = () => {
  const middlewares = [sagaMiddleware, routerMiddleware(history)];
  // const middlewares = [logger, sagaMiddleware, routerMiddleware(history)];
  // redux devtools
  const enhancers = process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

  // create redux store
  const store = createStore(persistedReducer, enhancers);
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};

export default configureStore;
