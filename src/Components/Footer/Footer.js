import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FooterLogo from "../../Assets/Images/footer_logo.png";
import Call from "../../Assets/Images/call.png";
import Location from "../../Assets/Images/location.png";
import Mail from "../../Assets/Images/mail.png";
import Facebook from "../../Assets/Images/facebook.png";
import Twitter from "../../Assets/Images/twitter.png";
import Instagram from "../../Assets/Images/instagram.png";
import Bitcoin from "../../Assets/Images/bitcoin.png";
import Pinterest from "../../Assets/Images/pinterest.png";
import Telegram from "../../Assets/Images/telegram.png";
import Linkedin from "../../Assets/Images/linkedin.png";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <Container fluid>
        <Container className="ContMain">
          <Row className="footer_row">
            <Col xs={12} md={6} lg={5} className="logo_col">
              <img src={FooterLogo} alt="footer logo" className="footer_logo" />
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et
              </p>
              <ul>
                <li>
                  <img src={Call} />
                  +91 98550 78699, +91 172 4008460
                </li>
                <li>
                  <img src={Mail} />
                  info@antiersolutions.com
                </li>
                <li>
                  <img src={Location} />
                  E-221, Phase 8B Industrial Area, Mohali, <br />
                  <span>Punjab INDIA, 160059</span>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={2} className="account_col">
              <h3>My Account</h3>
              <ul>
                <li>
                  <a href="#">My Items</a>
                </li>
                <li>
                  <a href="#">My Activity</a>
                </li>
                <li>
                  <a href="#">My Offers</a>
                </li>
                <li>
                  <a href="#">My Referrals</a>
                </li>
                <li>
                  <a href="#">Gift Items</a>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={6}  lg={3} className="marketplace_col">
              <h3>MarketPlace</h3>
              <ul>
                <li>
                  <a href="#">Browse and Discover</a>
                </li>
                <li>
                  <a href="#">Rankings</a>
                </li>
                <li>
                  <a href="#">Recently Sold</a>
                </li>
                <li>
                  <a href="#">Biggest Sales</a>
                </li>
                <li>
                  <a href="#">Ending Soon</a>
                </li>
                <li>
                  <a href="#">Most Viewed</a>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={2} className="company_col">
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Suggestions</a>
                </li>
                <li>
                  <a href="#">Advertise</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </Col>
            <Col sm={12} className="copyright_col">
              <p>
                © Copyright 2021 Antier Solutions Pvt. Ltd. | All Rights
                Reserved.
              </p>
              <ul>
                <li>
                  <a href="#">
                    <img src={Facebook} alt="facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Twitter} alt="twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Linkedin} alt="linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Instagram} alt="instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Bitcoin} alt="bitcoin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Telegram} alt="telegram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Pinterest} alt="pinterest" />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Footer;
