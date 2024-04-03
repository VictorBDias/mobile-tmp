import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import { AuthValidator, authValidator } from '@validations/auth';
import { useAuth } from '@contexts/auth-provider';
import { spacings } from '@design/spacings';
import { Input } from 'native-base';
import { Button } from '@components/atoms/Button';
import { FormInput } from '@components/atoms/FormInput';

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

  const onSubmit = handleSubmit(({ uid, password }) => {
    console.log('uid:', uid);
    // const result = await login({
    //   uid,
    //   password,
    // });
    // if (result) {
    //   router.push('/(signed)/timeline');
    // }
  });

  return (
    <SafeAreaView style={styles.container}>
      <FormInput
        control={control}
        name={'uid'}
        label={'Uid'}
        placeholder={'Placeholder'}
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
      />

      <Button
        onPress={onSubmit}
        style={{ width: '92%', marginTop: spacings.small }}
      >
        Submit
      </Button>
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
