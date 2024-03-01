import React, { useState } from "react";
import Media from "react-bootstrap/Media";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import PlanCommentEditForm from "./PlanCommentEditForm";

import styles from "../../styles/Comment.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";

const PlanComment = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    content,
    id,
    setPlan,
    setPlanComments,
  } = props;

  const [showPlanEditForm, setShowPlanEditForm] = useState(false);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/plan_comments/${id}/`);
      setPlan((prevPlan) => ({
        results: [
          {
            ...prevPlan.results[0],
            plan_comments_count: prevPlan.results[0].plan_comments_count - 1,
          },
        ],
      }));

      setPlanComments((prevPlanComments) => ({
        ...prevPlanComments,
        results: prevPlanComments.results.filter((plan_comment) => plan_comment.id !== id),
      }));
    } catch (err) {}
  };

  return (
    <>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          {showPlanEditForm ? (
            <PlanCommentEditForm
              id={id}
              profile_id={profile_id}
              content={content}
              profileImage={profile_image}
              setPlanComments={setPlanComments}
              setShowPlanEditForm={setShowPlanEditForm}
            />
          ) : (
            <p>{content}</p>
          )}
        </Media.Body>
        {is_owner && !showPlanEditForm && (
          <MoreDropdown
            handleEdit={() => setShowPlanEditForm(true)}
            handleDelete={handleDelete}
          />
        )}
      </Media>
    </>
  );
};

export default PlanComment;