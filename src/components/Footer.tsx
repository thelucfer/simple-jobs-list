import styles from './Footer.module.css';

export const Footer = () => (
  <footer className={styles.footer}>
    <p>
      made by{' '}
      <a
        href="https://github.com/thelucfer"
        className={styles.footer__git_link}
        rel="noopener noreferrer"
        target="_blank"
      >
        some guy
      </a>
    </p>
    <p>copyleft: no rights reserved</p>
  </footer>
);
