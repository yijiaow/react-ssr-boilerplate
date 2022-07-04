import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from '../features/users/usersSlice';

const createStore = (initialState) =>
  configureStore({
    reducer: {
      users: usersReducer,
    },
    initialState,
  });

export default createStore;
