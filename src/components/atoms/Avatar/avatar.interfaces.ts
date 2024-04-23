import { CSSProperties } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { StackProps } from 'tamagui';

export type AvatarSize = 'huge' | 'big' | 'regular' | 'small' | 'tiny';

export interface IAvatarProps {
  size?: AvatarSize;
  src?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}
