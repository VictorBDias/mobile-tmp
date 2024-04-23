import { Redirect } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

export default function SignedLayout() {
  // const { isLogged } = useAuth();
  const isLogged = true;

  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  if (!isLogged) {
    return <Redirect href="/(auth)/sign-in" />;
  } else {
    return <Redirect href="/(signed)/home" />;
  }
}
