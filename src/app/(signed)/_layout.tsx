import { AppHeader } from '@components/molecules/Header';
import colors from '@design/colors';
import { Ionicons } from '@expo/vector-icons';
import { Redirect, Tabs } from 'expo-router';
import { Container, IconButton } from 'native-base';
import { Text, View } from 'react-native';

export default function SignedLayout() {
  // const { isLogged } = useAuth();
  const isLogged = true;

  if (!isLogged) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  return (
    <>
      <AppHeader
        content="Hello, @User"
        color={colors.dark[200]}
        avatar="https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
        sideElements={
          <IconButton
            onPress={() => {}}
            icon={<Ionicons name="notifications" size={24} color="white" />}
          />
        }
      />

      <Tabs
        // sceneContainerStyle={{ backgroundColor: colors.primary[400] }}
        screenOptions={{
          headerShown: false,
          // tabBarStyle: {
          //   backgroundColor: colors.primary[300],
          //   borderTopColor: colors.primary[300],
          //   borderColor: colors.primary[300],
          //   gap: 4,
          // },
        }}
      >
        <Tabs.Screen
          name="home/index"
          options={{
            tabBarLabel: 'Home',
            // tabBarActiveTintColor: colors.primary[400],
            tabBarIcon: ({ color }) => (
              <Ionicons color={color} name="home" size={24} />
            ),
          }}
        />

        <Tabs.Screen
          name="slug/[slug]"
          initialParams={{ slug: 'slug' }}
          options={{
            tabBarLabel: 'Slug',
            // tabBarActiveTintColor: colors.primary[400],
            tabBarIcon: ({ color }) => (
              <Ionicons color={color} name="bag" size={24} />
            ),
          }}
        />

        <Tabs.Screen
          name="profile/index"
          options={{
            tabBarLabel: 'Profile',
            // tabBarActiveTintColor: colors.primary[400],
            tabBarIcon: ({ color }) => (
              <Ionicons color={color} name="person" size={24} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
