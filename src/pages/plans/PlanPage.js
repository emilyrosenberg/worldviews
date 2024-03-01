import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Plan from "./Plan";
import PlanComment from "../comments/PlanComment";

import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import PlanCommentCreateForm from "../comments/PlanCommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";

function PlanPage() {
  const { id } = useParams();
  const [plan, setPlan] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [plan_comments, setPlanComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: plan }, { data: plan_comments}] = await Promise.all([
          axiosReq.get(`/plans/${id}`),
          axiosReq.get(`/plan_comments/?plan=${id}`)
        ]);
        setPlan({ results: [plan] });
        setPlanComments(plan_comments);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Plan {...plan.results[0]} setPlans={setPlan} planPage />
        <Container className={appStyles.Content}>
          {currentUser ? (
            <PlanCommentCreateForm
              profile_id={currentUser.profile_id}
              profileImage={profile_image}
              plan={id}
              setPlan={setPlan}
              setPlanComments={setPlanComments}
            />
          ) : plan_comments.results.length ? (
            "Comments"
          ) : null}
          {plan_comments.results.length ? (
            <InfiniteScroll
              children={plan_comments.results.map((plan_comment) => (
                <PlanComment
                  key={plan_comment.id}
                  {...plan_comment}
                  setPlan={setPlan}
                  setPlanComments={setPlanComments}
                />
              ))}
              dataLength={plan_comments.results.length}
              loader={<Asset spinner />}
              hasMore={!!plan_comments.next}
              next={() => fetchMoreData(plan_comments, setPlanComments)}
            />
          ) : currentUser ? (
            <span>No comments yet, be the first to comment!</span>
          ) : (
            <span>No comments... yet</span>
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default PlanPage;
