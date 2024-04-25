import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { AuthValidator, authValidator } from '@validations/auth';
import { useAuth } from '@contexts/auth-provider';
import { spacings } from '@design/spacings';
import { Button } from '@components/atoms/Button';
import { FormInput } from '@components/atoms/FormInput';
import { signInAPi } from '@apis/auth/sign-in';
import { Form } from 'tamagui';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

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

  const { styles } = useStyles(stylesheet);

  const isLoading = status === 'pending' && isSubmitting;

  const onSubmit = handleSubmit(async ({ uid, password }) => {
    const result = await signInAPi({
      uid,
      password,
    });
    if (result) {
      router.push('/(signed)/home');
    }
  });

  return (
    <View style={styles.container}>
      <Form onSubmit={onSubmit}>
        <FormInput
          control={control}
          name={'uid'}
          label={'Uid'}
          placeholder={'Input you uid'}
          required={true}
          errors={errors.uid}
          errorMessage={errors.uid?.message}
        />
        <FormInput
          control={control}
          name={'password'}
          label={'Password'}
          placeholder={'Input you password'}
          required={true}
          errors={errors.password}
          errorMessage={errors.password?.message}
          style={{ marginTop: spacings.regular }}
        />

        <Form.Trigger asChild>
          <Button
            style={{ marginTop: spacings.big }}
            isLoading={isLoading}
            onPress={onSubmit}
            content={'Sign In'}
          />
        </Form.Trigger>
      </Form>
    </View>
  );
}

const stylesheet = createStyleSheet(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    padding: spacings.big,
    gap: spacings.regular,
    backgroundColor: theme.colors.background,
  },
}));
