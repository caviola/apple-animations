import React from "react";
import { withRouter } from "react-router-dom";
import PageHeader from "../PageHeader";
import styles from "./styles.module.scss";

const ProductPage = withRouter(({ match, children }) => {
  return (
    <div className={styles.page}>
      <PageHeader activePath={match.path} />
      {children}
    </div>
  );
});

export default ProductPage;
