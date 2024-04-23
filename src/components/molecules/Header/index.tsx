import React from 'react';
import { spacings } from '@design/spacings';
import { IHeaderProps } from './header.interface';
import { XStack } from 'tamagui';
import { Typography } from '@components/atoms/Typography';
import { Avatar } from '@components/atoms';

export const Header = ({
  avatar,
  content,
  color,
  sideElements,
  ...rest
}: IHeaderProps) => {
  return (
    <XStack
      backgroundColor={color}
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      {...rest}
    >
      <XStack alignItems="center">
        {avatar && (
          <Avatar
            src="https://i.pinimg.com/736x/0b/0d/4c/0b0d4cf5c497566defb97a10d81526f5.jpg"
            size="$5"
          />
        )}

        {content && (
          <Typography color="white" style={{ marginLeft: spacings.small }}>
            {content}
          </Typography>
        )}
      </XStack>
      {sideElements && <XStack>{sideElements}</XStack>}
    </XStack>
  );
};
