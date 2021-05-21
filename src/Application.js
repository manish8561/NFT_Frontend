import React, { Component } from "react";
import {
  HashRouter,
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes/PublicRoutes";
import LoaderComponent from "./Components/LoaderCompoent/LoaderCompoent";
import { rootName } from "./constant";

class Application extends Component {
  render() {
    return (
      <React.Fragment>
        <LoaderComponent></LoaderComponent>
        <Router>
          <Switch>
            <Route path={`${rootName}`} component={PublicRoutes}  />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default Application;
