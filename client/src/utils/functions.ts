import { Dispatch, SetStateAction } from 'react';

export const isDefineString = (text: string): string => {
  if (text != 'undefined') return text;
  return '';
};

export const formValidation = (
  fieldValues: Record<string, unknown>,
  errors: Record<string, unknown>,
  setErrors: Dispatch<SetStateAction<Record<string, unknown>>>,
) => {
  const tempErrors = {
    ...errors,
  };

  console.log(fieldValues);
  console.log(tempErrors);
  console.log(setErrors);

  return true;
};
