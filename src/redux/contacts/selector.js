import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter/selector';

// export const contactsData = state => state.contacts.items;

export const contactsData = ({ contacts }) =>
  [...contacts.items].sort((a, b) => a.name.localeCompare(b.name));

export const selectIsLoading = ({ contacts }) => contacts.isLoading;
export const selectError = ({ contacts }) => contacts.error;

export const selectFilteredContacts = createSelector(
  [contactsData, selectFilter],
  (items, filter) => {
    return items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
