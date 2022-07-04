import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUser } from './authThunk';

const initialState = {
  currentUser: null,
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.pending, (state, action) => {
        state.isAuth = false;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.isAuth = true;
        state.currentUser = action.payload;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.isAuth = false;
        state.error = action.error;
      });
  },
});

export const authReducer = authSlice.reducer;
