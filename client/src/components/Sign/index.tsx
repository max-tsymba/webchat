import classNames from 'classnames';
import React, {
  ChangeEvent,
  Dispatch,
  FunctionComponent,
  ReactElement,
  SetStateAction,
  useState,
} from 'react';
import Control from '../Controls';
import Form from '../Form';
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

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const key: string = e.target.name;
    const value: string = e.target.value;

    if (key === 'number') Number(value);
    setUserData({ ...userData, [key]: value });
  };

  return (
    <Form
      className={bindClasses}
      reference={refForm}
      onSubmit={handleFormSubmit}
    >
      <h3 className={styles.heading}>Sign up</h3>
      <p className={styles.par}>
        Please choose your country and enter your full phone number.
      </p>

      <Control.Select
        text="Country"
        labelId="select-label"
        id="select"
        label="Country"
        defaultValue={''}
        className={styles.select}
        listData={countryData}
        onClick={handleClickSelect}
      ></Control.Select>

      <div className={styles.textFields}>
        <Control.Input
          label="Code"
          variant="standard"
          value={codeValue}
          className={styles.codefield}
          name="code"
        />

        <Control.Input
          label="Phone number"
          variant="standard"
          className={styles.phonefield}
          name="phone"
          onChange={handleChangeInput}
        />
      </div>

      <Control.Input
        label="Username"
        variant="standard"
        className={styles.input}
        name="username"
        onChange={handleChangeInput}
      />

      <Control.Input
        label="Password"
        variant="standard"
        className={styles.input}
        name="password"
        onChange={handleChangeInput}
      />

      {children}
    </Form>
  );
};

export default Sign;
