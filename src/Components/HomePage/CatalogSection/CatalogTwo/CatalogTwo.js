import React from "react";
import { Row, Col} from "react-bootstrap";
import Img_1 from "../../../../Assets/Images/img_1.png";
import Img_2 from "../../../../Assets/Images/img_2.png";
import Img_3 from "../../../../Assets/Images/img_3.png";
import PaintTextures from "../../../../Assets/Images/paint-textures.png";
import ListTwo from "./ListTwo";

function CatalogTwo() {
  return (
    <>
      <Row className="catalog_two">
        <Col xs={12} className="top_col">
          <h2>ART</h2>
          <ul>
            <li>
              <a href="#" className="active">
                All
              </a>
            </li>
            <li>
              <a href="#">New</a>
            </li>
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              <a href="#">Art</a>
            </li>
          </ul>
        </Col>
        <ListTwo
          imgsrc={Img_1}
          name="William Leo"
          stitle="Art World"
          desc="Quisque rhoncus orci vitae nisl retrum reuturm lesuada laoreet umrna sed"
          price="$ 155.99"
        />
        <ListTwo
          imgsrc={Img_2}
          name="Jacks Oscar"
          stitle="World Game"
          desc="Quisque rhoncus orci vitae nisl retrum reuturm lesuada laoreet umrna sed"
          price="$ 69.59"
        />
        <ListTwo
          imgsrc={PaintTextures}
          name="William Leo"
          stitle="Art World"
          desc="Quisque rhoncus orci vitae nisl retrum reuturm lesuada laoreet umrna sed"
          price="$ 155.99"
        />
        <ListTwo
          imgsrc={Img_3}
          name="Jacks Oscar"
          stitle="Art World"
          desc="Quisque rhoncus orci vitae nisl retrum reuturm lesuada laoreet umrna sed"
          price="$ 69.59"
        />
      </Row>
    </>
  );
}

export default CatalogTwo;
