
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import styles from './RegistrationPage.module.css'


const RegistrationPage = () => (
  <div>
    <h1 className={styles.headerReg}>Register</h1>
    <RegistrationForm />
  </div>
);

export default RegistrationPage;
