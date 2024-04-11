import { Redirect } from 'expo-router';

export default function SignedLayout() {
  // const { isLogged } = useAuth();
  const isLogged = true;

  if (!isLogged) {
    return <Redirect href="/(auth)/sign-in" />;
  } else {
    return <Redirect href="/(signed)/home" />;
  }
}
