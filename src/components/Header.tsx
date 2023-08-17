import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.header__heading}>
      <Link to="/" className={styles.header__link}>
        <span>Simple</span> Jobs Listing
      </Link>
    </h1>
  </header>
);
