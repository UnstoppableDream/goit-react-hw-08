import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import styles from './UserMenu.module.css'



export const UserMenu=()=>{
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

return(
    <div className={styles.userMenu}>
        <p>Welcome, {user.name}</p>
        <button type="button" onClick={()=> dispatch(logout())}>Logout</button>
    </div>
)

}
