import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../features/users/usersThunk';
import UsersList from '../components/UsersList';

const Users = () => {
  const dispatch = useDispatch();
  const { entities, loading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Users Page</h1>
      <UsersList users={entities} />
    </div>
  );
};

export const loadData = (store) => store.dispatch(fetchUsers());

export default Users;
