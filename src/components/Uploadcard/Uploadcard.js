import React from 'react'
import {Form} from "react-bootstrap";
import './Uploadcard.scss'
import plus_icon from '../../assets/Images/plus_icon.svg'
function Uploadcard(props) {
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
                    <div className="add-icon"><img src={plus_icon} />
                        <p>Drag and drop file <br /> or <span className="blue-text">browse media or your device</span></p>

                    </div>
                    <Form.File id="exampleFormControlFile1" />

                </Form.Group>
            </Form>
        </div>
    )
}

export default Uploadcard
