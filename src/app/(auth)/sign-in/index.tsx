import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { AuthValidator, authValidator } from '@validations/auth';
import { useAuth } from '@contexts/auth-provider';
import { spacings } from '@design/spacings';

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
    console.log('uid:', uid, 'password:', password);
    // const result = await login({
    //   uid,
    //   password,
    // });

    // if (result) {
    //   router.push('/(signed)/timeline');
    // }
  });

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Uid"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="uid"
      />
      {errors.uid && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />

      <Button title="Submit" onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    marginBottom: spacings.margins.regular,
  },
});
