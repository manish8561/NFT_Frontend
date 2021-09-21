import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const AuthGuard = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = rest;

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location
              }
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: (state && state.persist && state.persist.isLoggedIn) || false
  };
};

export default connect(
  mapStateToProps,
  null
)(AuthGuard);
