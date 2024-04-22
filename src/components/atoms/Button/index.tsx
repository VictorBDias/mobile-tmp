import { colors } from '@design/colors';
import { getContrastColor } from '@utils/contrast-color';
import { Button as TamaguiButton, Spinner, View } from 'tamagui';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export const Button = ({
  content,
  onPress,
  loading = false,
  disabled = false,
  icon,
  size = '$4',
  color = colors.primary,
  rest,
}: any) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View>
      <TamaguiButton
        onPress={onPress}
        size={size}
        color={getContrastColor(colors.primary)}
        backgroundColor={color}
        disabled={disabled}
        icon={icon}
        opacity={disabled ? 0.5 : 1}
        p={8}
        w={200}
        borderRadius={8}
        {...rest}
      >
        {loading ? (
          <TamaguiButton.Icon>
            <Spinner
              animation="slow"
              enterStyle={{
                scale: 0,
              }}
              exitStyle={{
                scale: 0,
              }}
              opacity={loading ? 1 : 0}
            />
          </TamaguiButton.Icon>
        ) : (
          <TamaguiButton.Text>{content}</TamaguiButton.Text>
        )}
      </TamaguiButton>
    </View>
  );
};

const stylesheet = createStyleSheet(() => ({
  container: {
    flex: 1,
    variants: {
      color: {
        primary: {
          backgroundColor: colors.primary,
        },
        secondary: {
          backgroundColor: colors.accent,
        },
      },
      size: {
        small: {
          width: 100,
          height: 100,
        },
        medium: {
          width: 200,
          height: 200,
        },
        large: {
          width: 300,
          height: 300,
        },
      },
    },
  },
}));
