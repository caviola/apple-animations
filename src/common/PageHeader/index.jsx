import React from "react";
import { Link } from "react-router-dom";

function PageHeader({ activePath }) {
  return (
    <div className="flex items-center pr-28">
      <Link to="" className="inline-block h-24 w-24 bg-black" title="Apple logo"></Link>
      <nav className="ml-auto">
        <ul className="flex items-center">
          <li>
            <Link
              to="/iphone"
              state={{
                referer: activePath,
                animate: true
              }}
              className={activePath === "/iphone" ? "cursor-pointer whitespace-nowrap font-bold text-black" : "cursor-pointer whitespace-nowrap text-gray-500"}
            >
              iPhone
            </Link>
          </li>
          <li className="ml-12">
            <Link
              to="/macbook-pro"
              state={{
                referer: activePath,
                animate: true
              }}
              className={activePath === "/macbook-pro" ? "cursor-pointer whitespace-nowrap font-bold text-black" : "cursor-pointer whitespace-nowrap text-gray-500"}
            >
              MacBook Pro
            </Link>
          </li>
          <li className="ml-12">
            <Link
              to="/watch"
              state={{
                referer: activePath,
                animate: true
              }}
              className={activePath === "/watch" ? "cursor-pointer whitespace-nowrap font-bold text-black" : "cursor-pointer whitespace-nowrap text-gray-500"}
            >
              Watch
            </Link>
          </li>
          <li className="ml-12">
            <a href="#" className="inline-block rounded-full border-none bg-sky-400 px-6 py-2 text-inherit">
              Notify me
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PageHeader;
