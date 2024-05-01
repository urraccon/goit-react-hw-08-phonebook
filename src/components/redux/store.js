import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsFilterReducer } from './contactsFilterSlice';
import { contactsReducer } from './contactsSlice';
import { errorReducer } from './errorSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  contactsFilter: contactsFilterReducer,
  error: errorReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
