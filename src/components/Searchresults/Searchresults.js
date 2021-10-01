import React from 'react'
import collectionsitem2 from '../../assets/Images/my_collections1.png'
import collectionsitem1 from '../../assets/Images/my_collections2.png';
import {Col, Row} from "react-bootstrap";
import dotted from '../../assets/Images/dottedline.svg'
import like from '../../assets/Images/heart.svg'
import './Searchresults.scss'
import { Link } from 'react-router-dom';
function Searchresults(props) {
    return (
        <div>
            <Row>
                {props.CollectionItems && props.CollectionItems.length > 0 ?

                    props.CollectionItems.map((items) => 
                        <Col sm={6} lg={3}>
                            <div className="fav">
                                <img src={dotted} />
                                <div className="user-like" >
                                   <img src={like} /> 1
                                </div>
                            </div>
                            <div className="coll-new mb-3 collection-box">
                                <Link to={ {pathname :`/assets/${items._id}`}} >
                                    <img className="w-100" src={collectionsitem1} />
                                </Link> 
                                <p><b>{items.name}</b><br /> 
                                {items.description} </p>
                            </div>
                        </Col>
                    )
                    :
                    <></>
                }
            </Row>
        </div>
    )
}

export default Searchresults
