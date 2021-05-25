import React from 'react'
import './Profile.scss'
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import cover from '../../Assets/Images/cover.png'
import edit from '../../Assets/Images/edit.svg'
import TopLinks from '../../Components/TopLinks/TopLinks';
import profilepic from '../../Assets/Images/my_collections3.png'
import barcode from '../../Assets/Images/bar-code.svg'
import arrowright from '../../Assets/Images/arrow-right.svg'
import add_circle from '../../Assets/Images/add_circle_plus.svg'
import my_collections1 from '../../Assets/Images/my_collections1.png'
import my_collections2 from '../../Assets/Images/my_collections2.png'
import my_collections3 from '../../Assets/Images/my_collections3.png'
import collections_items1 from '../../Assets/Images/collections_items1.png'
import collections_items2 from '../../Assets/Images/collections_items2.png'
import collections_items3 from '../../Assets/Images/collections_items3.png'
import collections_items4 from '../../Assets/Images/collections_items4.png'
import CollectionItems from '../MyCollection/CollectionItems';

function Profile() {
    return (
        <React.Fragment>
            <TopLinks />
            <Container className="ContMain">
                <Row className="banner_row">
                    <div className="bg-cover">
                        <img src={cover} className="cover-img" />
                        <Form>
                            <Form.Group className="upload-img">
                                <div className="edit-icon"><img src={edit} />

                                </div>
                                <Form.File id="exampleFormControlFile1" />

                            </Form.Group>
                        </Form>
                    </div>
                    <div className="profile-info">
                        <div className="user_info">
                            <img src={profilepic} />
                            <span className="user-name">
                                <h2>Thomas George</h2>
                                <p>Creative People</p>

                                <Button variant="outline-secondary" className="profile-btns">Edit <img src={edit} /></Button>
                                <Button variant="outline-secondary" className="profile-btns">Payout <img src={barcode} /></Button>
                                <Button variant="outline-secondary" className="profile-btns">Visit <img src={arrowright} /></Button>
                            </span>
                        </div>
                        <Button href="#" className="create-btn" >Add New Item <img src={add_circle} /></Button>
                    </div>

                </Row>
            </Container>
            <Container fluid className="collection profile-collect">
                <Container className="custom-cont ContMain">
                    <Row>
                        <div className="collection-modal search-form">
                            <div className="collectionForm ">
                                <Form className="info-form" as={Row}>
                                    <Col lg={8}>
                                        <Form.Group as={Row} controlId="formPlaintextEmail">
                                            <Form.Label column sm="1">
                                                Items
                                      </Form.Label>
                                            <Col sm="11">
                                                <Form.Control type="text" placeholder="Search" />

                                                <div className="search-icon"><i className="fa fa-search"></i></div>
                                            </Col>
                                        </Form.Group>


                                    </Col>
                                    <Col lg={4}>
                                        <Form.Group as={Row} controlId="exampleForm.ControlSelect1">

                                            <Form.Control as="select" className="sort-value">
                                                <option>Sort by</option>
                                                <option>1-2</option>
                                                <option>3-4</option>

                                            </Form.Control>
                                        </Form.Group>

                                    </Col>
                                </Form>
                            </div>
                        </div>
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
                    </Row>

                </Container>
            </Container>
        </React.Fragment>
    )
}

export default Profile
