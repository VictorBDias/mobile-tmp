import { config } from '@tamagui/config/v3';

import { createTamagui, createTokens } from 'tamagui';
import { spacings } from './design/spacings';
import { colors, darkColors } from './design/colors';
import { radius } from './design/radius';

export const tokens = createTokens({
  ...config.tokens,
  space: spacings,
  radius: radius,
  color: colors,
});
const tamaguiConfig = createTamagui({
  ...config,
  tokens,
  themes: {
    light: {
      primary: colors.primary,
      accent: colors.accent,
      hoverAccent: colors.hoverAccent,
      background: colors.background,
      surface: colors.surface,
      shadow: colors.shadow,
      fullColor: colors.fullColor,
      subColor: colors.subColor,
      halfColor: colors.halfColor,
      helpColor: colors.helpColor,
      hoverColor: colors.hoverColor,
      faintColor: colors.faintColor,
      info: colors.info,
      success: colors.success,
      error: colors.error,
      warning: colors.warning,
      accentText: colors.accentText,
      primaryText: colors.primaryText,
      opaqueSurface: colors.opaqueSurface,
    },
    dark: {
      primary: darkColors.primary,
      accent: darkColors.accent,
      hoverAccent: darkColors.hoverAccent,
      background: darkColors.background,
      surface: darkColors.surface,
      shadow: darkColors.shadow,
      fullColor: darkColors.fullColor,
      subColor: darkColors.subColor,
      halfColor: darkColors.halfColor,
      helpColor: darkColors.helpColor,
      hoverColor: darkColors.hoverColor,
      faintColor: darkColors.faintColor,
      info: darkColors.info,
      success: darkColors.success,
      error: darkColors.error,
      warning: darkColors.warning,
      accentText: darkColors.accentText,
      primaryText: darkColors.primaryText,
      opaqueSurface: darkColors.opaqueSurface,
    },
  },
  shorthands: {
    m: 'margin',
    w: 'width',
    mt: 'marginTop',
    mb: 'marginBottom',
    ml: 'marginLeft',
    mr: 'marginRight',
    p: 'padding',
  } as const,
});

export default tamaguiConfig;

type Conf = typeof tamaguiConfig;
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}
