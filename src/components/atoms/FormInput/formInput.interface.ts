import { FieldError } from 'react-hook-form';

export interface IFormInputProps {
  control: any;
  name: string;
  placeholder: string;
  label?: string;
  required?: boolean;
  errors?: FieldError;
  helperText?: string;
  errorMessage?: string;
}
