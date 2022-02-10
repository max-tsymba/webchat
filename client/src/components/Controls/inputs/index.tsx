import { TextField } from '@mui/material';
import classNames from 'classnames';
import React, { FunctionComponent, ReactElement } from 'react';
import { IInputProps } from './types';
import styles from './styles.module.scss';

const Input: FunctionComponent<IInputProps> = ({
  label,
  variant,
  value,
  className,
  onChange,
  required,
  name,
  error,
  helperText,
}): ReactElement => {
  const TextFieldClasses = classNames([styles.input, className]);
  return (
    <TextField
      label={label}
      variant={variant}
      value={value}
      name={name}
      className={TextFieldClasses}
      onChange={onChange}
      required={required}
      error={error}
      helperText={helperText}
    />
  );
};

export default Input;
