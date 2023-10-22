import axios from 'axios';

export const getAllContacts = () => axios.get('/contacts');

export const deleteContact = id => {
  return axios.delete(`/contacts/${id}`);
};

export const addContact = data => {
  return axios.post('/contacts', data);
};

export const editContact = data => {
  return axios.put(`/contacts/${data.id}`, {
    name: data.name,
    number: data.phone,
  });
};
