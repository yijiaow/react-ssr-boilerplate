import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(`${process.env.REACT_SSR_API_URL}/users`);

  return response.data;
});
