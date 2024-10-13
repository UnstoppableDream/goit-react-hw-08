import styles from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations'; 
import { useId } from 'react';
import toast from "react-hot-toast";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
});

export default function ContactForm(){
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const initialValues = {
    name: '',
    number: '',
  };


  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    toast(`The contact has been added`, {
      duration: 4000,
      position: "top-center",
      style: {
        background: "purple",
        color: "white",
      },
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
   
   <Form className={styles.formContainer}>
  <div className={styles.formField}>
    <label className={styles.label} htmlFor={nameFieldId}>
      Name
    </label>
    <Field
      className={styles.inputField}
      type="text"
      name="name"
      id={nameFieldId}
    />
    <ErrorMessage className={styles.error} name="name" component="div" />
  </div>

  <div className={styles.formField}>
    <label className={styles.label} htmlFor={numberFieldId}>
      Number
    </label>
    <Field
      className={styles.inputField}
      type="text"
      name="number"
      id={numberFieldId}
    />
    <ErrorMessage className={styles.error} name="number" component="div" />
  </div>

  <button className={styles.submitButton} type="submit">
    Add contact
  </button>
</Form>

  
    </Formik>
  );
};

 ContactForm;