import { createSelector } from '@reduxjs/toolkit';
import AlertMessages from 'components/common/services/AlertMessages';

export const selectTerm = state => state.contactsFilter;
export const selectContacts = state => state.contacts.items;
export const selectStatus = state => state.contacts.status;
export const selectError = state => state.contacts.error;
export const selectOperation = state => state.contacts.operation;

export const filteredContacts = createSelector(
  [selectTerm, selectContacts],
  (term, contacts) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(term.toLowerCase())
    )
);

export const alertMessage = createSelector(
  [selectStatus, selectOperation, selectError],
  (status, operation, error) => {
    switch (operation) {
      case 'loadData':
        return AlertMessages.loadData(status);
      case 'addContact':
        return AlertMessages.addContact(status);
      case 'deleteContact':
        return AlertMessages.deleteContact(status);
      case 'duplicateContact':
        return error;
      default:
        return null;
    }
  }
);
