import { IButtonProps as INativeButtonProps } from 'native-base/lib/typescript/components/primitives/Button/types';

export type IButtonProps = Pick<
  INativeButtonProps,
  | 'variant'
  | 'isLoading'
  | 'isHovered'
  | 'isPressed'
  | 'size'
  | 'startIcon'
  | 'endIcon'
  | 'isDisabled'
  | 'spinner'
  | 'children'
  | 'onPress'
  | 'style'
>;
