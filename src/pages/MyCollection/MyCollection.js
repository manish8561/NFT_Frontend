import React, {useEffect, useState} from 'react'
import {Container, Row, Col, Button} from "react-bootstrap";
import thumb from '../../assets/Images/women.png'
import CreateCollectionpopup from "../../components/Popup/CreateCollectionpopup";
import CollectionItems from './CollectionItems';
import './MyCollection.scss';
import my_collections1 from '../../assets/Images/my_collections1.png'
import my_collections2 from '../../assets/Images/my_collections2.png'
import my_collections3 from '../../assets/Images/my_collections3.png'
import collections_items1 from '../../assets/Images/collections_items1.png'
import collections_items2 from '../../assets/Images/collections_items2.png'
import collections_items3 from '../../assets/Images/collections_items3.png'
import collections_items4 from '../../assets/Images/collections_items4.png'
import TopLinks from '../../components/TopLinks/TopLinks';
import {ContractActions} from '../../redux/actions/contract.action';
import {useDispatch, useSelector} from 'react-redux';
import {ApiActions} from '../../redux/actions/api.action';

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
        if (address.trim().length > 0) callMintedtokens();
    }, [ address ]);

    return (
        <div>
            <TopLinks />
            <Container className="ContMain">

                <Row className="banner_row">
                    <Col lg={9}>
                        <div className="collection_col">
                            <h2 className="main-heading">My Collections </h2>
                            <p>Create, curate, and manage collections of unique NFTs to share and sell.</p>
                        </div>
                    </Col>
                </Row>

                <Row className="">
                    <Col sm={6} lg={3}>
                        <div className="col-new">
                            <h3>Create new collection</h3>
                            {/* -- Create NFT Modal -- */}
                            <CreateCollectionpopup
                                showCreateModal={showCreateModal}
                                setShowCreateModal={setShowCreateModal}
                                mintNewToken={mintNewToken}
                            />

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

            <Container fluid className="collection">
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
            </Container>
        </div>
    );
}

export default MyCollection
