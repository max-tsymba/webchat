import classNames from 'classnames';
import React, { FunctionComponent, ReactElement } from 'react';
import styles from './styles.module.scss';
import { IFormProps } from './types';

const Form: FunctionComponent<IFormProps> = ({
  className,
  children,
  reference,
  onSubmit,
}): ReactElement => {
  const FormClasses: string = classNames([styles.form, className]);
  return (
    <form className={FormClasses} ref={reference} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
