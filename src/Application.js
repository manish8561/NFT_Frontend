import React, { Component } from "react";
import {
  HashRouter,
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes/PublicRoutes";
import LoaderComponent from "./components/LoaderCompoent/LoaderCompoent";
import AuthGuard from "./routes/Guards/AuthGuard";
import UnAuthGuard from "./routes/Guards/UnAuthGuard";
import PrivateRoutes from "./routes/PrivateRoutes/PrivateRoutes";

class Application extends Component {
  render() {
    return (
      <React.Fragment>
        <LoaderComponent></LoaderComponent>
        <Router>
          <Switch>
            <AuthGuard path="/marketplace" component={PrivateRoutes} />
            <Route path="/" component={PublicRoutes} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default Application;
