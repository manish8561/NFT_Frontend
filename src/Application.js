import React, { Component } from "react";
import {
  HashRouter,
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes/PublicRoutes";
import LoaderComponent from "./components/LoaderCompoent/LoaderCompoent";

class Application extends Component {
  render() {
    return (
      <React.Fragment>
        <LoaderComponent></LoaderComponent>
        <Router>
          <Switch>
            <Route path="/" component={PublicRoutes}  />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default Application;
