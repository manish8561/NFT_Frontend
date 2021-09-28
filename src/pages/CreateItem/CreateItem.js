import React, {useState} from 'react'
import {Container, Row, Col, Button, Form, ListGroup, Modal} from "react-bootstrap";
import './CreateItem.scss'
import plus_icon from '../../assets/Images/plus_icon.svg'
import proicon from '../../assets/Images/list_black.svg'
import plusicon from '../../assets/Images/add_black.svg'
import star from '../../assets/Images/star.svg'
import AddProperty from '../../components/Popup/AddProperty';
import Uploadcard from '../../components/Uploadcard/Uploadcard';
import info from '../../assets/Images/exclaimation.svg'
import lock from '../../assets/Images/lock.svg'
import warning from '../../assets/Images/warning.svg'
import Reactselect from '../../components/Reactselect/Reactselect';
import eth from '../../assets/Images/eth.svg'
import displayimg from '../../assets/Images/mask.png'
import telegram from '../../assets/Images/telegram.svg'
import fb from '../../assets/Images/fb.svg'
import link from '../../assets/Images/link.svg'


import twitter from '../../assets/Images/twitter.svg'
import SwitchButton from '../../components/SwitchButton/SwitchButton';
function CreateItem() {
    const [ show, setShow ] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <React.Fragment>
            <Container fluid >
                <Container className="ContMain custom_content">
                    <Row>
                        <div className="collection-modal item-card">

                            <Uploadcard heading="Create new item" subheading="  Image, Video, Audio, or 3D Model" text=" File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB." />
                            <div className="create-item-form">
                                <Form className="info-form ">
                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                            Name*
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control type="text" placeholder="Thomas George" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                            External Link
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control type="text" placeholder="https://loremlipsum.com/items/xyz" />
                                            <p className="mt-3 form-textline">NFT will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.</p>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                        <Form.Label column sm="2">
                                            Description
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control as="textarea" rows={4} placeholder="0 to 1000 characters used..." />
                                            <p className="form-textline">The description will be included on the item's detail page underneath its image.</p>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                            Collection
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control type="text" placeholder="https://loremlipsum.com/items/xyz" />
                                            <p className="mt-3 form-textline">This is the collection where your item will appear. <img src={info} /></p>
                                        </Col>
                                    </Form.Group>
                                </Form>
                                <div className="supply-col">
                                    <ListGroup>
                                        <ListGroup.Item >
                                            <div className="list">
                                                <p ><img src={proicon}></img><span className="black-text">Properties</span>
                                                    <div className="grey-text list-text">Textual traits that show up as rectangles</div></p>
                                            </div>
                                            <div className="list-icon">
                                                <AddProperty></AddProperty>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item >
                                            <div className="list">
                                                <p ><img src={star}></img><span className="black-text">Levels</span>
                                                    <div className="grey-text list-text">Numerical traits that show up as progressbar</div></p>
                                            </div>
                                            <div className="list-icon">
                                                <img src={plusicon} />
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item >
                                            <div className="list">
                                                <p ><img src={proicon}></img><span className="black-text">Stats</span>
                                                    <div className="grey-text list-text">Numerical traits that show up as numbers</div></p>
                                            </div>
                                            <div className="list-icon">
                                                <img src={plusicon} />
                                            </div>
                                        </ListGroup.Item>

                                        <ListGroup.Item >
                                            <div className="list">
                                                <p ><img src={lock}></img><span className="black-text"> Unlockable Content </span>
                                                    <div className="grey-text list-text">    Include unlockable content that can only be revealed by the owner of the item. </div></p>
                                            </div>
                                            <div className="switch-toggle">

                                                <SwitchButton id="custom_switch" />
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item >
                                            <div className="list">
                                                <p ><img src={warning}></img><span className="black-text">  Explicit & Sensitive Content</span>
                                                    <div className="grey-text list-text">  Set this item as explicit and sensitive content </div></p>
                                            </div>
                                            <div className="switch-toggle">
                                                <SwitchButton id="switch" />
                                            </div>
                                        </ListGroup.Item>
                                    </ListGroup>


                                </div>

                                <Form className="info-form ">
                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                            Supply
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control type="text" placeholder="1" />
                                            <p className="form-textline">The number of copies that can be minted. No gas cost to you! Quantities above one coming soon.</p>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                            Blockchain
                                        </Form.Label>
                                        <Col sm="10">
                                            <Reactselect currencyicon={eth} placeholder="Rinkeby" />
                                            <p className="form-textline">The number of copies that can be minted. No gas cost to you! Quantities above one coming soon.
                                            </p>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                        <Form.Label column sm="2" className="meta-label">
                                            Freeze metadata <span><img src={info} /></span>
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control type="text" placeholder="To freeze your metadata, you must create your item first." />
                                            <p className="form-textline">Freezing your metadata will allow you to permanently lock and store all of this item's content in decentralized file storage.</p>
                                        </Col>
                                    </Form.Group>
                                    <Button href="#" className="read-btn" onClick={handleShow}>Create</Button>
                                </Form>

                            </div>
                        </div>
                    </Row>

                </Container>
            </Container>

            <Modal show={show} onHide={handleClose} className="create-modal isBlank">
                <Modal.Header closeButton> <Modal.Title >You create My NFT!</Modal.Title> </Modal.Header>
                <Modal.Body>

                    <div className="item-body">
                        <img src={displayimg} />

                    </div>
                    {/* <div className="black-text text-uppercase text-center share">Share</div> */}
                </Modal.Body >

                <Modal.Footer className="social-footer">

                    <ListGroup horizontal className="cssBlank share-social">
                        <ListGroup.Item action href="#"><img src={twitter} /></ListGroup.Item>
                        <ListGroup.Item action href="#"><img src={fb} /></ListGroup.Item>
                        <ListGroup.Item action href="#"><img src={telegram} /></ListGroup.Item>
                        <ListGroup.Item action href="#"><img src={link} /></ListGroup.Item>
                    </ListGroup>
                </Modal.Footer>
            </Modal >

        </React.Fragment >

    )

}

export default CreateItem
