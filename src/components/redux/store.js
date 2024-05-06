import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsFilterReducer } from './contacts/slices/contactsFilterSlice';
import { contactsReducer } from './contacts/slices/contactsSlice';
import { authReducer } from './auth/authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactsReducer,
  contactsFilter: contactsFilterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
