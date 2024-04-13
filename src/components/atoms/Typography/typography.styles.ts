import { StyleSheet } from 'react-native';

import { TypographyVariants } from './typography.interfaces';
import colors from '@design/colors';

const useTypographyStyles = (
  color?: string,
  fontWeight?:
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
    | undefined
) => {
  const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      color: color || colors.darkText,
      fontWeight: fontWeight,
    },
    subTitle: {
      fontSize: 16,
      color: color || colors.darkText,
      fontWeight: fontWeight,
    },
    regular: {
      fontSize: 14,
      color: color || colors.darkText,
      fontWeight: fontWeight,
    },
    error: {
      fontSize: 14,
      color: color || colors.red[500],
      fontWeight: fontWeight,
    },
  });

  const getStyle = (variant: TypographyVariants): object => {
    switch (variant) {
      case 'title':
        return styles.title;

      case 'subTitle':
        return styles.subTitle;

      case 'error':
        return styles.error;

      default:
        return styles.regular;
    }
  };

  return { getStyle };
};

export { useTypographyStyles };
