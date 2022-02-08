import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@mui/material';
import classNames from 'classnames';
import React, {
  ChangeEvent,
  Dispatch,
  FunctionComponent,
  ReactElement,
  SetStateAction,
  useState,
} from 'react';
import { countryData, ICountryData } from './data';
import styles from './styles.module.scss';
import { ISignFormProps, TUserSign } from './types';

const Sign: FunctionComponent<ISignFormProps> = ({
  children,
  className,
  refForm,
}): ReactElement => {
  const bindClasses: string = classNames([className, styles.form]);

  const [codeValue, setCodeValue]: [string, Dispatch<SetStateAction<string>>] =
    useState('');

  const [userData, setUserData]: [
    TUserSign,
    Dispatch<SetStateAction<TUserSign>>,
  ] = useState({ country: '', code: '', phone: 0, username: '', password: '' });

  const handleFormSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(userData);
  };

  const handleClickSelect = (data: ICountryData) => (): void => {
    setCodeValue(data.code);
    setUserData({ ...userData, country: data.country, code: data.code });
  };

  const handleChangeInput =
    (key: string) =>
    (e: ChangeEvent<HTMLInputElement>): void => {
      const value: string = e.target.value;
      if (key === 'number') Number(value);
      setUserData({ ...userData, [key]: value });
    };

  return (
    <form className={bindClasses} ref={refForm} onSubmit={handleFormSubmit}>
      <h3 className={styles.heading}>Sign up</h3>
      <p className={styles.par}>
        Please choose your country and enter your full phone number.
      </p>

      <FormControl variant="standard">
        <InputLabel id="select-label">Country</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          label="Country"
          defaultValue={''}
          className={styles.select}
        >
          {countryData.map((data: ICountryData, index: number) => (
            <MenuItem
              value={index + 1}
              key={data.code}
              className={styles.select__item}
              onClick={handleClickSelect(data)}
            >
              <span>{data.country}</span>
            </MenuItem>
          ))}
        </Select>

        <div className={styles.textFields}>
          <TextField
            label="Code"
            variant="standard"
            value={codeValue}
            className={styles.codefield}
          />

          <TextField
            label="Phone number"
            variant="standard"
            className={styles.phonefield}
            onChange={handleChangeInput('phone')}
          />
        </div>

        <TextField
          label="Username"
          variant="standard"
          className={styles.password}
          onChange={handleChangeInput('username')}
        />

        <TextField
          label="Password"
          variant="standard"
          className={styles.password}
          onChange={handleChangeInput('password')}
        />

        {children}
      </FormControl>
    </form>
  );
};

export default Sign;
