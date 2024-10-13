import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { selectDelModalIsOpen } from "../../redux/modal/selectors"
import { setDelModal } from "../../redux/modal/slice";
import { selectCurrentContact } from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations"
import { IoMdCloseCircleOutline } from "react-icons/io";
import styles from "./DeleteModal.module.css";
import toast from "react-hot-toast";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function DeleteModal() {
  const delModalIsOpen = useSelector(selectDelModalIsOpen);
  const contact = useSelector(selectCurrentContact);
  const dispatch = useDispatch();

  function closeModal() {
    dispatch(setDelModal(false));
  }
  function handleDelete() {
    dispatch(deleteContact(contact.id));
    dispatch(setDelModal(false));
    toast("The contact is deleted", {
      duration: 4000,
      position: "top-center",
      style: {
        background: "green",
        color: "white",
      },
    });
  }
  return (
    <div>
      <Modal
        isOpen={delModalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button
          onClick={closeModal}
          aria-label="close"
          className={styles.closeBtn}
        >
          <IoMdCloseCircleOutline />
        </button>
        <h2 className={styles.title}>Please confirm delete</h2>
        <button onClick={handleDelete} className={styles.deleteBtn}>
          Delete
        </button>
        <button onClick={closeModal}>Cancel</button>
      </Modal>
    </div>
  );
}