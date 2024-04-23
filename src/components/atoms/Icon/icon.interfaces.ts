import { StyleProp, TextStyle } from 'react-native';

export type IconNames =
  | 'plus'
  | 'alert-circle'
  | 'bell'
  | 'home'
  | 'user'
  | 'cat';

export interface IconProps {
  testID?: string;
  color?: string;
  name: IconNames;
  size?: number;
  style?: StyleProp<TextStyle>;
}
