import { Header } from '@components/molecules/Header';
import { colors } from '@design/colors';
import { Ionicons } from '@expo/vector-icons';
import { Redirect, Tabs } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function SignedLayout() {
  // const { isLogged } = useAuth();
  const insets = useSafeAreaInsets();
  const isLogged = true;

  if (!isLogged) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  return (
    <>
      <Header
        content="Hello, @User"
        avatar="https://i.pinimg.com/564x/ec/b3/d1/ecb3d1d08927b6cec14f34b4e3b19d2b.jpg"
        // sideElements={
        //   <IconButton
        //     onPress={() => {}}
        //     icon={<Ionicons name="notifications" size={24} color="white" />}
        //   />
        // }
        style={{ paddingTop: insets.top }}
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
