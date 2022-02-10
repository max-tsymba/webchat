import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { IRegData } from 'src/utils/interfaces';

type TStateValue = [
  values: IRegData,
  setValues: Dispatch<SetStateAction<IRegData>>,
];

const useForm = (
  initialState: IRegData,
  validateOnChange = false,
  validate?: any,
) => {
  const [values, setValues]: TStateValue = useState(initialState);
  const [errors, setErrors] = useState<Partial<IRegData>>({});

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
