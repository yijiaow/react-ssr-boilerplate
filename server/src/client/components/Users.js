import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../features/users/usersThunk';

const Users = () => {
  const dispatch = useDispatch();
  const { entities, loading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Users Component</h1>
      <ul>
        {entities.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
