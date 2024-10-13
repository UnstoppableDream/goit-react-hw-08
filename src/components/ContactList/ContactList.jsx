import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css'
const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);


  return (
    <ul className={styles.contactList}>
      {contacts.map((item) => (
        <li className={styles.contactItem} key={item.id}>
        <Contact  contact={item} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
