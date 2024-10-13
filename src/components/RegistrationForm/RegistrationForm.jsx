import { useDispatch } from "react-redux"
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import styles from './RegistrationForm.module.css'

const RegistrationForm=()=>{
    const dispatch = useDispatch();

   function handleRegistr(values,actions){
if(values.name === "" || values.email === "" || values.password === "")
    return;
dispatch(register(values));
actions.resetForm();
    }

    const validationSchema = Yup.object({
        name: Yup.string()
          .min(2, 'Name must be at least 2 characters')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Required'),
      });


       return (
  <>
    <div className={styles.formContainer}>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleRegistr}
      >
        <Form className={styles.form}>
          <div>
            <Field className={styles.input} name="name" placeholder="Name" />
            <ErrorMessage name="name" component="div" className={styles.error} />
          </div>
          <div>
            <Field className={styles.input} name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" className={styles.error} />
          </div>
          <div>
            <Field className={styles.input} name="password" type="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" className={styles.error} />
          </div>
          <button className={styles.regbtn} type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  </>
);

}
export default RegistrationForm;