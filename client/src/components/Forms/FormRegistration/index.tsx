import classNames from 'classnames';
import React, {
  ChangeEvent,
  Dispatch,
  FunctionComponent,
  ReactElement,
  SetStateAction,
  useState,
} from 'react';
import { IRegData } from '../../../utils/interfaces';
import useForm from '../../../hooks/useForm';
import Control from '../../Controls';
import Form from '../Form';
import { validator } from '../Validation';
import { countryData, ICountryData } from './data';
import styles from './styles.module.scss';
import { ISignFormProps } from './types';

const initialState: IRegData = {
  country: '',
  code: '',
  phone: '',
  username: '',
  password: '',
};

const RegistrationForm: FunctionComponent<ISignFormProps> = ({
  children,
  className,
  refForm,
}): ReactElement => {
  const bindClasses: string = classNames([className, styles.form]);

  const { values, setValues, errors, setErrors, handleChangeInput } =
    useForm(initialState);

  const [codeValue, setCodeValue]: [string, Dispatch<SetStateAction<string>>] =
    useState('');

  const handleClickSelect = (data: ICountryData) => (): void => {
    setCodeValue(data.code);
    setValues({ ...values, country: data.country, code: data.code });
  };

  const handleFormSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { checkValid, errors } = validator.registration(values);
    setErrors(errors);
    console.log({ checkValid, values });
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
        error={Boolean(errors.country)}
        helperText={errors.country}
      ></Control.Select>

      <div className={styles.textFields}>
        <Control.Input
          label="Code"
          variant="standard"
          value={codeValue}
          className={styles.codefield}
          name="code"
          error={Boolean(errors.code)}
          helperText={errors.code}
        />

        <Control.Input
          label="Phone number"
          variant="standard"
          className={styles.phonefield}
          name="phone"
          onChange={handleChangeInput}
          error={Boolean(errors.phone)}
          helperText={errors.phone}
        />
      </div>

      <Control.Input
        label="Username"
        variant="standard"
        className={styles.input}
        name="username"
        onChange={handleChangeInput}
        error={Boolean(errors.username)}
        helperText={errors.username}
      />

      <Control.Input
        label="Password"
        variant="standard"
        className={styles.input}
        name="password"
        onChange={handleChangeInput}
        error={Boolean(errors.password)}
        helperText={errors.password}
      />

      {children}
    </Form>
  );
};

export default RegistrationForm;
