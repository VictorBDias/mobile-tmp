import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import { AuthValidator, authValidator } from '@validations/auth';
import { useAuth } from '@contexts/auth-provider';

export default function AuthScreen() {
  const router = useRouter();
  const {
    formState: { errors, isDirty, isSubmitting },
    handleSubmit,
    control,
  } = useForm<AuthValidator>({
    resolver: zodResolver(authValidator),
  });
  const { login, status } = useAuth();

  const isLoading = status === 'pending' && isSubmitting;

  const onSubmit = handleSubmit(async ({ uid, password }) => {
    const result = await login({
      uid,
      password,
    });

    if (result) {
      router.push('/(signed)/timeline');
    }
  });

  return <View></View>;
}
