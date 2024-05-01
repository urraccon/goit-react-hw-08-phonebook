import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setErrAddContact(state, action) {
      return action.payload;
    },
  },
});

export const { setErrAddContact } = errorSlice.actions;
export const errorReducer = errorSlice.reducer;
