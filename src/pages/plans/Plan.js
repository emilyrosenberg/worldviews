import React from "react";
import styles from "../../styles/Plan.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosRes } from "../../api/axiosDefaults";

const Plan = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    location,
    title,
    content,
    updated_at,
    plan_comments_count,
    planPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/plans/${id}/edit`)
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/plans/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Plan}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && planPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/plans/${id}`}>
        <Card.Body>
          {location && <Card.Text className="text-center">{location}</Card.Text>}
          {title && <Card.Title className="text-center">{title}</Card.Title>}
          {content && <Card.Text>{content}</Card.Text>}
          <div className="styles.PlanBar">
              <i className="far fa-comments" />
            {plan_comments_count}
          </div>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default Plan;