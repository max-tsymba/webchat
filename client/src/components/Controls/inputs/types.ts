import { ChangeEvent } from 'react';

export interface IInputProps {
  label?: string;
  variant?: 'standard' | 'outlined' | 'filled';
  value?: string | number;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  name?: string;
}
