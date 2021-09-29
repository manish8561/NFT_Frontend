import React from "react";
import { Container, Col, Button, Row } from "react-bootstrap";
import list from "../../assets/Images/list.svg";
import edit from "../../assets/Images/editicon.svg";
import back from "../../assets/Images/arrow_back_black.svg";
import "./Mynftcollection.scss";
import Collectiontopbar from "../../components/Collectiontopbar/Collectiontopbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import filtericon from "../../assets/Images/filter.svg";
import statusicon from "../../assets/Images/status.svg";
import price from "../../assets/Images/price.svg";
import chains from "../../assets/Images/chains.svg";
import sale from "../../assets/Images/sale.svg";
import Searchbar from "../../components/Searchbar/Searchbar";
import SidebarCard from "../../components/Sidebar/SidebarCard";
import Searchresults from "../../components/Searchresults/Searchresults";
import { ApiActions } from "../../redux/actions/api.action";
import { useDispatch, useSelector } from 'react-redux';

function Mynftcollection({ history, match: { params: { collectionId } } }) {
  const dispatch = useDispatch();

  const address = useSelector(state => state.persist.address);
  const nftCollection = useSelector(state => state.api.nft);
  const CollectionById = useSelector(state => state.api.collectionsById);


  const getNft = () => {
      const { callGetNft } = ApiActions;
      dispatch(callGetNft({ page: 0, limit: 20, id: collectionId }));
  }

  const getCollectionById = () => {
    const { callGetCollectionById } = ApiActions;
    dispatch(callGetCollectionById({ page: 0, limit: 20, id: collectionId }));
}

  React.useEffect(() => {
    if (address && address.trim().length > 0) {
      getNft();
      getCollectionById();   

     }
  }, [address]);

  return (
    <div>
      <Container fluid className="top_list  collectiontop-bar">
        <div className="back">
          <span style={{cursor : "pointer"}} onClick={() => history.goBack()}><img src={back} /></span> Back
        </div>
        <div>
          <img src={list} />
          <img src={edit} />
          <Button variant="primary" onClick={() => history.push(`/marketplace/collection/items/create-item/${collectionId}`)}>Add item</Button>
        </div>
      </Container>
      <Collectiontopbar items={{count : CollectionById.count ?  CollectionById.count : 0 , name : nftCollection[0]}} />
      <Container fluid className="categorie_sec collection_card">
        <div className="nft-collection categorie_row">
          <Sidebar>
            <SidebarCard
              mainHeading="Filter"
              mainIcon={filtericon}
              icon={statusicon}
              toggleHeading="Status"
              eventKey="0"
            >
              <ul className="status_sec m-0">
                <li>
                  <a href="#">Buy Now</a>
                </li>
                <li>
                  <a href="#" className="active">
                    On Auction
                  </a>
                </li>
                <li>
                  <a href="#"> New</a>
                </li>
                <li>
                  <a href="#">Has Offer</a>
                </li>
              </ul>
            </SidebarCard>
            <SidebarCard
              icon={price}
              toggleHeading="Price"
              eventKey="1"
              content
            />
            <SidebarCard
              icon={chains}
              toggleHeading="Chains"
              eventKey="3"
              content
            />
            <SidebarCard
              icon={sale}
              toggleHeading="On Sale In"
              eventKey="6"
              content
            />
          </Sidebar>
          <div className="right_sec coll-right">
            <Searchbar />
            <Col sm={12} lg={12}>
              <p>2 results</p>
            </Col>
            <Searchresults />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Mynftcollection;
