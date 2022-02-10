import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

type TStateValue = [values: any, setValues: Dispatch<SetStateAction<any>>];

const useForm = (initialState: any) => {
  const [values, setValues]: TStateValue = useState(initialState);
  const [errors, setErrors] = useState<any>({});

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const key: string = e.target.name;
    const value: string = e.target.value;
    setValues({ ...values, [key]: value });
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
