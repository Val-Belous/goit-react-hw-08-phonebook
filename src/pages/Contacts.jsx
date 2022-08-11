import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import Form from 'components/Form/Form';

export const Contacts = () => {
  return (
    <>
      <div>
        <h2>Add new contact</h2>
        <Form></Form>
        <Filter></Filter>
        <h3>Contacts</h3>
        <ContactList></ContactList>
      </div>
    </>
  );
};
