import React,{useEffect, useState} from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Collection from "../../components/Collection/Collection";
import Nftleft from "../../components/Nftleft/Nftleft";
import Nftright from "../../components/Nftright/Nftright";
import Tradinghistory from "../../components/Tradinghistory/Tradinghistory";
import { ApiService } from "../../services/api.service";
import web3Service from "../../services/web3.service";

import "../Creatednft/Creatednft.scss";

function ViewDetails() {
  const dispatch = useDispatch();
  const [nft, setNft] = useState(null);
  const address = useSelector(state => state.persist.address);


  useEffect(() => {
    init();
  }, []); 
  const init = async ()=>{
  const resp = await ApiService.getNft('61569b89e85b7eae3e992d65');
  if (resp) {
    const { data } = resp;
    if (data && data.status == "200" && data.data.data) {
      setNft(data.data.data)
      }
    }
  }
  return (
    <>
      <Container fluid className="viewDetail_Cont">
        <Container className="create-nft-col ">
          <Row>
            <Col md={5}>
              <Nftleft nft={nft} />
            </Col>
            <Col md={7}>
              <Nftright nft={nft} address={address}/>
            </Col>
            <Col md={12}>
              <Tradinghistory />
            </Col>
            <Col md={12}>
              <Collection />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={12} className="text-center">
              <button className="light_btn viewMore_Btn">View More Collection</button>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default ViewDetails;
