import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './usersThunk';

const initialState = {
  entities: [],
  loading: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.entities = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const usersReducer = usersSlice.reducer;
