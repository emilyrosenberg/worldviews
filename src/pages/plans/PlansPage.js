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
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";

function PlansPage( { message, filter = "" }) {
  const [plans, setPlans] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const { data } = await axiosReq.get(`/plans/?${filter}search=${query}`);
        setPlans(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPlans();
    }, 1000)
    return () => {
      clearTimeout(timer)
    }

    
  }, [filter, query, pathname]);
   
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles mobile</p>

        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search plans"
          />
        </Form>

        {hasLoaded ? (
          <>
            {plans.results.length ? (
              <InfiniteScroll
                children={
                  plans.results.map((plan) => (
                    <Plan key={plan.id} {...plan} setPlans={setPlans} />
                  ))
                }
                dataLength={plans.results.length}
                loader={<Asset spinner />}
                hasMore={!!postMessage.next}
                next={() => fetchMoreData(plans, setPlans)}
                />
              
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
