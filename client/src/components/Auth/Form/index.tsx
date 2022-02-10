import React, { useRef } from 'react';
import Auth from '..';
import AuthBody from '../../AuthBody';
import styles from './styles.module.scss';

const AuthForm: React.FunctionComponent = (): React.ReactElement => {
  const referenceForm: React.RefObject<HTMLFormElement> =
    useRef<HTMLFormElement>(null);

  const submitForm = (): void => {
    referenceForm.current?.dispatchEvent(
      new Event('submit', { bubbles: true, cancelable: true }),
    );
  };

  return (
    <div className={styles.main}>
      <Auth.Header onSubmit={submitForm} title="Webchat" />
      <AuthBody refForm={referenceForm} />
    </div>
  );
};

export default AuthForm;
