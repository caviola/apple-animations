import React from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'iPhone', path: '/iphone' },
  { name: 'MacBook Pro', path: '/macbook-pro' },
  { name: 'Watch', path: '/watch' },
];

function PageHeader({ activePath }) {
  return (
    <div className="flex items-center pr-28">
      <a href="#" className="inline-block h-24 w-24 bg-black" title="Apple logo"></a>
      <nav className="ml-auto">
        <ul className="flex items-center">
          {navItems.map(({ name, path }) => (
            <li key={path} className="ml-12">
              <Link
                to={path}
                state={{
                  referer: activePath,
                  animate: true,
                }}
                className={
                  activePath === path
                    ? 'cursor-pointer whitespace-nowrap font-bold text-black'
                    : 'cursor-pointer whitespace-nowrap text-gray-500'
                }
              >
                {name}
              </Link>
            </li>
          ))}
          <li key="notify" className="ml-12">
            <a
              href="#"
              className="inline-block rounded-full border-none bg-sky-400 px-6 py-2 text-inherit"
            >
              Notify me
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PageHeader;
