import React, { Component, useState } from 'react'
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import './style.scss'
import plus_icon from '../../assets/Images/plus_icon.svg'
import add_circle from '../../assets/Images/add_circle_plus.svg'
import close from '../../assets/Images/clear_black.svg';
import mask from '../../assets/Images/mask.png'
import { useDispatch } from 'react-redux';
import CreateNftForm from './CreateNftForm';

const CreateCollectionpopup = ({ showCreateModal, setShowCreateModal, mintNewToken }) => {
    const dispatch = useDispatch();
    const [showText, setShowText] = useState(false);

    const onSubmitForm = (values) => {
        mintNewToken(values);
    }

    return (
        <div>
            <Button className="create-btn" onClick={() => setShowCreateModal(true)}>Create <img src={add_circle} /></Button>
           
            <Modal show={showCreateModal} onHide={() => setShowCreateModal(false)} className="collection-modal">
                <a href="#" className="close-btn" onClick={() => setShowCreateModal(false)}><img src={close} /></a>
                <Modal.Body >
                    <div className={showText ? "hide" : "collectionForm"}>
                       
                        <div className="topTile">
                            <h2>Create your collection</h2>
                            <p>You can change these values later, along with configuring external URLs, payment <br></br>options, and trading fees.</p>
                        </div>

                    
                        <CreateNftForm onSubmit={onSubmitForm} setShowText={setShowText} />

                    </div>
                    <div className={showText ? "created" : "hide"}>
                        <div className="topTile">
                            <h2>Your collection has been created!</h2>
                            <Row> <Col className="mask_img"><img src={mask} />
                                <a className="read-btn fl-0" href="/CreateItem">Add</a>
                                {/* <Button variant="primary" className=" read-btn fl-0" >Add</Button> */}
                            </Col></Row>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default CreateCollectionpopup
