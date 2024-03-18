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
        <div className="text-center m-3">
          <h1>About Worldviews</h1>
          <p>Worldviews is a home away from home for everyone who loves traveling the world. It's a place to share your unique views, within a kind and curious community.</p>
          <p>We started Worldviews in 2024 as a way to connect world travelers and share beautiful and inspiring posts and pictures. You can also view the most popular trailblazers, and check out the plans page to see where folks are headed next.</p>
          <h3>There's a lot more on the horizon!</h3>
          <p>Keep visiting for even more ways to connect with other travelers, like viewing the most popular locations, viewing posts by location, and even planning a meetup with your new friends.</p>
          <h3>What do you want to see?</h3>
          <p>We're always open to your suggestions! Let us know what we can do to make Worldviews even better. (Contact/support page coming soon!)</p>
        </div>  
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}


export default AboutPage;
