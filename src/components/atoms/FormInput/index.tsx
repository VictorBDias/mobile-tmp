import { Controller } from 'react-hook-form';
import { IFormInputProps } from './formInput.interface';
import { Input, Stack, View } from 'tamagui';
import { Typography } from '../Typography';
import { spacings } from '@design/spacings';
import { useTheme } from '@contexts/theme-provider';
import { Icon } from '../Icon';

export const FormInput = ({
  control,
  name,
  label,
  placeholder,
  required = false,
  errors,
  helperText,
  errorMessage,
  inputMode = 'text',
  type,
  style,
  ...rest
}: IFormInputProps) => {
  const { colors } = useTheme();
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <View alignItems="center" width={'100%'} style={style}>
          <View w="100%">
            <Stack>
              {label && (
                <Typography style={{ marginBottom: spacings.tiny }}>
                  {label}
                </Typography>
              )}
              <Input
                placeholder={placeholder}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholderTextColor={colors.halfColor}
                value={value}
                borderRadius={8}
                inputMode={inputMode}
                secureTextEntry={type === 'password'}
                style={{
                  width: 300,
                  backgroundColor: colors.surface,
                  borderColor: colors.surface,
                  color: colors.fullColor,
                }}
                {...rest}
              />
              {helperText && <Typography>{helperText}</Typography>}
              {errors && (
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: spacings.tiny,
                  }}
                >
                  <Icon name={'alert-circle'} color={colors.error} size={16} />
                  <Typography
                    style={{ marginLeft: spacings.tiny }}
                    variant="error"
                  >
                    {errorMessage}
                  </Typography>
                </View>
              )}
            </Stack>
          </View>
        </View>
      )}
    />
  );
};
