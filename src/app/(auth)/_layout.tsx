import { useTheme } from '@contexts/theme-provider';
import { spacings } from '@design/spacings';
import { Stack } from 'expo-router';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function AuthLayout() {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        backgroundColor: colors.background,
        height: '100%',
        paddingTop: insets.top + spacings.regular,
      }}
    >
      <Stack
        initialRouteName="sign-in/index"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="sign-in/index"
          options={{
            title: 'Sign In',
          }}
        />
        <Stack.Screen
          name="sign-up/index"
          options={{
            title: 'Sign Up',
          }}
        />
      </Stack>
    </View>
  );
}
