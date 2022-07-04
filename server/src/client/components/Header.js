import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ auth }) =>
  console.log('currentUser', auth.currentUser) || (
    <div>
      <Link to="/">React SSR</Link>
      <ul>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/admins">Admins</Link>
        </li>
        <li>
          {auth.isAuth ? (
            <a href="/api/logout">Logout</a>
          ) : (
            <a href="/api/auth/google">Login</a>
          )}
        </li>
      </ul>
    </div>
  );

export default Header;
