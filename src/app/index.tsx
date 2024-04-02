import { Redirect } from 'expo-router';

export default function SignedLayout() {
  // const { isLogged } = useAuth();
  const isLogged = false;

  if (!isLogged) {
    return <Redirect href="/(auth)/sign-in" />;
  } else {
    return <Redirect href="/(signed)/timeline" />;
  }
}
