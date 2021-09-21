import React, {useEffect, useState} from 'react'
import {Container, Row, Col, Button} from "react-bootstrap";
import CreateCollectionpopup from "../../components/Popup/CreateCollectionpopup";
import CollectionItems from './CollectionItems';
import './MyCollection.scss';
import toggle from '../../assets/Images/line.svg'
import add_circle from '../../assets/Images/add_circle_plus.svg'
import TopLinks from '../../components/TopLinks/TopLinks';
import {ContractActions} from '../../redux/actions/contract.action';
import {useDispatch, useSelector} from 'react-redux';
import {ApiActions} from '../../redux/actions/api.action';
import collectionsitem1 from '../../assets/Images/my_collections2.png';
import collectionsitem2 from '../../assets/Images/my_collections1.png';

function MyCollection() {
    const dispatch = useDispatch();
    const address = useSelector(state => state.persist.address);
    const mintedLogs = useSelector(state => state.api.mintedLogs);
    const [ showCreateModal, setShowCreateModal ] = useState(false);

    const mintNewToken = (values) => {
        const {callMintTokens} = ContractActions;
        dispatch(callMintTokens({...values, address}));
    };

    const callMintedtokens = () => {
        const {callGetMintedTokens} = ApiActions;
        dispatch(callGetMintedTokens({page: 0, limit: 10, user: address}));
    }

    useEffect(() => {
        if (address && address.trim().length > 0) callMintedtokens();
    }, [ address ]);

    return (
        <div>
            <TopLinks />
            <Container className="ContMain">

                <Row className="banner_row ">
                    <Col lg={9}>
                        <div className="collection_col">
                            <h2 className="main-heading">My Collections </h2>
                            <p>Create, curate, and manage collections of unique NFTs to share and sell.</p>
                        </div>
                    </Col>
                </Row>

                <Row className="mb-5">
                    <Col sm={6} lg={3}>
                        <div className="col-new mb-3">
                            <h3>Create new collection</h3>
                            <div className="d-flex">
                                {/* -- Create NFT Modal -- */}
                                {/* <CreateCollectionpopup
                                    showCreateModal={showCreateModal}
                                    setShowCreateModal={setShowCreateModal}
                                    mintNewToken={mintNewToken}
                                /> */}
                                <Button className="create-btn" href="/marketplace/create-collection">Create <img src={add_circle} /></Button>
                                <img src={toggle} className="toggle" />
                            </div>
                        </div>
                    </Col>

                    <Col sm={6} lg={3}>
                        <div className="coll-new mb-3">
                            <img src={collectionsitem1} />
                            <p>Explore the My NFT Collection #2728089 collection <br /> <b>0 Item</b> </p>
                        </div>

                    </Col>
                    <Col sm={6} lg={3}>
                        <div className="coll-new mb-3">
                            <img src={collectionsitem2} />
                            <p>Explore the Untitled Collection #2728089 collection<br /> <b> 1 Item </b> </p>
                        </div>

                    </Col>
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
