import { ReactElement } from 'react';
import { PressableProps, StyleProp, TextStyle, ViewStyle } from 'react-native';

import { TypographyAlignment } from '../Typography/typography.interfaces';

export type ButtonVariants =
  | 'primary'
  | 'text'
  | 'outlined'
  | 'opaque'
  | 'surface'
  | 'transparent';

export type ButtonSizes = 'big' | 'regular' | 'small' | 'slim';

export interface ButtonProps extends Omit<PressableProps, 'style'> {
  content?: string;
  iconName?: any;
  variant?: ButtonVariants;
  isLoading?: boolean;
  textAlign?: TypographyAlignment;
  textColor?: string;
  size?: ButtonSizes;
  iconSize?: number;
  isDisabled?: boolean;
  backgroundColor?: string;
  leftComponent?: ReactElement;
  iconColor?: string;
  rightIconName?: any;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
}
