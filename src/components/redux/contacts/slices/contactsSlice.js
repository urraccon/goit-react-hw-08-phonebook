import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from '../operations';

const initialState = {
  items: [],
  status: 'inactive',
  error: null,
  operation: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setRejectedStatus(state, action) {
      state.status = 'failed';
      state.error = action.payload.error;
      state.operation = action.payload.operation;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.status = 'loading';
        state.error = null;
        state.operation = 'loadData';
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.status = 'loading';
        state.error = null;
        state.operation = 'addContact';
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, state => {
        state.status = 'loading';
        state.error = null;
        state.operation = 'deleteContact';
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const contactIndex = state.items.findIndex(
          item => item.id === action.payload.id
        );
        if (contactIndex > -1) {
          state.items.splice(contactIndex, 1);
        }
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setRejectedStatus } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
