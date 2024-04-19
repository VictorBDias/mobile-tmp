import { colors } from '@design/colors';
import { getContrastColor } from '@utils/contrast-color';
import { Button as TamaguiButton, Spinner, View } from 'tamagui';

export const Button = ({
  content,
  onPress,
  loading = false,
  disabled = false,
  icon,
  size = '$4',
  color = colors.primary,
  rest,
}) => {
  return (
    <TamaguiButton
      onPress={onPress}
      size="$4"
      color={getContrastColor(colors.primary)}
      backgroundColor={color}
      disabled={disabled}
      icon={icon}
      opacity={disabled ? 0.5 : 1}
      p={8}
      w={200}
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

      {/* </View> */}
    </TamaguiButton>
  );
};
