import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchCurrentUser } from '../features/auth/authThunk';
import Header from './components/Header';

const App = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <>
      <Header auth={auth} />
      <Outlet />
    </>
  );
};

export const loadData = (store) => store.dispatch(fetchCurrentUser());

export default App;
