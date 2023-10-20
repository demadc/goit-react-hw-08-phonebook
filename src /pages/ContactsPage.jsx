import { ContactsList } from 'components/ContactList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/Form/Form';

const ContactsPage = () => {
  return (
    <div style={{ width: 500, marginLeft: 400, marginRight: 400 }}>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default ContactsPage;
