import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Slot } from 'expo-router';
import AuthProvider from '../contexts/auth-provider';
import { I18nextProvider } from 'react-i18next';
import i18n from '@translations/i18n';
import { TamaguiProvider } from 'tamagui';
import tamaguiConfig from '../tamagui.config';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  const queryClient = new QueryClient();

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <SafeAreaProvider>
              <Slot />
            </SafeAreaProvider>
          </AuthProvider>
        </QueryClientProvider>
      </I18nextProvider>
    </TamaguiProvider>
  );
}
