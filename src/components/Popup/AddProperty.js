import React, { Component, useState } from 'react'
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import plusicon from '../../assets/Images/add_black.svg'
import deleteicon from '../../assets/Images/delete.svg'

function AddProperty() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <img src={plusicon} onClick={handleShow} />
            <Modal show={show} onHide={handleClose} className="collection-modal">

                <Modal.Body>
                    <div className="collectionForm">
                       <div className="topTile text-center">
                            <Modal.Title>Add Properties</Modal.Title>
                            <p>Properties show up underneath your item, are clickable, and can be filtered in your collection's sidebar.</p>
                        </div>
                        <Form className="info-form collectionForm_new" as={Row}>
                            <Col lg={12}>
                                <Form.Group as={Row} controlId="formPlaintextEmail">
                                    <Form.Label column sm="1">
                                        Type
                                      </Form.Label>
                                    <Col sm="5">
                                        <Form.Control type="text" placeholder="Thomas George" />
                                    </Col>
                                 <Form.Label column sm="1">
                                        Type</Form.Label>
                                    <Col sm="5" className="type-form">
                                        <Form.Control type="text" placeholder="Thomas George" />
                                        <div className="delete-icon"><img src={deleteicon}></img></div>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col lg={12}>
                                 <Form.Group as={Row} controlId="formPlaintextEmail">
                                    <Form.Label column sm="1">
                                        Type
                                     </Form.Label>
                                    <Col sm="5">
                                        <Form.Control type="text" placeholder="Thomas George" />
                                    </Col>
                                   <Form.Label column sm="1">
                                        Type</Form.Label>
                                    <Col sm="5" className="type-form">
                                        <Form.Control type="text" placeholder="Thomas George" />
                                        <div className="delete-icon"><img src={deleteicon}></img></div>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col lg={12}>
                                <div className="plus-icon"><img src={plusicon} /></div>
                            </Col>
                        </Form>
                    </div>
                </Modal.Body>

                <Modal.Footer className="property-footer">

                    <Button variant="primary" className=" read-btn fl-0" onClick={handleClose}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >

    )
}

export default AddProperty
