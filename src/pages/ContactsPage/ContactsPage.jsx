import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm"
import SearchBox from "../../components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { useEffect } from "react";


import { selectError, selectIsLoading } from "../../redux/contacts/selectors";

import { selectDelModalIsOpen, selectModalIsOpen,} from "../../redux/modal/selectors";
import EditModal from "../../components/EditForm/EditForm";
import DeleteModal from "../../components/DeletModal/DeleteModal";

export default function ContactsPage() {
    const dispatch = useDispatch();
    const loading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const modalIsOpen = useSelector(selectModalIsOpen);
    const delModalIsOpen = useSelector(selectDelModalIsOpen);
  
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  
    return (
      <>
        <ContactForm />
        <SearchBox />
        {loading && !error && <p>Loading contacts...</p>}
        {error && <p>Error! Try again later</p>}
        <ContactList />
        {modalIsOpen && <EditModal />}
        {delModalIsOpen && <DeleteModal />}
      </>
    );
  }