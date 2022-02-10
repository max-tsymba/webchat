import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

type TStateValue = [
  values: Record<string, unknown>,
  setValues: Dispatch<SetStateAction<Record<string, unknown>>>,
];

const useForm = (
  initialState: Record<string, unknown>,
  validateOnChange = false,
  validate: any,
) => {
  const [values, setValues]: TStateValue = useState(initialState);
  const [errors, setErrors]: TStateValue = useState({});

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const key: string = e.target.name;
    const value: string = e.target.value;
    setValues({ ...values, [key]: value });

    if (validateOnChange) validate({ [key]: value });
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleChangeInput,
  };
};

export default useForm;
