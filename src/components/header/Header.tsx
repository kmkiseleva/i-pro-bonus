// Icons
import infoSVG from '../../assets/info_icon.svg';

// Styles
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <nav className={styles.header__nav}>
          <p className={styles.header__logo}>Логотип</p>
          <button className={styles.header__button}>
            <img
              className={styles.header__image}
              src={infoSVG}
              alt="logo"
            />
          </button>
        </nav>
      </div>
    </header>
  );
};
