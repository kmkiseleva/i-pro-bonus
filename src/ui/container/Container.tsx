// Core
import { FC, ReactNode } from 'react';

// Styles
import styles from './styles.module.scss';

export const Container: FC<{ children?: ReactNode }> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
