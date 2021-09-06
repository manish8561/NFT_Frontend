import React from 'react'
import { Container, Row, Col, Button, Form, ListGroup } from "react-bootstrap";
import './CreateItem.scss'
import plus_icon from '../../assets/Images/plus_icon.svg'
import proicon from '../../assets/Images/list_black.svg'
import plusicon from '../../assets/Images/add_black.svg'
import star from '../../assets/Images/star.svg'
import AddProperty from '../../components/Popup/AddProperty';
import TopLinks from '../../components/TopLinks/TopLinks';

function CreateItem() {
    return (
        <React.Fragment>
            <TopLinks />
            <Container fluid >
                <Container className="ContMain custom_content">
                    <Row>
                        <div className="collection-modal create-item">
                            <div class="modal-header">
                                <div class="modal-title h4">Create new item</div>
                                <p><span className="black-text">Image, Video, Audio, or 3D Model</span> <br></br> File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</p>
                            </div>
                            <Form>

                                <Form.Group className="upload-doc upload-file">
                                    <div className="add-icon"><img src={plus_icon} />
                                        <p>Drag and drop file <br /> or <span className="blue-text">browse media or your device</span></p>

                                    </div>
                                    <Form.File id="exampleFormControlFile1" />

                                </Form.Group>
                            </Form>
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
                                            <p>NFT will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.</p>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                        <Form.Label column sm="2">
                                            Description
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control as="textarea" rows={4} placeholder="0 to 1000 characters used..." />
                                            <p>The description will be included on the item's detail page underneath its image.</p>
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
                                    </ListGroup>
                                </div>
                                <Form className="info-form ">
                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                            Supply
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control type="text" placeholder="1" />
                                            <p>The number of copies that can be minted. No gas cost to you! Quantities above one coming soon.</p>
                                        </Col>
                                    </Form.Group>
                                    <Button href="#" className="read-btn" >Create</Button>
                                </Form>

                            </div>
                        </div>
                    </Row>

                </Container>
            </Container>
        </React.Fragment >
    )
}

export default CreateItem
