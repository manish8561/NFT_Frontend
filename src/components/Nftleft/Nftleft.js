import React from "react";
import profile from "../../assets/Images/my_collections1.png";
import like from "../../assets/Images/heart.svg";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import description from "../../assets/Images/description.svg";
import StatsIcon from '../../assets/Images/bar_chart_black.svg'
import Listingicon from '../../assets/Images/listing.svg'
import abouticon from "../../assets/Images/about.svg";
import "./Nftleft.scss";

function Nftleft(props) {
  let nft = null
  if(props  && props.nft) nft = props.nft
  return (
    <React.Fragment>
      <div className="nft-profile">
        <img src={profile} className="profile" />
        <div className="like">
          <img src={like} /> 1
        </div>
      </div>
      <Accordion defaultActiveKey="0" className="profile-desc">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <img src={description} /> Description
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
             {nft !== null ? nft.description : null}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="onlyFor_buy">
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              <img src={Listingicon} /> Properties
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>ABCD</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="onlyFor_buy">
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
              <img src={StatsIcon} /> Stats
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>XYZ</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              <img src={abouticon} /> About {nft !== null ? nft.name : 'unnamed'}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>About </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              <img src={description} /> Details
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <p>creator: {nft !== null ? <a style={{color : '#0c9eda', float: 'right'}} href={nft.creator.walletAddress}>{nft.creator.walletAddress.substring(0,7)}...{nft.creator.walletAddress.substr(-5)}</a> : null}</p>
              <p>Contract Address :  {nft !== null ? <a style={{color : '#0c9eda', float: 'right'}} href={nft.nftAddress}>{nft.nftAddress.substring(0,7)}...{nft.nftAddress.substr(-5)}</a> : null}</p>
              <br/>
              <p>Token Id : {nft !== null ? <p style={{color : '#0c9eda', float: 'right'}}>{nft.tokenId}</p> : null}</p>
              <p>Network Id: {nft !== null ? <p style={{color : '#0c9eda', float: 'right'}}>{nft.networkId}</p> : null}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </React.Fragment>
  );
}

export default Nftleft;
