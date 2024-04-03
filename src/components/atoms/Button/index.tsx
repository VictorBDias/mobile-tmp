import { Button as NativeButton } from 'native-base';
import { IButtonProps } from './button.interface';

export const Button = ({ children, ...rest }: IButtonProps) => {
  return <NativeButton {...rest}>{children}</NativeButton>;
};
