import React, { Component, useState } from 'react'
import { Modal, Button, Form } from "react-bootstrap";
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
                    <Form className="upload-doc">
                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CreateCollectionpopup
