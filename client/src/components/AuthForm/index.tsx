import React from 'react';
import AuthBody from '../AuthBody';
import FormHeader from '../FormHeader';
import styles from './styles.module.scss';

const AuthForm: React.FunctionComponent = (): React.ReactElement => {
  return (
    <div className={styles.main}>
      <FormHeader />
      <AuthBody />
    </div>
  );
};

export default AuthForm;
