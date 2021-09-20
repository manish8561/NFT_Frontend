import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Container from "react-bootstrap/Container";
import './Breadcrumbs.scss'
function Breadcrumbs(props) {
    return (
        <Container fluid className="top_list">
            {props.Breadcrumbs ?
                <div className="breadcrumbs-col">
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">{props.text}</Breadcrumb.Item>

                        <Breadcrumb.Item active>{props.active}</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                : null}
            test
        </Container>
    )
}

export default Breadcrumbs
