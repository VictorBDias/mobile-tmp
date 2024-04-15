import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
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
  );
}
