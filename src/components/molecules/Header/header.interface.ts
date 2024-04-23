import { ReactNode } from 'react';
import { ViewProps } from 'react-native';

export interface IHeaderProps extends ViewProps {
  avatar?: string;
  content?: string;
  color?: string;
  sideElements?: ReactNode;
}
