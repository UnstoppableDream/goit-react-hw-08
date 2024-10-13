import styles from './SearchBox.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filters/slice';
import { selectFilter } from '../../redux/filters/selectors';
import { useSelector } from 'react-redux';
import { useId } from 'react';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const inputId = useId()

  const handleChange = (event) => {
    
    dispatch(setFilter(event.target.value));
    console.log("Current filter:", event.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <label className={styles.label} htmlFor={inputId}>Find contacts by name</label>
      <input  
        className={styles.searchInput}
        type="text"
        value={filter}
        onChange={handleChange}
        id={inputId} />
    </div>
  );
}