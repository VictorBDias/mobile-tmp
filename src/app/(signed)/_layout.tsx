import { Ionicons } from '@expo/vector-icons';
import { Redirect, Tabs } from 'expo-router';

export default function SignedLayout() {
  // const { isLogged } = useAuth();
  const isLogged = false;

  if (!isLogged) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} name="home" size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} name="menu" size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
