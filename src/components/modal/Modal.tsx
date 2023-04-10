// Core
import { observer } from 'mobx-react-lite';

// Stores
import bonusStore from '../../stores/bonusStore';

// Utils
import { parseDate } from '../../utils/parseDateResponse';

// Components
import Loader from '../loader/Loader';

// Icons
import burnIcon from '../../assets/burning_icon.png';

// Styles
import styles from './styles.module.scss';

const Modal = () => {
  const { bonusData, isLoading, isError } = bonusStore;

  return (
    <>
      {isLoading && <Loader />}
      {isError && <div className={styles.error}>Oops! Something went wrong...</div>}
      {!isLoading && !isError && (
        <div className={styles.modal}>
          <div className={styles.modal__info}>
            <h2 className={styles.modal__title}>{bonusData.currentQuantity} бонусов</h2>
            <div className={styles.modal__description}>
              <p className={styles.modal__text}>{parseDate(bonusData.dateBurning)} сгорит&nbsp;</p>
              <img
                src={burnIcon}
                alt="fire"
              />
              <p className={styles.modal__text}>&nbsp;{bonusData.forBurningQuantity} бонусов</p>
            </div>
          </div>
          <button className={styles.modal__button}></button>
        </div>
      )}
    </>
  );
};

export default observer(Modal);
