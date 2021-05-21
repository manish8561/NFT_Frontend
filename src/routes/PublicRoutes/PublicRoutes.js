import React, { Component } from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import Home from "../../Pages/Home/Home";
import { rootName } from "../../constant";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import MyCollection from "../../Pages/MyCollection/MyCollection";
import Categories from "../../Pages/Categories/Categories";
import Activities from "../../Pages/Activities/Activities";




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
            path={`${rootName}/MyCollection`}
            component={MyCollection}
            exact={true}
          />
          <Route
            path={`${rootName}/Categories`}
            component={Categories}
            exact={true}
          />
          <Route
            path={`${rootName}/Activities`}
            component={Activities}
            exact={true}
          />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(PublicRoutes);
