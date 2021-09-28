import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const UnAuthGuard = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = rest;

  return (
    <Route {...rest} render={props => isLoggedIn === false ?
      (<Component {...props} />) :
      (<Redirect to={{ pathname: "/marketplace/collections", state: { from: props.location } }} />)}
    />
  );
};

const mapStateToProps = state => ({
  isLoggedIn: (state && state.persist && state.persist.isLoggedIn) || false
})

export default connect(mapStateToProps, null)(UnAuthGuard);
