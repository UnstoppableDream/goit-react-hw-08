import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

import styles from './LoginForm.module.css'

export default function LoginForm(){
    const dispatch = useDispatch();
    function handleSubmit(values, actions){
        if(values.email === "" || values.password === "") return;
        dispatch(login(values));
        actions.resetForm();
        
    }
    return (
     
      <>
       <div className={styles.formContainer}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
        >
          <Form className={styles.form} autoComplete="off">
            <label className={styles.label}>
              Email <Field className={styles.input} type="email" name="email" />
            </label>
    
            <label className={styles.label}>
              Password <Field className={styles.input} type="password" name="password" />
            </label>
    
            <button className={styles.loginBtn} type="submit">Login</button>
          </Form>
        </Formik>
        </div>
      </>
    );
    
    
}