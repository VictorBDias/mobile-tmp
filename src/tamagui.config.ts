import { config } from '@tamagui/config/v3';

import { createTamagui, createTokens } from 'tamagui';
import { spacings } from './design/spacings';
import { colors } from './design/colors';
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
