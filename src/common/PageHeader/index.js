import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import "./styles.scss";

const PageHeader = ({ activePath }) => {
  return (
    <div className="page-header">
      <Link to="" className="logo" title="Apple logo"></Link>
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
              className={cx({ active: activePath === "/iphone" })}
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
              className={cx({ active: activePath === "/macbook-pro" })}
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
              className={cx({ active: activePath === "/watch" })}
            >
              Watch
            </Link>
          </li>
          <li>
            <Link to="" className="notify">
              Notify me
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PageHeader;
