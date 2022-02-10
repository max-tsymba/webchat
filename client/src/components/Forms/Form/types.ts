import { ChangeEvent, ReactNode, RefObject } from 'react';

export interface IFormProps {
  className?: string;
  children?: string | ReactNode;
  reference?: RefObject<HTMLFormElement>;
  onSubmit?: (e: ChangeEvent<HTMLFormElement>) => void;
}
