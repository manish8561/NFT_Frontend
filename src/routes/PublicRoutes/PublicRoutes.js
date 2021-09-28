import React, {Component} from "react";
import {Route, Redirect} from "react-router-dom";
import {withRouter} from "react-router";
import Home from "../../pages/Home/Home";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MyCollection from "../../pages/MyCollection/MyCollection";
import CreateItem from "../../pages/CreateItem/CreateItem";
import Activities from "../../pages/Activities/Activities";
import Login from "../../pages/Login/Login";
import Createcollection from "../../pages/Createcollection/Createcollection";
import AuthGuard from "../Guards/AuthGuard";
import UnAuthGuard from "../Guards/UnAuthGuard";

import Creatednft from "../../pages/Creatednft/Creatednft";
import Profile from "../../pages/Profile/Profile";
import Mynftcollection from "../../pages/Mynftcollection/Mynftcollection";
import SellItem from "../../pages/SellItem/SellItem";
import ViewDetails from "../../pages/ViewDetails/ViewDetails";
import Marketplace from "../../pages/Marketplace/Marketplace";

class PublicRoutes extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="PublicArea__content">
          <Header />
          {/* <Route path="/" component={Home} exact={true} /> */}
          {/* <Route path="/categories" component={Categories} exact={true} /> */}
          <Route path="/activities" component={Activities} exact={true} />
          <UnAuthGuard path="/login" component={Login} exact={true} />
          <Redirect to="/" component={Home} />
          {/* <Route path="/MyCollection" component={MyCollection} exact={true} /> */}
          {/* <Route path="/CreateItem" component={CreateItem} exact={true} /> */}
          {/* <Route path="/Marketplace" component={Marketplace} exact={true} /> */}
          {/* <Route path="/Activities" component={Activities} exact={true} /> */}
          {/* <Route path="/Login" component={Login} exact={true} /> */}
          {/* <Route
            path="/Createcollection"
            component={Createcollection}
            exact={true}
          />
          <Route path="/Creatednft" component={Creatednft} exact={true} />
         
          <Route path="/Profile" component={Profile} exact={true} />
          <Route path="/SellItem" component={SellItem} exact={true} />
          <Route path="/Viewdetail" component={ViewDetails} exact={true} /> */}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(PublicRoutes);
