import { TextField } from '@mui/material';
import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

export interface ILoginProps {
  children?: React.ReactNode | string;
  className?: string;
}

const Login: React.FunctionComponent<ILoginProps> = ({
  children,
  className,
}): React.ReactElement => {
  const bindClasses: string = classNames([className]);
  return (
    <form className={bindClasses}>
      <h3 className={styles.heading}>Log in</h3>
      <TextField
        id="standard-basic"
        label="Phone number"
        variant="standard"
        className={styles.phonefield}
      />
      <TextField
        id="standard-basic"
        label="Password"
        variant="standard"
        className={styles.password}
      />
      {children}
    </form>
  );
};

export default Login;
