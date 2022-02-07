import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@mui/material';
import classNames from 'classnames';
import React, { SetStateAction, useState } from 'react';
import { countryData, ICountryData } from './data';
import styles from './styles.module.scss';

export interface ISignProps {
  children?: React.ReactNode | string;
  className?: string;
  refForm?: React.RefObject<HTMLFormElement>;
}

type TUser = {
  country: string;
  code: string;
  phone: number;
  password: string;
};

const Sign: React.FunctionComponent<ISignProps> = ({
  children,
  className,
  refForm,
}): React.ReactElement => {
  const bindClasses: string = classNames([className, styles.form]);
  const [codeValue, setCodeValue]: [
    string,
    React.Dispatch<SetStateAction<string>>,
  ] = useState('');

  const [user, setUser]: [
    Partial<TUser>,
    React.Dispatch<SetStateAction<Partial<TUser>>>,
  ] = useState({});

  return (
    <form
      className={bindClasses}
      ref={refForm}
      onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        // fetch('/api', {
        //   method: 'POST',
        //   body: JSON.stringify({ user }),
        //   headers: { 'Content-Type': 'application/json' },
        // });
        console.log(user);
      }}
    >
      <h3 className={styles.heading}>Sign up</h3>
      <p className={styles.par}>
        Please choose your country and enter your full phone number.
      </p>
      <FormControl variant="standard">
        <InputLabel id="demo-simple-select-standard-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Country"
          defaultValue={''}
          className={styles.select}
        >
          {countryData.map((data: ICountryData, index: number) => (
            <MenuItem
              value={index + 1}
              key={data.code}
              className={styles.select__item}
              onClick={() => {
                setCodeValue(data.code);
                setUser({ ...user, country: data.country, code: data.code });
              }}
            >
              <span>{data.country}</span>
            </MenuItem>
          ))}
        </Select>
        <div className={styles.textFields}>
          <TextField
            id="standard-basic"
            label="Code"
            variant="standard"
            value={codeValue}
            className={styles.codefield}
          />

          <TextField
            id="standard-basic"
            label="Phone number"
            variant="standard"
            className={styles.phonefield}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUser({ ...user, phone: +e.target.value })
            }
          />
        </div>

        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          className={styles.password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUser({ ...user, password: e.target.value })
          }
        />

        {children}
      </FormControl>
    </form>
  );
};

export default Sign;
