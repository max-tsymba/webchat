import { isObjectEmpty } from '../../utils/functions';
import { IRegData } from '../../utils/interfaces';

type TValiate = {
  checkValid: boolean;
  errors: Partial<IRegData>;
};

export const validator = {
  registration: (initialObject: IRegData): TValiate => {
    const errors = {} as Partial<IRegData>;

    if (!initialObject.country) {
      errors.country = 'This field is required!';
    }

    if (!initialObject.code) {
      errors.code = 'This field is required!';
    }

    phoneValidator(initialObject.phone, errors);

    if (!initialObject.username) {
      errors.username = 'This field is required!';
    }

    passwordValidator(initialObject.password, errors);

    return {
      checkValid: isObjectEmpty(errors),
      errors,
    };
  },
};

export function phoneValidator(phone: string, error: Partial<IRegData>): void {
  const regularExpression = /^[0-9]+$/;
  const phoneLength = 10;

  if (!phone) error.phone = 'This field is required!';
  else if (!regularExpression.test(phone))
    error.phone = 'The phone must contain only numbers';
  else if (phone.length < phoneLength) error.phone = `Incorrect phone number`;
}

export function passwordValidator(
  password: string,
  error: Partial<IRegData>,
): void {
  const regularExpression = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
  const passwordLength = 8;

  if (!password) error.password = 'This.field is required!';
  else if (!regularExpression.test(password))
    error.password = 'The password must contain letters and numbers';
  else if (password.length < passwordLength)
    error.password = `Password length must be atleast ${passwordLength} characters`;
}
