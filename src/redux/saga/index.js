import { all } from "redux-saga/effects";
import persistSaga from "./persist.saga";
import contractSaga from "./contract.saga";
import apiSaga from "./api.saga";

export default function* rootSaga() {
    yield all([ 
        persistSaga(),
        contractSaga(),
        apiSaga()
    ]);
}
