import React, { Component } from "react";
import { Route } from "react-router";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Createcollection from "../../pages/Createcollection/Createcollection";
import CreateItem from "../../pages/CreateItem/CreateItem";
import MyCollection from "../../pages/MyCollection/MyCollection";
import Profile from "../../pages/Profile/Profile";

class PrivateRoutes extends Component {
    state = {}
    render() {
        return(
            <React.Fragment>
                <div className="PublicArea__content">
                    <Header />
                    <Route path="/marketplace/my-collection" component={MyCollection} exact={true} />
                    <Route path="/marketplace/create-item/:collectionId" component={CreateItem} exact={true} />
                    <Route path="/marketplace/profile" component={Profile} exact={true} />
                    <Route path="/marketplace/create-collection" component={Createcollection} exact={true} />
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default PrivateRoutes;