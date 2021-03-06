import React, { useEffect } from "react";
import "./Home.scss";
import { Container, Row, Col, Carousel, Toast} from "react-bootstrap";
import BannerImg from "../../assets/Images/banner_img.png";
import CatalogSection from '../../components/HomePage/CatalogSection/CatalogSection'
import TopLinks from "../../components/TopLinks/TopLinks";
import { Link, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";


const Home = (props) => {

  const persistData = useSelector((state) => state.persist);

  const onCreate = () => {
    const { history } = props;
    if(persistData && persistData.isLoggedIn) {
      history.push('/marketplace/create')
    } else {
      history.push('/login');
    }
  }

  return (
    <div>
      <TopLinks />
      <Container fluid className="top_banner">
        <Container className="ContMain">
          <Carousel>
            <Carousel.Item>
              <Row className="banner_row">
                <Col className="banner_left">
                  <img src={BannerImg} />
                </Col>
                <Col className="banner_right">
                  <div className="banner_content">
                    <h1>The largest NFT marketplace</h1>
                    <p>Buy, sell, and discover rare digital items</p>
                    <div className="banner_btn">
                      <a className="dark_btn">Explore</a>
                      <Link to="#" onClick={()=>onCreate()} className="light_btn">Create</Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="banner_row">
                <Col className="banner_left">
                  <img src={BannerImg} />
                </Col>
                <Col className="banner_right">
                  <div className="banner_content">
                    <h1>The largest NFT marketplace</h1>
                    <p>Buy, sell, and discover rare digital items</p>
                    <div className="banner_btn">
                      {/* <button className="dark_btn">Explore</button>
                      <button className="light_btn">Create</button> */}
                      <a className="dark_btn">Explore</a>
                      <Link to="#" onClick={()=>onCreate()} className="light_btn">Create</Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>
      </Container>
      <CatalogSection />
    </div>
  );
}

export default withRouter(Home);
