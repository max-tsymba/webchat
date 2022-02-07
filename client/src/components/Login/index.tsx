import { TextField } from '@mui/material';
import classNames from 'classnames';
import React, { SetStateAction, useState } from 'react';
import styles from './styles.module.scss';

export interface ILoginProps {
  children?: React.ReactNode | string;
  className?: string;
  refForm?: React.RefObject<HTMLFormElement>;
}

type TUser = {
  phone: number;
  password: string;
};

const Login: React.FunctionComponent<ILoginProps> = ({
  children,
  className,
  refForm,
}): React.ReactElement => {
  const bindClasses: string = classNames([className]);
  const [userData, setUserData]: [
    Partial<TUser>,
    React.Dispatch<SetStateAction<Partial<TUser>>>,
  ] = useState({});

  return (
    <form
      className={bindClasses}
      ref={refForm}
      onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(userData);
      }}
    >
      <h3 className={styles.heading}>Log in</h3>
      <TextField
        id="standard-basic"
        label="Phone number"
        variant="standard"
        className={styles.phonefield}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUserData({ ...userData, phone: +e.target.value })
        }
      />
      <TextField
        id="standard-basic"
        label="Password"
        variant="standard"
        className={styles.password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUserData({ ...userData, password: e.target.value })
        }
      />
      {children}
    </form>
  );
};

export default Login;
