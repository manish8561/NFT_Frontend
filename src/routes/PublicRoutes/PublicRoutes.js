import React, {Component} from "react";
import {Route, Redirect} from "react-router-dom";
import {withRouter} from "react-router";
import Home from "../../pages/Home/Home";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MyCollection from "../../pages/MyCollection/MyCollection";
import CreateItem from "../../pages/CreateItem/CreateItem";
import Categories from "../../pages/Categories/Categories";
import Activities from "../../pages/Activities/Activities";
import Profile from "../../pages/Profile/Profile";
import Login from "../../pages/Login/Login";
import Createcollection from "../../pages/Createcollection/Createcollection";
import Creatednft from "../../pages/Profile/Creatednft/Creatednft";
import AuthGuard from "../Guards/AuthGuard";
import UnAuthGuard from "../Guards/UnAuthGuard";


class PublicRoutes extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="PublicArea__content">
          <Header />
          <Route path="/" component={Home} exact={true} />
          <Route path="/categories" component={Categories} exact={true} />
          <Route path="/activities" component={Activities} exact={true} />
          <UnAuthGuard path="/login" component={Login} exact={true} />
          <Redirect to="/" component={Home} />
        </div>
        <Footer />
      </React.Fragment >
    );
  }
}

export default withRouter(PublicRoutes);
