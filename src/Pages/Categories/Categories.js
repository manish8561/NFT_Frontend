import React from "react";
import { Container } from "react-bootstrap";
import TopLinks from "../../Components/TopLinks/TopLinks";
import CategorieRight from "./CategorieRight";
import CategorieSidebar from "./CategorieSidebar";
import "./Categories.scss";
import "../Home/Home.scss";

function Categories() {
  return (
    <>
      <TopLinks />
      <Container fluid className="categorie_sec">
        <div className="categorie_row">
          <CategorieSidebar />
          <CategorieRight />
        </div>
      </Container>
    </>
  );
}

export default Categories;
