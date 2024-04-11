import React from 'react';
import { HStack, IconButton, Icon, Text, Box, Avatar } from 'native-base';
import { spacings } from '@design/spacings';
import { IHeaderProps } from './header.interface';

export const AppHeader = ({
  avatar,
  content,
  color,
  sideElements,
}: IHeaderProps) => {
  return (
    <>
      <Box safeAreaTop bg={color} />
      <HStack
        bg={color}
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <HStack alignItems="center">
          {avatar && (
            <Avatar
              bg="purple.600"
              alignSelf="center"
              size="lg"
              source={{
                uri: avatar,
              }}
            />
          )}

          {content && (
            <Text
              color="white"
              fontSize="16"
              fontWeight="medium"
              style={{ marginLeft: spacings.small }}
            >
              {content}
            </Text>
          )}
        </HStack>
        {sideElements && <HStack>{sideElements}</HStack>}
      </HStack>
    </>
  );
};
