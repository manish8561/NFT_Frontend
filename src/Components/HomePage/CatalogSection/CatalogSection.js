import React, { Component } from "react";
import { Container } from "react-bootstrap";
import CatalogTwo from "./CatalogTwo/CatalogTwo";
import CatalogOne from "./CatalogOne/CatalogOne";
import CatalogThree from "./CatalogThree/CatalogThree";
export class CatalogSection extends Component {
  render() {
    return (
      <>
        <Container fluid className="catalog_sec">
          <Container className="ContMain">
            <CatalogOne />
            <CatalogTwo />
            <CatalogThree />
          </Container>
        </Container>
      </>
    );
  }
}

export default CatalogSection;
