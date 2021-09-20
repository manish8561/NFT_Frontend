import React, {Component} from "react";
import {Route} from "react-router-dom";
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




class PublicRoutes extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="PublicArea__content">
          <Header />
          <Route path="/" component={Home} exact={true} />
          <Route path="/MyCollection" component={MyCollection} exact={true} />
          <Route path="/CreateItem" component={CreateItem} exact={true} />
          <Route path="/Categories" component={Categories} exact={true} />
          <Route path="/Activities" component={Activities} exact={true} />
          <Route path="/Profile" component={Profile} exact={true} />
          <Route path="/Login" component={Login} exact={true} />
          <Route path="/Createcollection" component={Createcollection} exact={true} />
          <Route path="/Creatednft" component={Creatednft} exact={true} />

        </div>
        <Footer />
      </React.Fragment >
    );
  }
}

export default withRouter(PublicRoutes);
