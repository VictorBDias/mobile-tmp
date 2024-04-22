// import {
//   FormControl,
//   Input,
//   Stack,
//   WarningOutlineIcon,
//   Box,
// } from 'native-base';
import { Controller } from 'react-hook-form';
import { IFormInputProps } from './formInput.interface';
import { Input, Stack, View } from 'tamagui';
import { Typography } from '../Typography';
import { AlertCircle } from '@tamagui/lucide-icons';
import { colors } from '@design/colors';
import { spacings } from '@design/spacings';

export const FormInput = ({
  control,
  name,
  label,
  placeholder,
  required = false,
  errors,
  helperText,
  errorMessage,
}: IFormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <View alignItems="center" width={'100%'}>
          <View w="100%">
            <Stack>
              {label && <Typography>{label}</Typography>}
              <Input
                placeholder={placeholder}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={{ width: 300 }}
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
                  <AlertCircle color={colors.error} size={16} />
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
