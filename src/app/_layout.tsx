import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Slot } from 'expo-router';
import { NativeBaseProvider } from 'native-base';
import AuthProvider from '../contexts/auth-provider';
import { theme } from '@design/theme';

export default function RootLayout() {
  const queryClient = new QueryClient();

  return (
    <NativeBaseProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Slot />
        </AuthProvider>
      </QueryClientProvider>
    </NativeBaseProvider>
  );
}
