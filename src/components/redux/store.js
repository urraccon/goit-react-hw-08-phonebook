import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsFilterReducer } from './contacts/slices/contactsFilterSlice';
import { contactsReducer } from './contacts/slices/contactsSlice';
import { authReducer } from './auth/authSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage,
};

const persistedAuth = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedAuth,
  contacts: contactsReducer,
  contactsFilter: contactsFilterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
