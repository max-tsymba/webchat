import classNames from 'classnames';
import React, {
  ChangeEvent,
  Dispatch,
  FunctionComponent,
  ReactElement,
  SetStateAction,
  useState,
} from 'react';
import useForm from '../../../hooks/useForm';
import Control from '../../Controls';
import Form from '../../Forms/FormWrapper';
import { countryData, ICountryData } from './data';
import styles from './styles.module.scss';
import { ISignFormProps, TUserSign } from './types';

const RegistrationForm: FunctionComponent<ISignFormProps> = ({
  children,
  className,
  refForm,
}): ReactElement => {
  const bindClasses: string = classNames([className, styles.form]);
  const initialState: TUserSign = {
    country: '',
    code: '',
    phone: '',
    username: '',
    password: '',
  };

  const [codeValue, setCodeValue]: [string, Dispatch<SetStateAction<string>>] =
    useState('');

  const handleFormSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // if (validate()) console.log('ok');
    // console.log(errors);
    // console.log(values);
    console.log(validate(values));
  };

  const handleClickSelect = (data: ICountryData) => (): void => {
    setCodeValue(data.code);
    setValues({ ...values, country: data.country, code: data.code });
  };

  // const validate = (fieldValues = values) => {
  //   const temp = {
  //     ...errors,
  //   };
  //   if ('country' in fieldValues)
  //     temp.country = fieldValues.country ? '' : 'This field is required!';
  //   if ('code' in fieldValues)
  //     temp.code = fieldValues.code ? '' : 'This field is required!';
  //   if ('phone' in fieldValues)
  //     temp.phone = fieldValues.phone ? '' : 'This field is required!';
  //   if ('username' in fieldValues)
  //     temp.username = fieldValues.username ? '' : 'This field is required!';
  //   if ('password' in fieldValues)
  //     temp.password = fieldValues.password ? '' : 'This field is required!';

  //   setErrors({ ...temp });

  //   if (fieldValues == values) return Object.values(temp).every((x) => x == '');
  // };

  const validate = (field: any) => {
    setErrors({ code: 'Error' });
    return field;
  };

  const { values, setValues, errors, setErrors, handleChangeInput } = useForm(
    initialState,
    true,
    validate,
  );

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
        helperText={String(errors.country)}
      ></Control.Select>

      <div className={styles.textFields}>
        <Control.Input
          label="Code"
          variant="standard"
          value={codeValue}
          className={styles.codefield}
          name="code"
          error={Boolean(errors.code)}
          helperText={String(errors.code)}
        />

        <Control.Input
          label="Phone number"
          variant="standard"
          className={styles.phonefield}
          name="phone"
          onChange={handleChangeInput}
          error={Boolean(errors.phone)}
          helperText={String(errors.phone)}
        />
      </div>

      <Control.Input
        label="Username"
        variant="standard"
        className={styles.input}
        name="username"
        onChange={handleChangeInput}
        error={Boolean(errors.username)}
        helperText={String(errors.username)}
      />

      <Control.Input
        label="Password"
        variant="standard"
        className={styles.input}
        name="password"
        onChange={handleChangeInput}
        error={Boolean(errors.password)}
        helperText={String(errors.password)}
      />

      {children}
    </Form>
  );
};

export default RegistrationForm;
