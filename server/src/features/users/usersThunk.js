import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    let response = await axios.get(`${process.env.REACT_SSR_API_URL}/users`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
});
