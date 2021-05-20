import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import thumb from '../../Assets/Images/women.png'
import CreateCollectionpopup from "../../Components/Popup/CreateCollectionpopup";
import CollectionItems from './CollectionItems';
import './MyCollection.scss';
import my_collections1 from '../../Assets/Images/my_collections1.png'
import my_collections2 from '../../Assets/Images/my_collections2.png'
import my_collections3 from '../../Assets/Images/my_collections3.png'
import collections_items1 from '../../Assets/Images/collections_items1.png'
import collections_items2 from '../../Assets/Images/collections_items2.png'
import collections_items3 from '../../Assets/Images/collections_items3.png'
import collections_items4 from '../../Assets/Images/collections_items4.png'

function MyCollection() {
    return (
        <div>
            <Container fluid className="top_list">
                <Container>
                    <ul>
                        <li>
                            <a href="#">New</a>
                        </li>
                        <li>
                            <a href="#">Art</a>
                        </li>
                        <li>
                            <a href="#">Domain Names</a>
                        </li>
                        <li>
                            <a href="#">Virtual Worlds</a>
                        </li>
                        <li>
                            <a href="#">Trading Cards</a>
                        </li>
                        <li>
                            <a href="#">Collectibles</a>
                        </li>
                        <li>
                            <a href="#">Sports</a>
                        </li>
                        <li>
                            <a href="#">Utility</a>
                        </li>
                    </ul>
                </Container>
            </Container>

            <Container className="ContMain">
                <Row className="banner_row">
                    <Col lg={9}>
                        <div className="collection_col">
                            <h2 className="main-heading">My Collections </h2>
                            <p>Create collections (your own storefronts), upload digital creations, configure your commission, and sell NFTs to your fans - all for free! You can also manage smart contracts that you created outside of NFT. Learn more</p>
                        </div>
                    </Col>

                </Row>
                <Row className="">
                    <Col lg={3}>
                        <div className="col-new">
                            <h3>Create new collection</h3>

                            <CreateCollectionpopup></CreateCollectionpopup>
                            <p>or add an existing contract</p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="col-thumb">
                            <img src={my_collections1} />
                            <h3>Design Monitor</h3>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="col-thumb">
                            <img src={my_collections2} />
                            <h3>DV Artworks</h3>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="col-thumb">
                            <img src={my_collections3} />
                            <h3>Creative People</h3>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="collection">
                <Container className="custom-cont ContMain">
                    <Row>
                        <h4 className="main-heading">Collection items</h4>
                        <div className="coll-box">
                            <div className=" item-col">
                                <Row>
                                    <Col lg={3} className="p-0"> <CollectionItems thumb={collections_items1} title="William Leo " text="Art World" price="$ 155.99" ></CollectionItems></Col>
                                    <Col lg={3} className="p-0"> <CollectionItems thumb={collections_items2} title="Jacks Oscar " text="Art World" price="$ 155.99" ></CollectionItems></Col>
                                    <Col lg={3} className="p-0"> <CollectionItems thumb={collections_items3} title="William Leo " text="Art World" price="$ 155.99" ></CollectionItems></Col>
                                    <Col lg={3} className="p-0"> <CollectionItems thumb={collections_items4} title="Jacks Oscar " text="Art World" price="$ 155.99" ></CollectionItems></Col>
                                    <Col lg={3} className="p-0"> <CollectionItems thumb={collections_items3} title="William Leo " text="Art World" price="$ 155.99" ></CollectionItems></Col>
                                    <Col lg={3} className="p-0"> <CollectionItems thumb={collections_items4} title="Jacks Oscar " text="Art World" price="$ 155.99" ></CollectionItems></Col>
                                    <Col lg={3} className="p-0"> <CollectionItems thumb={collections_items1} title="William Leo " text="Art World" price="$ 155.99" ></CollectionItems></Col>
                                    <Col lg={3} className="p-0"> <CollectionItems thumb={collections_items2} title="Jacks Oscar " text="Art World" price="$ 155.99" ></CollectionItems></Col>
                                    <Col lg={3} className="p-0"> <CollectionItems thumb={collections_items1} title="William Leo " text="Art World" price="$ 155.99" ></CollectionItems></Col>
                                    <Col lg={3} className="p-0"> <CollectionItems thumb={collections_items2} title="Jacks Oscar " text="Art World" price="$ 155.99" ></CollectionItems></Col>
                                    <Col lg={3} className="p-0"> <CollectionItems thumb={collections_items3} title="William Leo " text="Art World" price="$ 155.99" ></CollectionItems></Col>
                                    <Col lg={3} className="p-0"> <CollectionItems thumb={collections_items4} title="Jacks Oscar " text="Art World" price="$ 155.99" ></CollectionItems></Col>

                                </Row>
                            </div>
                        </div>
                    </Row>

                </Container>
            </Container>

        </div>
    );
}

export default MyCollection
