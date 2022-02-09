import { ReactNode } from 'react';

export interface ISelectProps {
  text: string;
  labelId?: string;
  id?: string;
  label?: string;
  defaultValue?: unknown;
  className?: string;
  required?: boolean;
  children?: string | ReactNode;
  listData?: any;
  onClick?: (data: any) => () => void;
  error?: boolean;
  helperText?: string;
}
