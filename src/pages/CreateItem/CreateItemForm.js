import React, { useEffect, useState } from 'react';
import info from '../../assets/Images/exclaimation.svg'
import lock from '../../assets/Images/lock.svg'
import warning from '../../assets/Images/warning.svg'
import proicon from '../../assets/Images/list_black.svg'
import plusicon from '../../assets/Images/add_black.svg'
import star from '../../assets/Images/star.svg'
import AddProperty from '../../components/Popup/AddProperty';
import SwitchButton from '../../components/SwitchButton/SwitchButton';
import { Field, reduxForm } from 'redux-form';
import { FormField } from '../../components/FormField';
import { Row, Col, Button, Form, ListGroup } from "react-bootstrap";
import { required } from 'redux-form-validators';
import { GlobalVariables } from '../../constants/globalVariables.constant';
import Uploadcard from '../../components/Uploadcard/Uploadcard';
import { connect } from 'react-redux';
import { compose } from 'redux';

const CreateItemForm = ({ itemIndex, collectionsList, handleSubmit }) => {


    // useEffect(() => {
    //     setCollectionValue(collectionsList[itemIndex]);
    // }, [collectionsList, itemIndex]);


    return (
        <Row>
            <div className="collection-modal item-card">
                <Form className="info-form " onSubmit={handleSubmit}>
                    <Uploadcard heading="Create new item" name="file" subheading="Image, Video, Audio, or 3D Model" text=" File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB." />
                    <div className="create-item-form">
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2"> Name*</Form.Label>
                            <Col sm="10">
                                <Field component={FormField} className="form-control" name="name" type="text" placeholder="Example:: Elon Musk" validate={[required()]} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">External Link</Form.Label>
                            <Col sm="10">
                                <Field component={FormField} className="form-control" name="externalLink" type="text" placeholder="https://loremlipsum.com/items/xyz" />

                                <p className="mt-3 form-textline">NFT will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.</p>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">Description</Form.Label>
                            <Col sm="10">
                                <Field component={FormField} className="form-control" rows={4} name="description" type="textarea" textarea={true} placeholder="0 to 1000 characters used..." validate={[required()]} />

                                <p className="form-textline">The description will be included on the item's detail page underneath its image.</p>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Collection
                            </Form.Label>
                            <Col sm="10">
                                {/* <Field component={FormField} className="form-control" name="" type="text" /> */}
                                <Field
                                    component={FormField}
                                    options={collectionsList}
                                    name="collection"
                                    validate={[required()]}
                                    classNamePrefix="react-select"
                                    value=""
                                    isClearable
                                    closeMenuOnSelect={true}
                                    type="multi-select"
                                />

                                <p className="mt-3 form-textline">This is the collection where your item will appear.<img src={info} alt="info" /></p>
                            </Col>
                        </Form.Group>

                        {/* <div className="supply-col">
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
                                        <img src={plusicon} alt="" />
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
                                        <p ><img alt="" src={lock}></img><span className="black-text"> Unlockable Content </span>
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
  */}
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Supply
                            </Form.Label>
                            <Col sm="10">
                                <Field component={FormField} className="form-control"  validate={[required()]} name="supply" type="text" placeholder="0" />
                                <p className="form-textline">The number of copies that can be minted.No gas cost to you!Quantities above one coming soon.</p>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Royalties
                            </Form.Label>
                            <Col sm="10" className="category-labl">
                                <p className="m-0">Collect a fee when a user re-sells an item you originally created.This is deducted from the final sale price and paid monthly to a payout address of your choosing.
                                    <a className="blue-text" href="#">Learn more</a>
                                </p>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                % Fee
                            </Form.Label>
                            <Col sm="10">
                                <Field component={FormField} className="form-control" name="royality" type="text" placeholder="0.00" validate={[required()]} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Blockchain
                            </Form.Label>
                            <Col sm="10">
                                <Field
                                    component={FormField}
                                    options={GlobalVariables.blockchainOptions}
                                    name="blockchain"
                                    className="form-control mt-3"
                                    classNamePrefix="react-select"
                                    value=""
                                    isClearable
                                    validate={[required()]}
                                    closeMenuOnSelect={true}
                                    type="multi-select"
                                />
                                <p className="form-textline">The number of copies that can be minted.No gas cost to you!Quantities above one coming soon.
                                </p>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2" className="meta-label">
                                Freeze metadata <span><img src={info} /></span>
                            </Form.Label>
                            <Col sm="10">
                                <Field component={FormField} className="form-control" name="meta" type="text" placeholder="To freeze your metadata, you must create your item first." />

                                <p className="form-textline">Freezing your metadata will allow you to permanently lock and store all of this item's content in decentralized file storage.</p>
                            </Col>
                        </Form.Group>

                        <Button type="submit">Create</Button>
                        {/* --- fix css --- */}
                        {/* <Button type="submit" className="read-btn">Create</Button> */}
                    </div>
                </Form>
            </div>
        </Row >


    );
}

// const mapStateToProps = state => ({
//     initialValues: state.api.CreateItemForm
// })

export default reduxForm({ form: "CreateItemForm", enableReinitialize: true })(CreateItemForm);