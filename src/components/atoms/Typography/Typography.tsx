import React from 'react';
import { Text } from 'react-native';

import { ITypographyProps } from './typography.interfaces';
import { useTypographyStyles } from './typography.styles';

const Typography = ({
  color,
  children,
  style,
  textAlign,
  variant = 'regular',
  fontWeight,
  ...rest
}: ITypographyProps) => {
  const { getStyle } = useTypographyStyles(color, fontWeight);

  return (
    <Text {...rest} style={[getStyle(variant), style, { textAlign }]}>
      {children}
    </Text>
  );
};

export { Typography };
