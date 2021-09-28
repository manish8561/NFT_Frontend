import React from 'react'
import collectionsitem2 from '../../assets/Images/my_collections1.png'
import collectionsitem1 from '../../assets/Images/my_collections2.png';
import {Col, Row} from "react-bootstrap";
import dotted from '../../assets/Images/dottedline.svg'
import like from '../../assets/Images/heart.svg'
import './Searchresults.scss'
function Searchresults() {
    return (
        <div>
            <Row>

                <Col sm={6} lg={3}>
                    <div className="fav">
                        <img src={dotted} />
                        <div className="user-like">
                            <img src={like} /> 1
                        </div>
                    </div>
                    <div className="coll-new mb-3 collection-box">
                        <img className="w-100" src={collectionsitem1} />
                        <p>Explore the My NFT Collection #2728089 collection <br /> <b>0 Item</b> </p>
                    </div>

                </Col>
                <Col sm={6} lg={3}>
                    <div className="fav">
                        <img src={dotted} />
                        <div className="user-like">
                            <img src={like} /> 1
                        </div>
                    </div>
                    <div className="coll-new mb-3 collection-box">
                        <img className="w-100" src={collectionsitem2} />
                        <p>Explore the Untitled Collection #2728089 collection<br /> <b> 1 Item </b> </p>
                    </div>

                </Col>
            </Row>
        </div>
    )
}

export default Searchresults
