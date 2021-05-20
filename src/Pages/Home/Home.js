import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Home.scss";

function Home() {
  return (
    <div>
      <Container fluid className="top_list">
        <Container>
          <ul>
            <li>
              <a href="#">New</a>
            </li>
            <li>
              <a href="#">Art</a>
            </li>
            <li>
              <a href="#">Domain Names</a>
            </li>
            <li>
              <a href="#">Virtual Worlds</a>
            </li>
            <li>
              <a href="#">Trading Cards</a>
            </li>
            <li>
              <a href="#">Collectibles</a>
            </li>
            <li>
              <a href="#">Sports</a>
            </li>
            <li>
              <a href="#">Utility</a>
            </li>
          </ul>
        </Container>
      </Container>


    </div>
  );
}

export default Home;
