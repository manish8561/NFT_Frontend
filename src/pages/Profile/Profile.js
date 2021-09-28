import React from 'react'
import {Container, Col, Button, Card, Accordion} from "react-bootstrap";
import list from '../../assets/Images/list.svg'
import edit from '../../assets/Images/editicon.svg'
import back from '../../assets/Images/arrow_back_black.svg'
import './Profile.scss'
import statusicon from '../../assets/Images/status.svg'
import price from '../../assets/Images/price.svg'
import chains from '../../assets/Images/chains.svg'
import sale from '../../assets/Images/sale.svg'
import filtericon from '../../assets/Images/filter.svg'
import Searchbar from '../../components/Searchbar/Searchbar';
import cover from '../../assets/Images/cover.png'
import displayimg from '../../assets/Images/my_collections1.png'
import Searchresults from '../../components/Searchresults/Searchresults';
import copy from '../../assets/Images/copy.png'
function Profile() {
    return (
        <div>

            <div className="cover">
                <img className="w-100 cover_img" src={cover} />
            </div>
            <div className="coll-profile">
                <img className="profile-pic" src={displayimg} />
                <h2>My NFT</h2>
                <p className="sub-line mb-0">0x9a58...f5d3 <img className="copy" src={copy} /></p>
            </div>
            <Container fluid className="categorie_sec collection_card">
                <div className="nft-collection categorie_row">
                    <div className="sidebar_col">
                        <Accordion defaultActiveKey="0" className="profile-desc sidebar-col">
                            <Card>
                                <div className="main-title"> <img src={filtericon} /> <span className="sidebar-heading blue-text">My Items</span></div>
                                <ul className="item_list">
                                    <li>Collected <span className="count">0</span></li>
                                    <li>Created  <span className="count">0</span></li>
                                    <li>Favorited <span className="count">0</span></li>
                                    <li>Hidden <span className="count">0</span></li>
                                </ul>

                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        <img src={price} /> <span className="sidebar-heading">Price</span>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <p>$ 1.11</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>


                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                        <img src={chains} /> <span className="sidebar-heading">Chains</span>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>
                                        <p>$ 1.11</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                        <img src={sale} /> <span className="sidebar-heading">On Sale In</span>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4">
                                    <Card.Body>
                                        <p>$ 1.11</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                    </div>
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
    )
}

export default Profile
