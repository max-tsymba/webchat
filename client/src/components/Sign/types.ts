import { ReactNode, RefObject } from 'react';

export interface ISignFormProps {
  children?: ReactNode | string;
  className?: string;
  refForm?: RefObject<HTMLFormElement>;
}

export type TUserSign = {
  country: string;
  code: string;
  phone: number;
  username: string;
  password: string;
};
