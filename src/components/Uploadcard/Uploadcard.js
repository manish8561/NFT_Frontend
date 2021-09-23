import React, { useState } from 'react'
import { Form } from "react-bootstrap";
import './Uploadcard.scss'
import plus_icon from '../../assets/Images/plus_icon.svg'
import { toast } from 'react-toastify';
import { Field } from 'redux-form';
import { FormField } from '../FormField';
import { required } from 'redux-form-validators';

const Uploadcard = (props) => {
    const [image, setImage] = useState("");

    const onImageChange = (event) => {
        const files = event.target.files;
        if (files.length === 0) return toast.info("Please upload a valid image format (.jpg, .jpeg, .png, .gif)");

        const file = files[0]; /** get file from files array */
        let ext = file.name.split(".")[1]; /** get ext of image to validate */
        ext = ext.toLowerCase();
        if ((ext === "jpg") || (ext === "jpeg") || (ext === "png") || (ext === "gif")) {
            const fileSize = file.size / 1024 / 1024 / 1024;
            if (fileSize > 3000) return toast.info('Image should be less than or equal to 3MB');
            const blob = URL.createObjectURL(file)
            setImage(blob);
        } else {
            return toast.info("Please upload a valid image format (.jpg, .jpeg, .png, .gif)");
        }
    }

    return (
        <div className="create-item pt-0">
            <div class="modal-header">
                <div class="modal-title h4">
                    {props.heading ? <h4>{props.heading}</h4> : null}</div>
                <span className="black-text">{props.subheading} {props.optional ? <span className="optional">{props.optional}</span> : null}  </span>
                <p>{props.text}</p>
            </div>
            <Form>

                <Form.Group className="upload-doc upload-file">
                    <div className="add-icon">
                        <img style={{ height: '250px', width: '308px' }} src={image.length > 0 ? image : plus_icon} alt="" />
                        <p>Drag and drop file <br /> or <span className="blue-text">browse media or your device</span></p>

                    </div>
                    <Field component={FormField} type="file" name={props.name} onChangeImage={onImageChange} validate={[ required() ]} />
                    {/* <Form.File onChange={onImageChange} id="exampleFormControlFile1" /> */}

                </Form.Group>
            </Form>
        </div>
    )
}

export default Uploadcard
