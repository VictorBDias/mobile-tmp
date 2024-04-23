import { StyleProp, ViewStyle } from 'react-native';

export type AvatarSize = 'huge' | 'big' | 'regular' | 'small' | 'tiny';

export interface IAvatarProps {
  size?: AvatarSize;
  src?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}
