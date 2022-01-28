import React from 'react';
import FormHeader from '../FormHeader';
import styles from './styles.module.scss';

const AuthForm: React.FunctionComponent = (): React.ReactElement => {
  return (
    <div className={styles.main}>
      <FormHeader />
    </div>
  );
};

export default AuthForm;
