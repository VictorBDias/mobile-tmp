import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Slot } from 'expo-router';
import { NativeBaseProvider } from 'native-base';
import AuthProvider from '../contexts/auth-provider';

export default function RootLayout() {
  const queryClient = new QueryClient();

  return (
    <NativeBaseProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Slot />
        </AuthProvider>
      </QueryClientProvider>
    </NativeBaseProvider>
  );
}
