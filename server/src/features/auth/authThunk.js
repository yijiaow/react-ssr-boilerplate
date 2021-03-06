import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_arg, { extra: api }) => {
    try {
      let response = await api.get('/current_user');
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
