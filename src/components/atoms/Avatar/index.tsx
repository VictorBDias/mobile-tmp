import React from 'react';
import { Stack, Avatar as TamaguiAvatar } from 'tamagui';
import { AvatarSize, IAvatarProps } from './avatar.interfaces';
import { useTheme } from '@contexts/theme-provider';

export const Avatar = ({
  src,
  size = 'regular',
  style,
  onPress,
}: IAvatarProps) => {
  const { colors } = useTheme();
  return (
    <Stack onPress={onPress}>
      <TamaguiAvatar circular size={handleSize(size)} style={style}>
        <TamaguiAvatar.Image src={src} />
        <TamaguiAvatar.Fallback
          backgroundColor={colors.primary}
          delayMs={500}
        />
      </TamaguiAvatar>
    </Stack>
  );
};

function handleSize(size: AvatarSize) {
  switch (size) {
    case 'tiny':
      return '$2';
    case 'small':
      return '$3';
    case 'regular':
      return '$4';
    case 'big':
      return '$6';
    case 'huge':
      return '$10';
    default:
      return '$6';
  }
}
