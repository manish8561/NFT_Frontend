import React from 'react'
import cover from '../../assets/Images/cover.png'
import './Collectiontopbar.scss'
import displayimg from '../../assets/Images/my_collections1.png'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import eth from '../../assets/Images/eth.svg'
function Collectiontopbar() {
    return (
        <>
            <div className="cover">
                <img className="w-100 cover_img" src={cover} />
            </div>
            <div className="coll-profile">
                <img className="profile-pic" src={displayimg} />
                <h2>Untitled Collection # 2728089</h2>
                <div className="group-collection">
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="secondary">
                            <h4>2</h4>
                            <p>Items</p>
                        </Button>
                        <Button variant="secondary">
                            <h4>1</h4>
                            <p>Items</p>
                        </Button>
                        <Button variant="secondary">
                            <h4>---</h4>
                            <p>Floor price</p>
                        </Button>

                        <Button variant="secondary">
                            <h4>
                                <img className="eth-icon" src={eth} /> 0.00</h4>
                            <p>volume trade</p>
                        </Button>

                    </ButtonGroup>
                    <p className="sub-line">Welcome to the home of Untitled Collection #2728089 on NFT. Discover the best items in this collection.</p>
                </div>
            </div>

        </>
    )
}

export default Collectiontopbar
