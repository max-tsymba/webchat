import React, { useRef } from 'react';
import AuthBody from '../AuthBody';
import FormHeader from '../FormHeader';
import styles from './styles.module.scss';

const AuthForm: React.FunctionComponent = (): React.ReactElement => {
  const formRef: React.RefObject<HTMLFormElement> =
    useRef<HTMLFormElement>(null);

  const submitForm = (): void => {
    formRef.current?.dispatchEvent(
      new Event('submit', { bubbles: true, cancelable: true }),
    );
  };

  return (
    <div className={styles.main}>
      <FormHeader onSubmit={submitForm} />
      <AuthBody refForm={formRef} />
    </div>
  );
};

export default AuthForm;
