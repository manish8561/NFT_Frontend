import React from 'react'
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import './CreateItem.scss'
import plus_icon from '../../Assets/Images/plus_icon.svg'
import add_circle from '../../Assets/Images/add_circle_plus.svg'
function CreateItem() {
    return (
        <React.Fragment>
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

                <Form className="info-form create-item-form">
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
            </div>
        </React.Fragment>
    )
}

export default CreateItem
