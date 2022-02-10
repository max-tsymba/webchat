import { isObjectEmpty } from '../../utils/functions';
import { IRegData } from '../../utils/interfaces';

type TValiate = {
  checkValid: boolean;
  errors: Partial<IRegData>;
};

export const validateForm = (initialObject: IRegData): TValiate => {
  const errors = {} as Partial<IRegData>;

  if (!initialObject.country) {
    errors.country = 'This field is required!';
  }

  if (!initialObject.code) {
    errors.code = 'This field is required!';
  }

  if (!initialObject.phone) {
    errors.phone = 'This field is required!';
  }

  if (!initialObject.username) {
    errors.username = 'This field is required!';
  }

  if (!initialObject.password) {
    errors.password = 'This field is required!';
  }
  return {
    checkValid: isObjectEmpty(errors),
    errors,
  };
};
