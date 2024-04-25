import { Icon } from '@components/atoms';
import { Header } from '@components/molecules/Header';
import { useAuth } from '@contexts/auth-provider';
import { useTheme } from '@contexts/theme-provider';
import { spacings } from '@design/spacings';
import { Redirect, Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'tamagui';

export default function SignedLayout() {
  const { isLogged } = useAuth();
  const { colors } = useTheme();

  const insets = useSafeAreaInsets();

  if (!isLogged) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  return (
    <View
      style={{
        backgroundColor: colors.background,
        height: '100%',
        paddingTop: insets.top + spacings.regular,
      }}
    >
      <Header
        content="Hello, @VictorBDias"
        avatar="https://i.pinimg.com/564x/ec/b3/d1/ecb3d1d08927b6cec14f34b4e3b19d2b.jpg"
        sideElements={<Icon name="bell" />}
        style={{
          paddingHorizontal: spacings.regular,
        }}
      />

      <Tabs
        sceneContainerStyle={{
          backgroundColor: colors.background,
          paddingHorizontal: spacings.regular,
          marginTop: spacings.regular,
        }}
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            shadowColor: 'transparent',
            backgroundColor: colors.background,
            borderTopColor: colors.background,
            borderColor: colors.background,
            gap: 4,
          },
        }}
      >
        <Tabs.Screen
          name="home/index"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => <Icon color={color} name="home" />,
          }}
        />

        <Tabs.Screen
          name="slug/[slug]"
          initialParams={{ slug: 'slug' }}
          options={{
            tabBarLabel: 'Slug',
            tabBarIcon: ({ color }) => <Icon color={color} name="cat" />,
          }}
        />

        <Tabs.Screen
          name="profile/index"
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => <Icon color={color} name="user" />,
          }}
        />
      </Tabs>
    </View>
  );
}
