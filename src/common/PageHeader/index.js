import React from "react";
import { Link } from "react-router-dom";
import { StyleSheet, css } from "aphrodite/no-important";

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    paddingRight: "115px",
  },

  logo: {
    display: "inline-block",
    width: "100px",
    height: "100px",
    background: "#000",
  },

  nav: {
    marginLeft: "auto",
  },

  navItems: {
    listStyleType: "none",
    display: "flex",
    alignItems: "center",
  },

  navItem: {
    ":not(:first-child)": {
      marginLeft: "51px",
    },
  },

  link: {
    color: "#707070",
    textDecoration: "none",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },

  activeLink: {
    fontWeight: "bold",
    color: "#000",
  },

  notifyLink: {
    fontSize: "inherit",
    display: "inline-block",
    border: "none",
    background: "#5ac8fa",
    color: "white",
    padding: "10px 25px",
    borderRadius: "25px",
  },
});

function PageHeader({ activePath }) {
  return (
    <div className={css(styles.header)}>
      <Link to="" className={css(styles.logo)} title="Apple logo"></Link>
      <nav className={css(styles.nav)}>
        <ul className={css(styles.navItems)}>
          <li className={css(styles.navItem)}>
            <Link
              to={{
                pathname: "/iphone",
                state: {
                  referer: activePath,
                  animate: true,
                },
              }}
              className={css(
                styles.link,
                activePath === "/iphone" && styles.activeLink
              )}
            >
              iPhone
            </Link>
          </li>
          <li className={css(styles.navItem)}>
            <Link
              to={{
                pathname: "/macbook-pro",
                state: {
                  referer: activePath,
                  animate: true,
                },
              }}
              className={css(
                styles.link,
                activePath === "/macbook-pro" && styles.activeLink
              )}
            >
              MacBook Pro
            </Link>
          </li>
          <li className={css(styles.navItem)}>
            <Link
              to={{
                pathname: "/watch",
                state: {
                  referer: activePath,
                  animate: true,
                },
              }}
              className={css(
                styles.link,
                activePath === "/watch" && styles.activeLink
              )}
            >
              Watch
            </Link>
          </li>
          <li className={css(styles.navItem)}>
            <Link to="" className={css(styles.link, styles.notifyLink)}>
              Notify me
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PageHeader;
