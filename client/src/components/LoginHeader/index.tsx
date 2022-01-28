import React from 'react';
import styles from './styles.module.scss';
import bg from '../../assets/img/bg.png';

const LoginHeader: React.FunctionComponent = (): React.ReactElement => {
  return (
    <div
      className={styles.main}
      style={{ backgroundImage: `url(${bg})` }}
    ></div>
  );
};

export default LoginHeader;
