import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import CreateCollectionpopup from "../../components/Popup/CreateCollectionpopup";
import CollectionItems from './CollectionItems';
import './MyCollection.scss';
import toggle from '../../assets/Images/line.svg'
import add_circle from '../../assets/Images/add_circle_plus.svg'
import TopLinks from '../../components/TopLinks/TopLinks';
import { ContractActions } from '../../redux/actions/contract.action';
import { useDispatch, useSelector } from 'react-redux';
import { ApiActions } from '../../redux/actions/api.action';
// import collectionsitem1 from '../../assets/Images/my_collections2.png';
// import collectionsitem2 from '../../assets/Images/my_collections1.png';
import info from '../../assets/Images/exclaimation.svg'

function MyCollection({ history }) {
    const dispatch = useDispatch();
    const address = useSelector(state => state.persist.address);
    const collections = useSelector(state => state.api.collections);

    const mintNewToken = (values) => {
        const { callMintTokens } = ContractActions;
        dispatch(callMintTokens({ ...values, address }));
    };

    const callMintedtokens = () => {
        const { callGetMintedTokens } = ApiActions;
        dispatch(callGetMintedTokens({ page: 0, limit: 10, user: address }))
    }

    const callCollection = () => {
        const { callGetCollection } = ApiActions;
        dispatch(callGetCollection({ page: 0, limit: 20, filter: {} }));
    }

    useEffect(() => {
        if (address && address.trim().length > 0) {
            callMintedtokens();
            callCollection();
        }
    }, [address]);

    return (
        <div>

            <TopLinks />
            <Container className="ContMain">
                <Row className="banner_row ">
                    <Col lg={9}>
                        <div className="collection_col">
                            <h2 className="main-heading">My Collections </h2>
                                <p>Create, curate, and manage collections of unique NFTs to share and sell. <img src={info} /></p>
                        </div>
                    </Col>
                </Row>

                <Row className="mb-5">
                    <Col sm={6} lg={3} className="p-0">
                        <div className="col-new mb-3">
                            <img src={toggle} className="toggle" />
                            <h3>Create new collection</h3>
                            <div className="d-flex">
                                {/* -- Create NFT Modal -- */}
                                {/* <CreateCollectionpopup
                                    showCreateModal={showCreateModal}
                                    setShowCreateModal={setShowCreateModal}
                                    mintNewToken={mintNewToken}
                                /> */}
                                <Button className="create-btn" onClick={()=> history.push("/marketplace/create-collection")} href="#" >Create <img src={add_circle} /></Button>
                                <img src={toggle} className="toggle" />
                            </div>
                        </div>
                    </Col>

                    {
                        collections.length > 0 ?
                            collections.map(row => (
                                <Col sm={6} lg={3} onClick={() => history.push(`/marketplace/collection/items/${row['_id']}`)}>
                                    <div className="coll-new mb-3">
                                        <img style={{ width: '300px', height: '250px' }} src={ row.logo } alt="name" />
                                        <p> { row.name } #{ row['_id'] } collection <br /> <b>0 Item</b> </p>
                                    </div>
                                </Col>
                            )) :
                            "No Collections Found."
                    }

                    {/* {
                        mintedLogs.length > 0 ?
                            mintedLogs.map(row => (
                                <Col sm={6} lg={3}>
                                    <div className="col-thumb">
                                        <img src={row?.image} />
                                        <h3> {row[ 'title' ]} </h3>
                                    </div>
                                </Col>
                            )) : "No Records Found."
                    } */}
                </Row>
            </Container>
            {/* <Container fluid className="collection">
                <Container className="custom-cont ContMain">
                    <h4 className="main-heading">Collection items</h4>
                    <div className="coll-box">
                        <div className=" item-col">
                            <Row>
                                <Col sm={6} lg={3} className="p-0"> <CollectionItems thumb={collections_items1} title="William Leo " text="Art World" price="$ 155.99" ></CollectionItems></Col>
                                <Col sm={6} lg={3} className="p-0"> <CollectionItems thumb={collections_items2} title="Jacks Oscar " text="Art World" price="$ 155.99" ></CollectionItems></Col>
                                <Col sm={6} lg={3} className="p-0"> <CollectionItems thumb={collections_items3} title="William Leo " text="Art World" price="$ 155.99" ></CollectionItems></Col>
                                <Col sm={6} lg={3} className="p-0"> <CollectionItems thumb={collections_items4} title="Jacks Oscar " text="Art World" price="$ 155.99" ></CollectionItems></Col>
                                <Col sm={6} lg={3} className="p-0"> <CollectionItems thumb={collections_items3} title="William Leo " text="Art World" price="$ 155.99" ></CollectionItems></Col>
                                <Col sm={6} lg={3} className="p-0"> <CollectionItems thumb={collections_items4} title="Jacks Oscar " text="Art World" price="$ 155.99" ></CollectionItems></Col>
                                <Col sm={6} lg={3} className="p-0"> <CollectionItems thumb={collections_items1} title="William Leo " text="Art World" price="$ 155.99" ></CollectionItems></Col>
                                <Col sm={6} lg={3} className="p-0"> <CollectionItems thumb={collections_items2} title="Jacks Oscar " text="Art World" price="$ 155.99" ></CollectionItems></Col>
                                <Col sm={6} lg={3} className="p-0"> <CollectionItems thumb={collections_items1} title="William Leo " text="Art World" price="$ 155.99" ></CollectionItems></Col>
                                <Col sm={6} lg={3} className="p-0"> <CollectionItems thumb={collections_items2} title="Jacks Oscar " text="Art World" price="$ 155.99" ></CollectionItems></Col>
                                <Col sm={6} lg={3} className="p-0"> <CollectionItems thumb={collections_items3} title="William Leo " text="Art World" price="$ 155.99" ></CollectionItems></Col>
                                <Col sm={6} lg={3} className="p-0"> <CollectionItems thumb={collections_items4} title="Jacks Oscar " text="Art World" price="$ 155.99" ></CollectionItems></Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </Container> */}
        </div>
    );
}

export default MyCollection
