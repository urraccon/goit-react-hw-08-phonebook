import { createSelector } from '@reduxjs/toolkit';
import AlertMessages from 'components/common/services/AlertMessages';

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUsername = state => state.auth.user.name;
export const selectUserEmail = state => state.auth.user.email;
export const selectUserToken = state => state.auth.user.accessToken;
export const selectStatus = state => state.auth.status;
export const selectError = state => state.auth.error;
export const selectOperation = state => state.auth.operation;

export const alertMessage = createSelector(
  [selectStatus, selectOperation],
  (status, operation) => {
    switch (operation) {
      case 'login':
        return AlertMessages.login(status);
      case 'signup':
        return AlertMessages.signup(status);
      case 'logout':
        return AlertMessages.logout(status);
      default:
        return null;
    }
  }
);
