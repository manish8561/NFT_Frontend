import React, { Component, useState } from 'react'
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import './style.scss'
import mask from '../../Assets/Images/mask.png'
function CreatePopup() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>

            <Button href="#" className=" read-btn" onClick={handleShow}>Create</Button>


            <Modal show={show} onHide={handleClose} className="collection-modal">
                <Modal.Header closeButton>
                    <Modal.Title>Your collection has been created!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>

                        <Form.Group className="upload-doc">
                            <div className="add-icon">
                                <img src={mask} />
                            </div>

                        </Form.Group>
                    </Form>
                    <div className="text-center add-btn">

                        <Button variant="primary" className=" read-btn fl-0" onClick={handleClose}>
                            Add
                             </Button>
                    </div>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default CreatePopup
