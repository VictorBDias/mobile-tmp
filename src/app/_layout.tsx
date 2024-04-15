import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Slot } from 'expo-router';
import { NativeBaseProvider } from 'native-base';
import AuthProvider from '../contexts/auth-provider';
import { theme } from '@design/theme';
import { I18nextProvider } from 'react-i18next';
import i18n from '@translations/i18n';

export default function RootLayout() {
  const queryClient = new QueryClient();

  return (
    <NativeBaseProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Slot />
          </AuthProvider>
        </QueryClientProvider>
      </I18nextProvider>
    </NativeBaseProvider>
  );
}
