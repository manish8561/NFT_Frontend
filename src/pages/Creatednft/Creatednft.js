import React from 'react'
import {Container, Row, Button, Col} from "react-bootstrap";
import Collection from '../../components/Collection/Collection';
import Nftleft from '../../components/Nftleft/Nftleft';
import Nftright from '../../components/Nftright/Nftright';
import Tradinghistory from '../../components/Tradinghistory/Tradinghistory';


import './Creatednft.scss'
function Creatednft() {
    return (
        <React.Fragment >
            <Container fluid className="top_list ">

                <Container className="top-bar">
                    <Button variant="outline-primary">Edit</Button>
                    <Button variant="primary">Sell</Button>
                </Container>
            </Container>
            <Container fluid className=" ">

                <Container className="create-nft-col ">
                    <Row>
                        <Col md={5}>
                            <Nftleft />
                        </Col>
                        <Col md={7}>
                            <Nftright />
                        </Col>
                        <Col md={12}>
                            <Tradinghistory />
                        </Col>
                        <Col md={12}>
                            <Collection />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </React.Fragment>
    )
}

export default Creatednft
