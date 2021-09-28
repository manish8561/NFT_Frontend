import React from "react";
import { connect, useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const UnAuthGuard = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector(state => state.persist.isLoggedIn);

  return (
    <Route {...rest} render={props => isLoggedIn === false ?
      (<Component {...props} />) :
      (<Redirect to={{ pathname: "/marketplace/collections", state: { from: props.location } }} />)}
    />
  );
};

 
export default UnAuthGuard;
