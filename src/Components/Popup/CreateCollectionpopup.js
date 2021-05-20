import React, { Component, useState } from 'react'
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import './style.scss'
function CreateCollectionpopup() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>

            <Button href="#" className="create-btn" onClick={handleShow}>Create <i className="fa fa-plus"></i></Button>


            <Modal show={show} onHide={handleClose} className="collection-modal">
                <Modal.Header closeButton>
                    <Modal.Title>Create your collection</Modal.Title>
                    <p>You can change these values later, along with configuring external URLs, payment <br></br>options, and trading fees.</p>
                </Modal.Header>
                <Modal.Body>
                    <Form>

                        <Form.Group className="upload-doc">
                            <div className="add-icon"><i className="fa fa-plus"></i></div>
                            <Form.File id="exampleFormControlFile1" />
                            <p>Logo/ Image (350 x 350 recommended)</p>
                        </Form.Group>
                    </Form>

                    <Form className="info-form">
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Name*
    </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Thomas George" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Description
    </Form.Label>
                            <Col sm="10">
                                <Form.Control as="textarea" rows={4} placeholder="0 to 1000 characters used..." />

                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" className=" read-btn" onClick={handleClose}>
                        Create
          </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CreateCollectionpopup
