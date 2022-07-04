import React from 'react';
import Home from './pages/HomePage';
import Users, { loadData } from './pages/UsersPage';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/users',
    element: <Users />,
    loadData,
  },
];

export default routes;
