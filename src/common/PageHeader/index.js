import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import { StyleSheet, css } from "aphrodite/no-important";

const syles = StyleSheet.create({
  pageHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: '115px',
  
    logo: {
      display: 'inline-block',
      width: '100px',
      height: '100px',
      background: '#000',
    },
  
    nav: {
      marginLeft: 'auto',
    },
  
    ul: {
      listStyleType: 'none',
      display: 'flex',
      alignItems: 'center',
  
      li: {
        'li + li': {
          marginLeft: '51px',
        },
  
        a: {
          color: '#707070',
          textDecoration: 'none',
          cursor: 'pointer',
  
          &.active {
            fontWeight: 'bold',
            color: '#000',
          },

          whiteSpace: 'nowrap',
        },
  
        notify: {
          fontSize: 'inherit',
          display: 'inline-block',
          border: 'none',
          background: '#5ac8fa',
          color: 'white',
          padding: '10px 25px',
          borderRadius: '25px',
        }
      }
    }
  }  
});

function PageHeader({ activePath }) {
  return (
    <div className={styles.header}>
      <Link to="" className={styles.logo} title="Apple logo"></Link>
      <nav>
        <ul>
          <li>
            <Link
              to={{
                pathname: "/iphone",
                state: {
                  referer: activePath,
                  animate: true,
                },
              }}
              className={cx({ [styles.active]: activePath === "/iphone" })}
            >
              iPhone
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: "/macbook-pro",
                state: {
                  referer: activePath,
                  animate: true,
                },
              }}
              className={cx({ [styles.active]: activePath === "/macbook-pro" })}
            >
              MacBook Pro
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: "/watch",
                state: {
                  referer: activePath,
                  animate: true,
                },
              }}
              className={cx({ [styles.active]: activePath === "/watch" })}
            >
              Watch
            </Link>
          </li>
          <li>
            <Link to="" className={styles.notify}>
              Notify me
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PageHeader;
