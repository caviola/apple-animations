import React from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../PageHeader";
import styles from "./styles.module.scss";

const ProductPage = ({ children }) => {
  const location = useLocation();

  return (
    <div className={styles.page}>
      <PageHeader activePath={location.pathname} />
      {children}
    </div>
  );
};

export default ProductPage;
