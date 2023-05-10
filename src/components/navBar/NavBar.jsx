import React from 'react'
import { Link } from 'react-router-dom';

const routes = [
  { name: 'Home', url: '/' },
  { name: 'Social Networks', url: '/social-networks' },
  { name: 'counter +5', url: '/counter/1' },
  { name: 'counter +10', url: '/counter/2' }
];

export const NavBar = () => {
  return (
    <>
      <ul>
        {routes.map((data) =>
          <li key={data.url}>
            <Link to= {data.url}>{data.name}</Link>
          </li>
        )}
      </ul>
    </>
  );
};
