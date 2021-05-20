import React from "react";
import { Row, Col } from "react-bootstrap";
import TopList from './TopList'
import hotsale1 from "../../../../Assets/Images/hotsale1.png";
import hotsale2 from "../../../../Assets/Images/hotsale2.png";
import hotsale3 from "../../../../Assets/Images/hotsale3.png";
import hotsale4 from "../../../../Assets/Images/hotsale4.png";
import rated1 from "../../../../Assets/Images/rated1.png";
import rated2 from "../../../../Assets/Images/rated2.png";
import rated3 from "../../../../Assets/Images/rated3.png";
import rated4 from "../../../../Assets/Images/rated4.png";
import popular1 from "../../../../Assets/Images/popular1.png";
import popular2 from "../../../../Assets/Images/popular2.png";
import popular3 from "../../../../Assets/Images/popular3.png";
import popular4 from "../../../../Assets/Images/popular4.png";


function CatalogThree() {
    return (
      <>
        <Row className="catalog_three">
          <Col>
            <h2>Hot Sale</h2>
            <TopList avtar={hotsale1} title="William Leo" subtitle="Lesuada laoreet umrna sed" price="155.59" />
            <TopList avtar={hotsale2} title="William Leo" subtitle="Lesuada laoreet umrna sed" price="155.59" />
            <TopList avtar={hotsale3} title="William Leo" subtitle="Lesuada laoreet umrna sed" price="155.59" />
            <TopList avtar={hotsale4} title="William Leo" subtitle="Lesuada laoreet umrna sed" price="155.59" />
            <div className="view_all">
              <a href="#">View all</a>
            </div>
          </Col>
          <Col>
            <h2>Top Rated</h2>
            <TopList avtar={rated1} title="William Leo" subtitle="Lesuada laoreet umrna sed" price="155.59" />
            <TopList avtar={rated2} title="William Leo" subtitle="Lesuada laoreet umrna sed" price="155.59" />
            <TopList avtar={rated3} title="William Leo" subtitle="Lesuada laoreet umrna sed" price="155.59" />
            <TopList avtar={rated4} title="William Leo" subtitle="Lesuada laoreet umrna sed" price="155.59" />
            <div className="view_all">
              <a href="#">View all</a>
            </div>
          </Col>
          <Col>
            <h2>Popular</h2>
            <TopList avtar={popular1} title="William Leo" subtitle="Lesuada laoreet umrna sed" price="155.59" />
            <TopList avtar={popular2} title="William Leo" subtitle="Lesuada laoreet umrna sed" price="155.59" />
            <TopList avtar={popular3} title="William Leo" subtitle="Lesuada laoreet umrna sed" price="155.59" />
            <TopList avtar={popular4} title="William Leo" subtitle="Lesuada laoreet umrna sed" price="155.59" />
            <div className="view_all">
              <a href="#">View all</a>
            </div>
          </Col>
        </Row>
      </>
    );
}

export default CatalogThree;


