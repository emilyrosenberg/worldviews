// Inspired by https://github.com/SandraBergstrom/travel-tickr/blob/main/src/pages/AboutPage.js

import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import PopularProfiles from "../profiles/PopularProfiles";

const AboutPage = () => {
  return (
    <Row className="h-100 mt-5">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <p>All about Worldviews. Share your world!</p>
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}


export default AboutPage;
