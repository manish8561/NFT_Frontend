import React, { Component, useState } from 'react'
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import './style.scss'
import plus_icon from '../../Assets/Images/plus_icon.svg'
import add_circle from '../../Assets/Images/add_circle_plus.svg'
import close from '../../Assets/Images/clear_black.svg';
import mask from '../../Assets/Images/mask.png'

function CreateCollectionpopup() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showText, setShowText] = useState(false);
    const onClick1 = () => setShowText(true)
    
    return (
        <div>
            <Button href="#" className="create-btn" onClick={handleShow}>Create <img src={add_circle} /></Button>
            <Modal show={show} onHide={handleClose} className="collection-modal">
                <a href="#" className="close-btn" onClick={handleClose}><img src={close} /></a>
                <Modal.Body >
                <div className={showText ? "hide" : "collectionForm"}>
                    <div className="topTile">   
                    <h2>Create your collection</h2>
                    <p>You can change these values later, along with configuring external URLs, payment <br></br>options, and trading fees.</p>
                    </div>     
                    <Form className="info-form">
                        <Form.Group className="upload-doc">
                            <div className="add-icon"><img src={plus_icon} /></div>
                            <Form.File id="exampleFormControlFile1" />
                            <p>Logo/ Image (350 x 350 recommended)</p>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">Name*</Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Thomas George" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">Description</Form.Label>
                            <Col sm="10">
                                <Form.Control as="textarea" rows={4} placeholder="0 to 1000 characters used..." />
                                 </Col>  
                            <Col sm="12">  
                             <Button href="#" className="read-btn" onClick={onClick1} >Create</Button>
                            </Col>
                        </Form.Group>
                    </Form> 
                    </div>
                    <div className={showText ? "created" : "hide"}>
                        <div className="topTile">
                            <h2>Your collection has been created!</h2>
                        <Row> <Col className="mask_img"><img src={mask} />
                            <Button variant="primary" className=" read-btn fl-0" >Add</Button></Col></Row> 
                        </div>
                    </div>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default CreateCollectionpopup
