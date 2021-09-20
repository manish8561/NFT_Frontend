import React, {useState} from 'react'
import {Container, Row, Col, Button, Form, InputGroup, Modal} from "react-bootstrap";
import './Createcollection.scss'
import close from '../../assets/Images/close.svg'
import Uploadcard from '../../components/Uploadcard/Uploadcard';
import web from '../../assets/Images/web.svg'
import discord from '../../assets/Images/discord.svg'
import twitter from '../../assets/Images/twitter.svg'
import instagram from '../../assets/Images/instagram.png'
import medium from '../../assets/Images/M.svg'
import telegram from '../../assets/Images/telegram.svg'
import eth from '../../assets/Images/eth.svg'
import Select from 'react-select'
import info from '../../assets/Images/exclaimation.svg'
import padded from '../../assets/Images/card-display-padded.svg'
import contained from '../../assets/Images/card-display-contain.svg'
import covered from '../../assets/Images/card-display-cover.svg'
import Reactselect from '../../components/Reactselect/Reactselect';
import displayimg from '../../assets/Images/jelly-fish.png'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
function Createcollection() {
    const [ show, setShow ] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const tokenoptions = [
        {
            value: 'Add token', label: 'Add token'
        },
        {
            value: 'Rinkeby', label: 'Rinkeby'
        },
        {
            value: 'Basenet', label: 'Basenet'
        },
    ]
    return (
        <React.Fragment>
            <Breadcrumbs text="My collections" active="Create collections" />
            <Container fluid >
                <Container className="ContMain custom_content">
                    <Row>
                        <div className="collection-modal item-card">
                            <Uploadcard heading="Createcollection" subheading="Logo image *" text="This image will also be used for navigation. 350 x 350 recommended." />
                            <Uploadcard subheading="Featured image " optional=" (optional)" text="This image will be used for featuring your collection on the homepage, cate<b much text in this banner image, as the dimensions change on different devices. 1400 x 400 recommended." />
                            <div className="create-item-form">
                                <Form className="info-form ">
                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                            Name*
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control type="text" placeholder="Thomas George" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                            External Link
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control type="text" placeholder="https://loremlipsum.com/items/xyz" />
                                            <p className="mt-3">NFT will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.</p>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                        <Form.Label column sm="2">
                                            Description
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control as="textarea" rows={4} placeholder="0 to 1000 characters used..." />
                                            <p>The description will be included on the item's detail page underneath its image.</p>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                        <Form.Label column sm="2">
                                            Category
                                        </Form.Label>
                                        <Col sm="10" className="category-labl">
                                            <div className="token-cols">
                                                <span class="label non-active">Collectibles</span>
                                                <span class="label active curr-text">Art <img src={close} /></span>
                                                <small>You can select a maximum of one category.</small>
                                            </div>
                                            <p>Adding a category will help make your item discoverable on NFT.</p>

                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                        <Form.Label column sm="2">
                                            Links
                                        </Form.Label>
                                        <Col sm="10" className="">
                                            <InputGroup className="mb-3 sociallink-box">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="basic-addon1"><img src={web} /></InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control
                                                    placeholder="yoursite.io"
                                                    aria-label="Username"
                                                    aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3 sociallink-box">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="basic-addon1"><img src={discord} /></InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control
                                                    placeholder="https://discord.gg/abcdef"
                                                    aria-label="Username"
                                                    aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3 sociallink-box">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="basic-addon1"><img src={twitter} /></InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control
                                                    placeholder=""
                                                    aria-label="Username"
                                                    aria-describedby="basic-addon1"
                                                    defaultValue="https://twitter.com/YourTwitterHandle"
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3 sociallink-box">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="basic-addon1"><img className="instaicon" src={instagram} /></InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control
                                                    placeholder=""
                                                    aria-label="Username"
                                                    aria-describedby="basic-addon1"
                                                    defaultValue="https://www.instagram.com/YourInstagramHandle"
                                                />
                                            </InputGroup> <InputGroup className="mb-3 sociallink-box">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="basic-addon1"><img src={medium} /></InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control
                                                    placeholder=""
                                                    aria-label="Username"
                                                    aria-describedby="basic-addon1"
                                                    defaultValue="https://www.medium.com/@YourMediumHandle"
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3 sociallink-box">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="basic-addon1"><img src={telegram} /></InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control
                                                    placeholder=""
                                                    aria-label="Username"
                                                    aria-describedby="basic-addon1"
                                                    defaultValue="https://t.me/abcdef"
                                                />
                                            </InputGroup>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                        <Form.Label column sm="2">
                                            Royalties
                                        </Form.Label>
                                        <Col sm="10" className="category-labl">

                                            <p className="m-0">Collect a fee when a user re-sells an item you originally created. This is deducted from the final sale price and paid monthly to a payout address of your choosing.
                                                <a className="blue-text" href="#">Learn more</a>
                                            </p>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                            % Fee
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control type="text" placeholder="0.00" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                            Blockchain
                                        </Form.Label>
                                        <Col sm="10">
                                            <Reactselect currencyicon={eth} placeholder="Rinkeby" />
                                            <p>Select the blockchain where you'd like new items from this collection to be added by default. <img className="info-black" src={info} />
                                            </p>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                        <Form.Label column sm="2">
                                            Payment tokens
                                        </Form.Label>
                                        <Col sm="10" className="category-labl payment-token">
                                            <div className="token-cols">
                                                <span class="label non-active eth-token"><span className="curr-icon"><img src={eth} /></span><span className="curr-text"> <small className="black-text">ETH <br /></small>Rinkeby</span></span>
                                                <span class="label non-active eth-token"><span className="curr-icon"><img src={eth} /></span><span className="curr-text"> <small className="black-text">WETH <br /></small>Rinkeby</span></span>

                                                <span class="label non-active">Rinkeby</span>
                                                <span class="label non-active">Rinkeby</span>
                                            </div>
                                            <p>These tokens can be used to buy and sell your items. <img src={info} /></p>
                                            <Select options={tokenoptions} className="form-control mt-3"

                                                options={tokenoptions}

                                                classNamePrefix="react-select"
                                                placeholder="Add token"
                                                label="Add token"
                                            // menuIsOpen="true"
                                            />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextPassword" className="switch-toggle">
                                        <Form.Label column sm="2">
                                            Display <br />theme
                                        </Form.Label>
                                        <Col sm="10" className="">
                                            <div className="theme-col">
                                                <div className="display-theme active-theme">
                                                    <img src={padded} />
                                                    <h5>Padded</h5>
                                                    <p>Recommended for assets with transparent background</p>
                                                </div>
                                                <div className="display-theme">
                                                    <img src={contained} />
                                                    <h5>Contained</h5>
                                                    <p>Recommended for assets that are not a 1:1 ratio</p>
                                                </div>
                                                <div className="display-theme">
                                                    <img src={covered} />
                                                    <h5>Covered</h5>
                                                    <p>Recommended for assets that can extend to the edge</p>
                                                </div>

                                            </div>
                                            <p className="mt-3">Change how your items are shown.</p>
                                            <div className="switch-toggle">
                                                <div>
                                                    <h6 className="black-text">Explicit & sensitive content</h6>
                                                    <p>Set this collection as explicit and sensitive content &nbsp;<img src={info} />
                                                    </p>
                                                </div>
                                                <Form.Check
                                                    type="switch"
                                                    id="custom-switch"

                                                />
                                            </div>
                                        </Col>
                                    </Form.Group>

                                </Form>

                                <Form className="info-form ">

                                    <Button href="#" className="read-btn" onClick={handleShow}>Create</Button>
                                </Form>

                            </div>
                        </div>
                    </Row>

                </Container>
            </Container>

            <Modal show={show} onHide={handleClose} className="create-modal collection-modal isBlank">
                <Modal.Header closeButton className="b-0"> <Modal.Title >Your collection has been created!</Modal.Title> </Modal.Header>
                <Modal.Body>

                    <div className="item-body">
                        <img className="w-100 item-img" src={displayimg} />

                    </div>
                </Modal.Body >

                <Modal.Footer className="property-footer">

                    <Button variant="primary" className=" read-btn fl-0">
                        Add item
                    </Button>
                </Modal.Footer>
            </Modal >
        </React.Fragment >
    )
}

export default Createcollection
