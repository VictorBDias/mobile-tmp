import React from 'react';
import { Stack, Avatar as TamaguiAvatar, XStack } from 'tamagui';
import { IAvatarProps } from './avatar.interfaces';
import { colors } from '@design/colors';

export const Avatar = ({ src, size, style, onPress }: IAvatarProps) => {
  return (
    <Stack onPress={onPress}>
      <TamaguiAvatar size={size} style={style}>
        <TamaguiAvatar.Image src={src} />
        <TamaguiAvatar.Fallback
          backgroundColor={colors.primary}
          delayMs={500}
        />
      </TamaguiAvatar>
    </Stack>
  );
};
