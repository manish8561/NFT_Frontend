import { select } from "redux-saga/effects";

// function to extract Jwt token from presist 

function* getJwt () {
  //  We can create a selector, i.e. a function which knows how to extract the data from the State:
    let state = yield select();
    const jwt = {jwt : state.persist.jwtToken}
    return jwt ;
}

export default getJwt;