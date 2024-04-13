import { TextProps } from 'react-native';

export type TypographyVariants = 'regular' | 'title' | 'subTitle' | 'error';

export type TypographyAlignment = 'auto' | 'left' | 'right' | 'center';

export type TypographyFontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;

export interface ITypographyProps extends TextProps {
  color?: string;
  variant?: TypographyVariants;
  textAlign?: TypographyAlignment;
  fontWeight?: TypographyFontWeight;
}
