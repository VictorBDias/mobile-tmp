import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import { StyleSheet, SafeAreaView } from 'react-native';
import { AuthValidator, authValidator } from '@validations/auth';
import { useAuth } from '@contexts/auth-provider';
import { spacings } from '@design/spacings';
import { Button } from '@components/atoms/Button';
import { FormInput } from '@components/atoms/FormInput';
import { signInAPi } from '@apis/auth/sign-in';
import { Avatar, Form } from 'tamagui';
import { useState } from 'react';

export default function SignInScreen() {
  const router = useRouter();
  const {
    formState: { errors, isDirty, isSubmitting },
    handleSubmit,
    control,
  } = useForm<AuthValidator>({
    resolver: zodResolver(authValidator),
  });
  const { login, status } = useAuth();
  const [loading, setLoading] = useState(false);

  const isLoading = status === 'pending' && isSubmitting;

  const onSubmit = handleSubmit(async ({ uid, password }) => {
    console.log('uid:', uid);
    const result = await signInAPi({
      uid,
      password,
    });
    if (result) {
      router.push('/(signed)/home');
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <Form onSubmit={onSubmit}>
        <FormInput
          control={control}
          name={'uid'}
          label={'Uid'}
          placeholder={'Uid'}
          required={true}
          errors={errors.uid}
          errorMessage={errors.uid?.message}
        />
        <FormInput
          control={control}
          name={'password'}
          label={'Password'}
          placeholder={'Password'}
          required={true}
          errors={errors.password}
          errorMessage={errors.password?.message}
          style={{ marginTop: spacings.regular }}
        />

        <Form.Trigger asChild>
          <Button
            style={{ marginTop: spacings.big }}
            isLoading={loading}
            onPress={() => setLoading(true)}
            content={'Sign In'}
          />
        </Form.Trigger>
      </Form>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    padding: spacings.big,
    gap: spacings.regular,
  },
});
