import React from "react";
import { withRouter } from "react-router-dom";
import PageHeader from "../PageHeader";
import { StyleSheet, css } from "aphrodite/no-important";

const styles = StyleSheet.create({
  productPage: {
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    minHeight: "100vh",
    background: "#fff",
  },

  detailsContainer: {
    paddingLeft: "100px",
  },

  details: {
    display: "flex",
  },

  text: {
    width: "55%",
    padding: "84px 90px",
  },

  imageContainer: {
    width: "45%",
    position: "relative",
  },

  image: {
    position: "absolute",
  },

  name: {
    fontSize: "32px",
    lineHeight: "48px",
    fontWeight: "bold",
    marginBottom: "17px",
  },

  title: {
    fontSize: "100px",
    lineHeight: "110px",
    fontWeight: "bold",
    marginBottom: "70px",
  },

  description: {
    fontSize: "25px",
    lineHeight: "35px",
  },

  extra: {
    padding: "84px 90px",
  },

  price: {
    fontSize: "50px",
    color: "#cccccc",
    fontWeight: "bold",
  },

  priceLink: {
    fontSize: "20px",
    fontWeight: "600",
    display: "block",
    marginTop: "10px",
    textDecoration: "none",
  },
});

const ProductPage = withRouter(function ({ match, children }) {
  return (
    <div className={css(styles.productPage)}>
      <PageHeader activePath={match.path} />
      {children}
    </div>
  );
});

export { ProductPage, styles };
