import React from 'react'
import {Card, Col, Container, Row, Accordion, Button} from "react-bootstrap";
import CollectionItems from "../../pages/MyCollection/CollectionItems";
import collections_items1 from "../../assets/Images/collections_items1.png";
import collections_items2 from "../../assets/Images/collections_items2.png";
import collections_items3 from "../../assets/Images/collections_items3.png";
import bookmark from '../../assets/Images/bookmark.svg'
import './Collection.scss'
function Collection() {
    return (
        <React.Fragment>
            <Accordion defaultActiveKey="0" className="profile-desc">
                <Card>
                    <Card.Header className="">
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <img src={bookmark} />   More from this collection
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Container fluid className="">
                            <Container className="custom-cont">

                                <Row className="coll-box">
                                    <Col sm={6} lg={4} className="p-0">
                                        <CollectionItems
                                            thumb={collections_items1}
                                            title="William Leo "
                                            text="Art World"
                                            price="$ 155.99"
                                        ></CollectionItems>
                                    </Col>
                                    <Col sm={6} lg={4} className="p-0">
                                        {" "}
                                        <CollectionItems
                                            thumb={collections_items2}
                                            title="Jacks Oscar "
                                            text="Art World"
                                            price="$ 155.99"
                                        ></CollectionItems>
                                    </Col>
                                    <Col sm={6} lg={4} className="p-0">
                                        {" "}
                                        <CollectionItems
                                            thumb={collections_items3}
                                            title="William Leo "
                                            text="Art World"
                                            price="$ 155.99"
                                        ></CollectionItems>
                                    </Col>



                                </Row>

                            </Container>
                        </Container>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </React.Fragment >
    )
}

export default Collection
