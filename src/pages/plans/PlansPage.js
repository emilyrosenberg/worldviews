import React, { useEffect, useState } from "react";

import Asset from "../../components/Asset";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Plan from "./Plan";

import appStyles from "../../App.module.css";
import styles from "../../styles/PlansPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png"

function PlansPage( { message, filter = "" }) {
  const [plans, setPlans] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState();
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const { data } = await axiosReq.get(`/plans/?${filter}`);
        setPlans(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded();
    fetchPlans();
  }, [filter, pathname]);
   
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles mobile</p>
        {hasLoaded ? (
          <>
            {plans.results.length ? (
              plans.results.map((plan) => (
                <Plan key={plan.id} {...plan} setPlans={setPlans} />
              ))
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <p>Popular profiles for desktop</p>
      </Col>
    </Row>
  );
}


export default PlansPage;