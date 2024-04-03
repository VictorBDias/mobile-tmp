import {
  FormControl,
  Input,
  Stack,
  WarningOutlineIcon,
  Box,
} from 'native-base';
import { Controller } from 'react-hook-form';
import { IFormInputProps } from './formInput.interface';

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
        <Box alignItems="center" width={'100%'}>
          <Box w="100%">
            <FormControl isRequired={required} isInvalid={Boolean(errors)}>
              <Stack mx="4">
                {label && <FormControl.Label>{label}</FormControl.Label>}
                <Input
                  placeholder={placeholder}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={{ width: 300 }}
                />
                {helperText && (
                  <FormControl.HelperText>{helperText}</FormControl.HelperText>
                )}
                {errors && (
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}
                  >
                    {errorMessage}
                  </FormControl.ErrorMessage>
                )}
              </Stack>
            </FormControl>
          </Box>
        </Box>
      )}
    />
  );
};
