import React, { useEffect, useState } from 'react'
import { Container, Row, ListGroup, Modal } from "react-bootstrap";
import './CreateItem.scss'
// import Uploadcard from '../../components/Uploadcard/Uploadcard';
import displayimg from '../../assets/Images/mask.png'
import telegram from '../../assets/Images/telegram.svg'
import fb from '../../assets/Images/fb.svg'
import link from '../../assets/Images/link.svg'
import twitter from '../../assets/Images/twitter.svg'
import CreateItemForm from './CreateItemForm';
import { useDispatch, useSelector } from 'react-redux';
import { ApiActions } from '../../redux/actions/api.action';
import back from "../../assets/Images/arrow_back_black.svg";
import { Link } from 'react-router-dom';
import contractService from '../../services/contract.service';
import { ContractActions } from '../../redux/actions/contract.action';
import { reset } from 'redux-form';
import { withRouter } from 'react-router';

const CreateItem = ({ match: { params: { collectionId }, history } }) => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [collectionsList, setCollectionsList] = useState([]);
    const [itemIndex, setItemIndex] = useState(0);
    const [nft, setNft] = useState({ fileHash: "" });

    const handleClose = () => {
        setShow(false);
        reset("CreateItemForm");
        history.back();
    };
    const handleShow = () => setShow(true);
    const collections = useSelector(state => state.api.collections);

    const submitForm = async (data) => {
        const { callMintToken } = ContractActions;
        data.blockChain = data.blockchain.value;
        data.collectiondb = data.collection.value;
        data.supply = data.supply || 1;
        data.showPreview = handleShow;
        data.setNftDetails = setNft;
        delete data.collection;
        dispatch(callMintToken(data));
    }

    useEffect(() => {
        let arr = [];
        for (const collection of collections) {
            arr.push({ value: collection['_id'], label: collection['name'] });
        }
        if (collectionId) {
            const index = arr.findIndex(i => i.value === collectionId);
            if (index !== -1) setItemIndex(index);
        }
        setCollectionsList(arr);
    }, [collections, collectionId]);

    useEffect(() => {
        const { callGetCollection } = ApiActions;
        dispatch(callGetCollection({ page: 0, limit: 1000, filter: {} }));
    }, [dispatch]);

    return (
        <React.Fragment>
            <Container fluid >
                <Container className="ContMain custom_content">
                    <CreateItemForm itemIndex={itemIndex} collectionsList={collectionsList} onSubmit={submitForm} />
                </Container>
            </Container>
            <Modal show={show} onHide={handleClose} className="create-modal isBlank">
                <Modal.Header closeButton> <Modal.Title >You create My NFT!</Modal.Title> </Modal.Header>
                <Modal.Body>
                    <div className="item-body">
                        <img src={nft.fileHash} alt="nft" />
                    </div>
                </Modal.Body >

                <Modal.Footer className="social-footer">
                    <ListGroup horizontal className="cssBlank share-social">
                        <ListGroup.Item action href="#"><img src={twitter} /></ListGroup.Item>
                        <ListGroup.Item action href="#"><img src={fb} /></ListGroup.Item>
                        <ListGroup.Item action href="#"><img src={telegram} /></ListGroup.Item>
                        <ListGroup.Item action href="#"><img src={link} /></ListGroup.Item>
                    </ListGroup>
                </Modal.Footer>
            </Modal >

        </React.Fragment >

    )

}

export default withRouter(CreateItem);
