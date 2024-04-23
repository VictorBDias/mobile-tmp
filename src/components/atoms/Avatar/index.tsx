import React from 'react';
import { Stack, Avatar as TamaguiAvatar } from 'tamagui';
import { IAvatarProps } from './avatar.interfaces';
import { useTheme } from '@contexts/theme-provider';

export const Avatar = ({ src, size, style, onPress }: IAvatarProps) => {
  const { colors } = useTheme();
  return (
    <Stack onPress={onPress}>
      <TamaguiAvatar circular size={size} style={style}>
        <TamaguiAvatar.Image src={src} />
        <TamaguiAvatar.Fallback
          backgroundColor={colors.primary}
          delayMs={500}
        />
      </TamaguiAvatar>
    </Stack>
  );
};
