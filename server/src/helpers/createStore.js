import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from '../features/users/usersSlice';

const createStore = () =>
  configureStore({
    reducer: {
      users: usersReducer,
    },
  });

export default createStore;
