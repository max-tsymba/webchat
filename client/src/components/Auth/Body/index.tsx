import React, { FunctionComponent, ReactElement } from 'react';
import styles from './styles.module.scss';
import bg from '../../../assets/img/bg.png';
import { IAuthBodyProps } from 'src/components/AuthBody';

const AuthBody: FunctionComponent<IAuthBodyProps> = ({
  children,
}): ReactElement => {
  return (
    <div className={styles.main}>
      <div
        className={styles.main__header}
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className={styles.main__body}></div>
      {children}
    </div>
  );
};

export default AuthBody;
