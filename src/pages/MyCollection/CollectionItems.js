import React, { Component } from 'react'
import { Button } from "react-bootstrap";

export class CollectionItems extends Component {
    render() {
        const { thumb, title, text, price } = this.props
        return (
            <div className="business-list white-bg">
                <div className="business-img"> <img className="list-img" src={thumb} /></div>
                <div className="business-info">
                    <div className="title-info">
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </div>
                    <p className="price">{price}</p>
                </div>
                
                <div className="overlay">
                    <div className="overlay-btns">
                        <Button href="#" className="read-btn">Read More </Button>
                        <Button href="#" className="buy-btn">Buy Now </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CollectionItems
