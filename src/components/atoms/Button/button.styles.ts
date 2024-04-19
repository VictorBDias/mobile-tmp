import { transparentize } from 'polished';
import { StyleSheet } from 'react-native';

import { useTheme } from '@shared/contexts/theme.context';

import { TypographyVariants } from '../Typography';
import { ButtonSizes, ButtonVariants } from './button.interfaces';

interface IVariantStyles {
  variant: ButtonVariants;
  style: {
    color: string;
    backgroundColor?: string;
    borderWidth?: number;
    borderColor?: string;
  };
}

interface ISizeStyles {
  textVariant: TypographyVariants;
  styledIconSize: number;
  height: number;
  width?: number;
}

export const useButtonStyles = (
  variant: ButtonVariants,
  size: ButtonSizes,
  isDisabled: boolean,
  content?: string,
  backgroundColor?: string
) => {
  const { theme } = useTheme();
  const { colors, borders, spacings } = theme;

  const variantStyles: IVariantStyles[] = [
    {
      variant: 'opaque',
      style: {
        color: colors.fullColor,
        backgroundColor: backgroundColor || colors.hoverColor,
      },
    },
    {
      variant: 'transparent',
      style: {
        color: backgroundColor || colors.primary,
        backgroundColor: transparentize(0.9, backgroundColor || colors.primary),
      },
    },
    {
      variant: 'surface',
      style: {
        color: colors.primary,
        backgroundColor: backgroundColor || colors.surface,
      },
    },
    {
      variant: 'primary',
      style: {
        color: colors.primaryText,
        backgroundColor: backgroundColor || colors.primary,
      },
    },
    {
      variant: 'text',
      style: {
        color: colors.subColor,
      },
    },
    {
      variant: 'outlined',
      style: {
        color: colors.primary,
        borderWidth: 1.5,
        borderColor: transparentize(0.85, backgroundColor || colors.primary),
      },
    },
  ];

  const getVariant = (): IVariantStyles | undefined =>
    variantStyles.find(variantStyle => variantStyle.variant === variant);

  const getSize = (): ISizeStyles => {
    switch (size) {
      case 'big':
        return { textVariant: 'boldRegular', styledIconSize: 24, height: 51 };

      case 'slim':
        return {
          textVariant: 'boldRegular',
          styledIconSize: 16,
          height: 32,
          width: 92,
        };

      case 'small':
        return {
          height: 33,
          styledIconSize: 16,
          textVariant: 'boldDescription',
        };

      default:
        return {
          textVariant: 'boldRegular',
          styledIconSize: 16,
          height: 40,
        };
    }
  };

  const getTextColor = () => getVariant()?.style.color;

  const getVariantStyle = () => getVariant()?.style;

  const { height, styledIconSize, textVariant, width } = getSize();

  const styles = StyleSheet.create({
    container: {
      opacity: isDisabled ? 0.4 : 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      borderRadius: borders.small,
      height,
      minWidth: content ? 40 : height,
      paddingHorizontal: spacings.paddings.small,
      width: width || 'auto',
      ...getVariantStyle(),
    },
    textContainer: {
      flex: 1,
    },
    rightIcon: { marginLeft: content ? spacings.margins.tiny : 0 },
    icon: {
      marginRight: content ? spacings.margins.small : 0,
    },
  });

  return {
    styles,
    innerColor: getTextColor(),
    styledIconSize,
    textVariant,
  };
};
