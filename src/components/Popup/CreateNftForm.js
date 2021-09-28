import React, {useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import './style.scss'
import plus_icon from '../../assets/Images/plus_icon.svg'
import {FormField} from '../FormField';
import {Field, reduxForm} from 'redux-form';
import {required} from 'redux-form-validators';
import {toast} from "../Toast/Toast";

const CreateNftForm = ({handleSubmit}) => {
    const [ image, setImage ] = useState("");

    const onChangeImage = async (event) => {
        const files = event.target.files;
        if (files.length === 0) return toast.info("Please upload a valid image format (.jpg, .jpeg, .png, .gif)");

        const file = files[ 0 ]; /** get file from files array */
        let ext = file.name.split(".")[ 1 ]; /** get ext of image to validate */
        ext = ext.toLowerCase();
        const fileSize = file.size / 1024 / 1024 / 1024;

        if (fileSize > 3000) return toast.info('Image should be less than or equal to 3MB');
        const blob = URL.createObjectURL(file)
        setImage(blob);
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        handleSubmit();
    }

    return (
        <Form onSubmit={onSubmitForm} autoComplete="off" className="info-form" autoFocus="off">
            <Form.Group className="upload-doc">
                {
                    image.trim().length === 0 ?
                        <div className="add-icon"><img src={plus_icon} /></div> :
                        <img src={image} alt="image" style={{height: "600px", width: "100%"}} />
                }
                <Field component={FormField} onChangeImage={onChangeImage} name="image" type="file" validate={[ required() ]} />
                <p>Logo/ Image (350 x 350 recommended)</p>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">Name*</Form.Label>
                <Col sm="10">
                    <Field component={FormField} className="form-control" name="title" type="text" placeholder="Example:: Elon Musk" validate={[ required() ]} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">No. of tokens*</Form.Label>
                <Col sm="10">
                    <Field component={FormField} className="form-control" name="amount" type="number" placeholder="Example:: 100 Musk" validate={[ required() ]} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">Description</Form.Label>
                <Col sm="10">
                    <Field component={FormField} name="description" type="textarea" className="form-control" textarea={true} rows={6} placeholder="0 to 1000 characters used..." validate={[ required() ]} />
                </Col>
                <Col sm="12">
                    <Button type="submit" className="read-btn">Create</Button>
                </Col>
            </Form.Group>
        </Form>

    )
}

export default reduxForm({form: "CreateNft", enableReinitialize: true})(CreateNftForm);