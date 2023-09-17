import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6506b0553a38daf4803e9a7e.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return rejectWithValue(
        'Oops... Something went wrong =(. Please, reload page and try again'
      );
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/contacts/`, user);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        'Oops... Something went wrong =(. Please, reload page and try again'
      );
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${userId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        'Oops... Something went wrong =(. Please, reload page and try again'
      );
    }
  }
);
