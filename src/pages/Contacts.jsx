import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import Form from 'components/Form/Form';
import styles from '../pages/Pages.module.css';

export const Contacts = () => {
  return (
    <>
      <div className={styles.container}>
        <h2>Add new contact</h2>
        <Form></Form>
        <Filter></Filter>
        <h3 className={styles.text}>Contacts</h3>
        <ContactList></ContactList>
      </div>
    </>
  );
};
