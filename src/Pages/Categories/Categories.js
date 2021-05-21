import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import TopLinks from "../../Components/TopLinks/TopLinks";
import Sidebar from "../../Components/Sidebar/Sidebar";
import CategorieRight from "./CategorieRight";
import "./Categories.scss";
import "../Home/Home.scss";

function Categories() {
  return (
    <>
      <TopLinks />
      <Container fluid className="categorie_sec">
        <div className="categorie_row">
          <Sidebar />
          <CategorieRight />
        </div>
      </Container>
    </>
  );
}

export default Categories;
