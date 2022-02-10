import classNames from 'classnames';
import React, { ChangeEvent } from 'react';
import Control from '../../../components/Controls';
import { ILogData } from '../../../utils/interfaces';
import styles from './styles.module.scss';
import { ILoginProps } from './types';
import Form from '../Form';
import useForm from '../../../hooks/useForm';
import { validator } from '../Validation';

const initialState: ILogData = {
  phone: '',
  password: '',
};

const LoginForm: React.FunctionComponent<ILoginProps> = ({
  children,
  className,
  refForm,
}): React.ReactElement => {
  const FormClasses: string = classNames([className]);

  const { values, errors, setErrors, handleChangeInput } =
    useForm(initialState);

  const handleFormSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { checkValid, errors } = validator.login(values);
    setErrors(errors);
    console.log({ checkValid, values, errors });
  };

  return (
    <Form
      className={FormClasses}
      reference={refForm}
      onSubmit={handleFormSubmit}
    >
      <h3 className={styles.heading}>Log in</h3>

      <Control.Input
        label="Phone number"
        variant="standard"
        className={styles.phonefield}
        name="phone"
        onChange={handleChangeInput}
        error={Boolean(errors.phone)}
        helperText={errors.phone}
      />

      <Control.Input
        label="Password"
        variant="standard"
        name="password"
        className={styles.password}
        onChange={handleChangeInput}
        error={Boolean(errors.password)}
        helperText={errors.password}
      />
      {children}
    </Form>
  );
};

export default LoginForm;
