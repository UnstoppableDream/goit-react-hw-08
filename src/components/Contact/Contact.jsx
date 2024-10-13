import { useDispatch } from "react-redux";
import styles from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa6";
import { changeCurrentContact } from "../../redux/contacts/slice";
import { setDelModal, setModal } from "../../redux/modal/slice";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

 
    function onDelete() {
        dispatch(changeCurrentContact(contact));
        dispatch(setDelModal(true));
      }
      function onEdit(contact) {
        dispatch(setModal(true));
        dispatch(changeCurrentContact(contact));
      }
  
  

  return (
    <div className={styles.wrapper}>
      <div>
        <h2 className={styles.title}>
          <FaUser className={styles.icon} size="14" /> {contact.name}
        </h2>
        <p className={styles.phone}>
          <FaPhone className={styles.icon} size="14" />
          {contact.number}
        </p>
      </div>
      <div className={styles.btnWrapper}>
        <button
          className={styles.button}
          type="button"
          onClick={() => onEdit(contact)}
        >
          Edit
        </button>
        <button
          className={styles.button}
          type="button"
          onClick={() => onDelete(contact.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
