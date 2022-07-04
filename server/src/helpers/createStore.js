import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from '../features/users/usersSlice';
import { authReducer } from '../features/auth/authSlice';

const createStore = (initialState, extraArgument) =>
  configureStore({
    reducer: {
      users: usersReducer,
      auth: authReducer,
    },
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: { extraArgument } }),
  });

export default createStore;
