import { createSelector } from '@reduxjs/toolkit';
import AlertMessages from 'components/common/services/AlertMessages';

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.userName;
export const selectUserEmail = state => state.auth.userEmail;
export const selectUserToken = state => state.auth.userToken;
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
