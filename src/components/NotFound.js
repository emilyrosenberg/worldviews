import React from "react";
import NoResults from "../assets/no-results.png";
import styles from "../styles/NotFound.module.css";
import Asset from "./Asset";

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <Asset
        src={NoResults}
        message={`We're sorry, we looked everywhere in the world but we can't find that page`}
      />
    </div>
  );
};

export default NotFound;