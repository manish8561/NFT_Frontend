import React, { Component } from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import Home from "../../Pages/Home/Home";
import { rootName } from "../../constant";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import MyCollection from "../../Pages/MyCollection/MyCollection";
import CreateItem from "../../Pages/CreateItem/CreateItem";


class PublicRoutes extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="PublicArea__content">
          <Header />
          <Route
            path={`${rootName}/`}
            component={Home}
            exact={true}
          />
          <Route
            path={`/MyCollection`}
            component={MyCollection}
            exact={true}
          />
          <CreateItem></CreateItem>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(PublicRoutes);
