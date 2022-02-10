import React from 'react';
import styles from './styles.module.scss';
import Control from '../../../components/Controls';
import { IAuthHeaderProps } from './types';

const AuthHeader: React.FunctionComponent<IAuthHeaderProps> = ({
  onSubmit,
  title,
}): React.ReactElement => {
  return (
    <div className={styles.main}>
      {title && <div className={styles.title}>{title}</div>}
      <Control.NextButton onClick={onSubmit} />
    </div>
  );
};

export default AuthHeader;
